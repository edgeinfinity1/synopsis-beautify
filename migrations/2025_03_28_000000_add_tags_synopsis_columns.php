<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function(Builder $schema) {
        if (!$schema->hasColumn('tags', 'excerpt_length')) {
            $schema->table('tags', function (Blueprint $table) {
                $table->integer('excerpt_length')->nullable()->unsigned();
            });
        }

        if (!$schema->hasColumn('tags', 'rich_excerpts')) {
            $schema->table('tags', function (Blueprint $table) {
                $table->boolean('rich_excerpts')->nullable();
            });
        }
    },
    'down' => function(Builder $schema) {
        $schema->table('tags', function (Blueprint $table) {
            $table->dropColumn('excerpt_length');
            $table->dropColumn('rich_excerpts');
        });
    }
];
