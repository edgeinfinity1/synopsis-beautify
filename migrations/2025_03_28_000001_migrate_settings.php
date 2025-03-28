<?php

use Illuminate\Database\Schema\Builder;

return [
    'up' => function(Builder $schema) {
        $db = $schema->getConnection();

        foreach (['excerpt_length', 'rich-excerpts', 'excerpt-type', 'disable-when-searching'] as $setting) {
            $db->table('settings')
                ->where('key', "ianm-synopsis.$setting")
                ->update(['key' => "fof-synopsis.$setting"]);
        }
    },
    'down' => function(Builder $schema) {
        // Do nothing.
    }
];
