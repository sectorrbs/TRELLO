<?php

use App\Http\Controllers\Api\v1\RoomPartyController;
use Illuminate\Support\Facades\Route;

Route::post('room/create', [RoomPartyController::class, 'createRoom']);
