import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';
import Excerpt from './components/Excerpt';

export default function addSummaryExcerpt() {
  extend(DiscussionListState.prototype, 'requestParams', function (params) {
    if (typeof params.include === 'string') {
      params.include = [params.include];
    } else {
      params.include = params.include || [];
    }

    if (app.forum.attribute<string>('synopsis.excerpt_type') === 'first') {
      params.include.push('firstPost');
    } else {
      params.include.push('lastPost');
    }
  });

  extend(DiscussionListItem.prototype, 'infoItems', function (items: ItemList<Mithril.Children>) {
    const discussion = this.attrs.discussion;

    if (app.session.user && !app.session.user.preferences()?.showSynopsisExcerpts) {
      return;
    }

    const tags = discussion.tags();
    let tag;
    let disableSyno = false;
    let disableRich = false;
    if (tags) {
      for (const tagTemp of tags) {
        if (tagTemp?.excerptLength() === 0) {
          // Disable syno if any included tag disallows syno
          disableSyno = true;
        }
        if (!tagTemp?.richExcerpts() && (tagTemp.isPrimary() || tagTemp.parent())) {
          // Disable rich only if a unique tag disallows rich
          disableRich = true;
        }
        if (tagTemp?.isPrimary()) {
          // If this is a primary tag, then it's good for following procedure
          tag = tagTemp;
        }
      }
      if (!tag) {
        // Failsafe
        tag = tags[tags.length - 1];
      }
    }

    const excerptPost = app.forum.attribute<string>('synopsis.excerpt_type') === 'first' ? discussion.firstPost() : discussion.lastPost();
    const excerptLength = typeof tag?.excerptLength() === 'number' ? tag?.excerptLength() : app.forum.attribute<number>('synopsis.excerpt_length');
    const richExcerpt = !disableRich || app.forum.attribute<boolean>('synopsis.rich_excerpts');
    const onMobile = app.session.user ? app.session.user.preferences()?.showSynopsisExcerptsOnMobile : false;

    // A length of zero means we don't want a synopsis for this discussion, so do nothing.
    if (excerptLength === 0 || disableSyno) {
      return;
    }

    if (excerptPost) {
      const excerpt = <Excerpt post={excerptPost} length={excerptLength} richExcerpt={richExcerpt} />;

      items.add('excerpt', excerpt, -100);
      onMobile && items.add('excerptM', excerpt, -100);
    }
  });
}
