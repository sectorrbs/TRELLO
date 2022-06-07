<?php

    use Illuminate\Support\Facades\Route;

    Route::group(['middleware' => 'auth:sanctum'], function () {
        require 'components/desks.php';
        require 'components/lists.php';
        require 'components/cards.php';
        require 'components/check_lists.php';
        require 'components/tasks.php';
        require 'components/user.php';
    });

