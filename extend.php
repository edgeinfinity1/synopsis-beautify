<?php

/*
 * This file is part of fof/synopsis.
 *
 * (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Synopsis;

use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Controller\UpdateDiscussionController;
use Flarum\Extend;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Event\Saving as TagSaving;
use Flarum\Tags\Tag;
use Flarum\Api\Context;
use Flarum\Api\Endpoint;
use Flarum\Api\Resource;
use Flarum\Api\Resource\DiscussionResource;
use Flarum\Api\Schema;
use Flarum\Tags\Api\Resource\TagResource;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum/extension.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Model(Tag::class))
        ->cast('excerpt_length', 'int')
        ->cast('rich_excerpts', 'bool'),

    (new Extend\Settings())
        ->default('fof-synopsis.excerpt_length', 200)
        ->default('fof-synopsis.rich-excerpts', false)
        ->default('fof-synopsis.excerpt-type', 'first')
        ->serializeToForum('synopsis.excerpt_length', 'fof-synopsis.excerpt_length', 'intVal')
        ->serializeToForum('synopsis.rich_excerpts', 'fof-synopsis.rich-excerpts', 'boolVal')
        ->serializeToForum('synopsis.excerpt_type', 'fof-synopsis.excerpt-type'),

    (new Extend\User())
        ->registerPreference('showSynopsisExcerpts', 'boolVal', true)
        ->registerPreference('showSynopsisExcerptsOnMobile', 'boolVal', false),

    (new Extend\ApiResource(TagResource::class))
        ->fields(Api\AddTagResourceFields::class),

    (new Extend\ApiResource(DiscussionResource::class))
        ->endpoint(['index', 'update'], function (Endpoint\Index|Endpoint\Update $endpoint) {
            $settings = resolve('flarum.settings');

            if ($settings->get('fof-synopsis.excerpt-type') === 'last') {
                $endpoint->addDefaultInclude(['lastPost']);
            } else {
                $endpoint->addDefaultInclude(['firstPost']);
            }

            return $endpoint;
        }),
];
