<?php

    use App\Http\Controllers\Api\v1\RoomPartyController;
    use Illuminate\Support\Facades\Route;

    Route::post('room_party/create', [RoomPartyController::class, 'createRoomParty']);
    Route::post('room_party/add', [RoomPartyController::class, 'addRoomParty']);
