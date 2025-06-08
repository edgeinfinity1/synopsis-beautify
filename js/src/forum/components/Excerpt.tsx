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

    function containsOnlySpecificChild(parent: HTMLElement, childSelector: string) {
      const children = parent.childNodes;
      let elementCount = 0;
      let foundElement = null;
      
      if (!childSelector) {
          if (!(["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(parent.tagName.toLowerCase()))) {
              return false;
          } else {
              return children.length ? false : true;
          }
      }
  
      for (let i = 0; i < children.length; i++) {
          const node = children[i];
          
          if (node.nodeType === Node.ELEMENT_NODE) {
              elementCount++;
              if (elementCount > 1 || !(node as Element).matches(childSelector)) {
                  return false;
              }
              foundElement = node;
          }
          else if (node.nodeType === Node.TEXT_NODE && (node.textContent || '').trim() !== '') {
              return false;
          }
          else if (node.nodeType !== Node.TEXT_NODE) {
              return false;
          }
      }
      return elementCount === 1 && foundElement !== null;
    }

    function isFirstChildBR(element: HTMLElement) {
        const children = element.childNodes;
        for (let i = 0; i < children.length; i++) {
            const node = children[i];
            if (node.nodeType === 8) continue;
            
            if (node.nodeType === 3) {
                if ((node.textContent || '').trim() !== '') return false;
            } 
            else if (node.nodeType === 1) {
                if (node.tagName.toLowerCase() == 'img') continue;
                return node.tagName.toLowerCase() == 'br';
            }
        }
        return false;
    }

    let htmlContent = '';
    let finalHtmlContent = '';
    if (this.richExcerpt) {
      htmlContent = truncateHtml(this.contentRich() ?? '', this.length);
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      const oneSynopsis = doc.body;
      let richContext = null;
      const directChildren = oneSynopsis.children;
      if (directChildren.length == 1 && directChildren[0].children.length) {
          richContext = false;
      } else {
          // poor context still breaks element when specials appear, like img
          // get that out
          for (let i = 0; i < directChildren.length - 1; i++) {
              const directChildNotLast = directChildren[i];
              if (directChildNotLast.children.length == 0) {
                  richContext = true;
                  break;
              }
          }
      }
      if (richContext) {
        let imgCount = 0;
        let nonImgCount = 0;
        
        let pending = [];
        let pending2 = [];
        
        for (const directChild of directChildren) {
            if (containsOnlySpecificChild(directChild, "img")) {
                // so this is a pure picture child
                imgCount += 1;
                if (imgCount >= 4) {
                    directChild.style.setProperty("display", "none");
                }
                pending.push(directChild);
            } else if (directChild.tagName.toLowerCase() == "img") {
                imgCount += 1;
                if (imgCount >= 4) {
                    directChild.style.setProperty("display", "none");
                }
                pending2.push(directChild);
            } else {
                nonImgCount += 1;
                if (nonImgCount >= 4) {
                    directChild.style.setProperty("display", "none");
                }
            }
        }
        for (const pend of pending) {
            oneSynopsis.appendChild(pend);
        }
        for (const pend2 of pending2) {
            let imgWrapper = document.createElement("p");
            imgWrapper.appendChild(pend2);
            oneSynopsis.appendChild(imgWrapper);
        }
      } else {
        // ensured poor context
        let imgCount = 0;
        let nonImgCount = 0;
        
        let imgSets: any[] = [];
        for (const directChild of directChildren) {
            imgSets = imgSets.concat(directChild.querySelectorAll("img"));
            let brSet = directChild.querySelectorAll("br");
            for (let i = 2; i < brSet.length; i++) {
                let removeBr = brSet[i];
                removeBr.remove();
            }
            if (isFirstChildBR(directChild) && brSet.length) {
                brSet[0].remove();
            }
        }
        for (const imgs of imgSets) {
            for (const img of imgs) {
                imgCount += 1;
                if (imgCount >= 4) {
                    img.style.setProperty("display", "none");
                }
                let imgWrapper = document.createElement("p");
                imgWrapper.appendChild(img);
                oneSynopsis.appendChild(imgWrapper);
            }
        }
        
        nonImgCount = directChildren.length - imgCount
        for (let i = 3; i < nonImgCount; i++) {
            let nonDispChild = directChildren[i];
            nonDispChild.style.setProperty("display", "none");
        }
        
        const clearEmpty = oneSynopsis.querySelectorAll("*");
        for (const ifEmpty of clearEmpty) {
            if (containsOnlySpecificChild(ifEmpty, "")) {
                ifEmpty.remove();
            }
        }
      }
      //console.log(oneSynopsis);
      finalHtmlContent = oneSynopsis.innerHTML;
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
