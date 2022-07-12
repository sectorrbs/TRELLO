<?php

    use App\Http\Controllers\Api\v1\UserController;
    use Illuminate\Support\Facades\Route;

    Route::get('users/get', [UserController::class, 'getUsers']);
