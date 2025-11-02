<?php

namespace FoF\Synopsis\Api;

use Flarum\Api\Schema;
use Flarum\Tags\Tag;

class AddTagResourceFields
{
    public function __invoke()
    {
        return [
            Schema\Boolean::make('richExcerpts')
                ->description('Whether or not rich text excerpts are enabled for this tag.')
                ->nullable()
                ->writable(),

            Schema\Integer::make('excerptLength')
                ->description('The length of excerpts for this tag.')
                ->nullable()
                ->writable()
                ->set(function (Tag $tag, ?string $value) {
                    $tag->excerpt_length = $value === null ? null : (int) $value;
                }),
        ];
    }
}
