<?php

    use App\Http\Controllers\Api\v1\RoomPartyController;
    use Illuminate\Support\Facades\Route;

    Route::get('room_party/get', [RoomPartyController::class, 'getRoomParty']);
    Route::post('room_party/create', [RoomPartyController::class, 'createRoomParty']);
    Route::post('room_party/add_users', [RoomPartyController::class, 'addUserRoomParty']);
    Route::put('room_party/{room_party}/appointment_admin', [RoomPartyController::class, 'appointmentUserAdminRoomParty']);
    Route::delete('room_party/{room_party}/delete_participant', [RoomPartyController::class, 'deleteParticipantRoomParty']);
