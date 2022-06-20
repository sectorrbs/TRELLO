<?php

    use Illuminate\Support\Facades\Route;

    Route::group(['middleware' => 'auth:sanctum'], function () {
        require 'components/rooms.php';
        require 'components/desks.php';
        require 'components/lists.php';
        require 'components/cards.php';
        require 'components/check_lists.php';
        require 'components/tasks.php';
        require 'components/user.php';
        require 'components/backgrounds-desks.php';
        require 'components/desks-tags.php';
    });

