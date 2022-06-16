<?php

use App\Http\Controllers\Api\v1\RoomController;
use Illuminate\Support\Facades\Route;

Route::get('rooms', [RoomController::class, 'getRooms']);
Route::get('room/{room}', [RoomController::class, 'getRoom']);
Route::post('room/create', [RoomController::class, 'createRoom']);
Route::put('room/{room}/update', [RoomController::class, 'updateRoom']);
Route::delete('room/{room}/delete', [RoomController::class, 'deleteRoom']);
