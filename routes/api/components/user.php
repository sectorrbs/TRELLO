<?php

    use App\Http\Controllers\Api\v1\UserController;
    use Illuminate\Support\Facades\Route;

    Route::get('user', [UserController::class, 'getUser']);
