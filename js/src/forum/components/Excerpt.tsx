import Component, { ComponentAttrs } from 'flarum/common/Component';
import Post from 'flarum/common/models/Post';
import { truncate } from 'flarum/common/utils/string';
import type Mithril from 'mithril';
import truncateHtml from '../utils/truncateHtml';

export interface ExcerptAttrs extends ComponentAttrs {
  post: Post;
  length: number;
  richExcerpt: boolean;
}

export default class Excerpt extends Component<ExcerptAttrs> {
  post!: Post;
  length!: number;
  richExcerpt!: boolean;

  oninit(vnode: Mithril.Vnode<ExcerptAttrs, this>) {
    super.oninit(vnode);

    this.post = this.attrs.post;
    this.length = this.attrs.length;
    this.richExcerpt = this.attrs.richExcerpt;
  }

  beautifyContent() {
    const blockTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    function containsOnlySpecificChild(parent: Element, childSelector: string) {
      const children = parent.childNodes;
      let elementCount = 0;
      let foundElement = null;

      if (!childSelector) {
        if (!blockTags.includes(parent.tagName.toLowerCase())) {
          return false;
        }

        return !children.length;
      }

      for (let i = 0; i < children.length; i++) {
        const node = children[i];

        if (node.nodeType === Node.ELEMENT_NODE) {
          elementCount++;
          if (elementCount > 1 || !(node as Element).matches(childSelector)) {
            return false;
          }
          foundElement = node;
        } else if (node.nodeType === Node.TEXT_NODE && (node.textContent || '').trim() !== '') {
          return false;
        } else if (node.nodeType !== Node.TEXT_NODE) {
          return false;
        }
      }

      return elementCount === 1 && foundElement !== null;
    }

    function withHiddenDisplay(element: Element, hidden: boolean) {
      const clone = element.cloneNode(true) as HTMLElement;

      if (hidden) {
        clone.style.setProperty('display', 'none');
      }

      return clone.outerHTML;
    }

    function withoutImages(element: Element) {
      const clone = element.cloneNode(true) as HTMLElement;

      clone.querySelectorAll('img').forEach((img) => {
        img.replaceWith();
      });

      return clone;
    }

    function removeUnnecessaryBreaks(element: Element) {
      const clone = element.cloneNode(true) as HTMLElement;
      const nextChildren: ChildNode[] = [];
      let firstHandled = false;
      let lastBr = false;
      let brCount = 0;

      clone.childNodes.forEach((node) => {
        if (node.nodeType === Node.COMMENT_NODE) {
          nextChildren.push(node.cloneNode(true) as ChildNode);
          return;
        }

        if (node.nodeType === Node.TEXT_NODE) {
          if ((node.textContent || '').trim() !== '') {
            firstHandled = true;
            lastBr = false;
          }

          nextChildren.push(node.cloneNode(true) as ChildNode);
          return;
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
          const child = node as Element;
          const isImage = child.tagName.toLowerCase() === 'img' || child.firstElementChild?.tagName.toLowerCase() === 'img';

          if (isImage) {
            nextChildren.push(node.cloneNode(true) as ChildNode);
            return;
          }

          if (child.tagName.toLowerCase() === 'br') {
            brCount++;

            if (brCount <= 2 && firstHandled && !lastBr) {
              nextChildren.push(node.cloneNode(true) as ChildNode);
            }

            lastBr = true;
            return;
          }

          firstHandled = true;
          lastBr = false;
          nextChildren.push(node.cloneNode(true) as ChildNode);
        }
      });

      clone.replaceChildren(...nextChildren);

      return clone;
    }

    function serializeNonEmpty(element: Element) {
      return containsOnlySpecificChild(element, '') ? '' : (element as HTMLElement).outerHTML;
    }

    let htmlContent = '';
    let finalHtmlContent = '';

    if (this.richExcerpt) {
      htmlContent = truncateHtml(this.contentRich() ?? '', this.length);
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');

      const oneSynopsis = doc.body;
      let richContext = null;
      const directChildren = Array.from(oneSynopsis.children);

      if (directChildren.length === 1 && directChildren[0].children.length) {
        richContext = false;
      } else {
        // poor context still breaks element when specials appear, like img
        // get that out
        for (let i = 0; i < directChildren.length - 1; i++) {
          const directChildNotLast = directChildren[i];
          if (directChildNotLast.children.length !== 0) {
            richContext = false;
            break;
          }
        }
      }

      if (richContext === null) richContext = true;

      if (richContext) {
        let imgCount = 0;
        let nonImgCount = 0;
        const content: string[] = [];
        const pending: string[] = [];
        const pending2: string[] = [];

        for (const directChild of directChildren) {
          if (containsOnlySpecificChild(directChild, 'img')) {
            imgCount += 1;
            pending.push(withHiddenDisplay(directChild, imgCount >= 4));
          } else if (directChild.tagName.toLowerCase() === 'img') {
            imgCount += 1;
            pending2.push(`<p>${withHiddenDisplay(directChild, imgCount >= 4)}</p>`);
          } else {
            nonImgCount += 1;
            content.push(withHiddenDisplay(directChild, nonImgCount >= 4));
          }
        }

        finalHtmlContent = [...content, ...pending, ...pending2].join('');
      } else {
        let imgCount = 0;
        const content: HTMLElement[] = [];
        const imgContent: string[] = [];

        for (const directChild of directChildren) {
          directChild.querySelectorAll('img').forEach((img) => {
            imgCount += 1;
            imgContent.push(`<p>${withHiddenDisplay(img, imgCount >= 4)}</p>`);
          });

          const childWithoutImages = withoutImages(directChild);
          const cleanedChild = removeUnnecessaryBreaks(childWithoutImages);
          content.push(cleanedChild);
        }

        finalHtmlContent =
          content
            .map((element, index) => {
              if (index >= 3) {
                element.style.setProperty('display', 'none');
              }

              return serializeNonEmpty(element);
            })
            .join('') + imgContent.join('');
      }
    } else {
      htmlContent = truncate(this.contentPlain() ?? '', this.length);
      finalHtmlContent = htmlContent;
    }

    return finalHtmlContent;
  }

  view() {
    return <div className="Synopsis-excerpt">{this.getContent()}</div>;
  }

  getContent(): Mithril.Vnode | string {
    if (this.richExcerpt) {
      return m.trust(this.beautifyContent());
    }

    return truncate(this.contentPlain() ?? '', this.length);
  }

  contentRich() {
    return this.post.contentHtml();
  }

  contentPlain() {
    return this.post.contentPlain();
  }
}
