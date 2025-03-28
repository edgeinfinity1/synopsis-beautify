<?php

/*
 * This file is part of fof/synopsis.
 *
 * (c) FriendsOfFlarum
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Synopsis\Tags;

use Flarum\Tags\Event\Saving as Event;
use Illuminate\Support\Arr;

class Saving
{
    public function handle(Event $event)
    {
        $attributes = Arr::get($event->data, 'attributes', []);

        $excerptLength = Arr::get($attributes, 'excerptLength', '');
        $event->tag->excerpt_length = $excerptLength === '' ? null : $excerptLength;

        $richExcerpts = Arr::get($attributes, 'richExcerpts', false);
        $event->tag->rich_excerpts = $richExcerpts === null ? $richExcerpts : (bool) $richExcerpts;
    }
}
