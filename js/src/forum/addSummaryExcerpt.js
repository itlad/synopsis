/* This is part of the itlad/synopsis project.
 * 
 * Additional modifications (c)2021 itlad
 * 
 * Additional modifications (c)2020 Ian Morland
 *
 * Modified code (c)2019 Jordan Schnaidt
 *
 * Original code (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionListState from 'flarum/states/DiscussionListState';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';

export default function addSummaryExcerpt() {
    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        params.include.push(['firstPost', 'lastPost']);
    });

    extend(DiscussionListItem.prototype, 'infoItems', function (items) {
        const discussion = this.attrs.discussion;

        if (app.session.user && !app.session.user.preferences().showSynopsisExcerpts) {
            return;
        }

        const excerptPost = app.forum.attribute('synopsis.excerpt_type') === 'first' ? discussion.firstPost() : discussion.lastPost();
        const excerptLength = app.forum.attribute('synopsis.excerpt_length');
        const excerptImageEable = app.forum.attribute('synopsis.images-excerpt_enable');
        const excerptImageLength = app.forum.attribute('synopsis.images-excerpt_length');
        const richExcerpt = app.forum.attribute('synopsis.rich_excerpts');
        const onMobile = app.session.user ? app.session.user.preferences().showSynopsisExcerptsOnMobile : false;

        if (excerptPost) {
            const excerpt = (
                <div>
                    {richExcerpt ? m.trust(truncate(excerptPost.contentHtml(), excerptLength)) : truncate(excerptPost.contentPlain(), excerptLength)}
                </div>
            );
            items.add(onMobile ? 'excerptM' : 'excerpt', excerpt, -100);

            if (excerptImageEable) {
                let contentHtml = excerptPost.contentHtml()
                if (contentHtml) {
                    let images = contentHtml.match(/<img.*?(?:>|\/>)/gi);
                    excerptImageLength = excerptImageLength ? excerptImageLength : 4;
                    images = images.length > excerptImageLength ? images.slice(0, excerptImageLength) : images;
                    const excerptImages = (
                        <ul className="excerpt-image">
                            {images.map(img => (
                                <li>
                                    <img src={img.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i)[1]} />
                                </li>
                            ))}
                        </ul>
                    );
                    items.add(onMobile ? 'excerptImages' : 'excerptImagesM', excerptImages, -100);
                }
            }
        }
    });
}
