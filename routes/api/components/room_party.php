<?php

    use App\Http\Controllers\Api\v1\RoomPartyController;
    use Illuminate\Support\Facades\Route;

    Route::get('room_party/get', [RoomPartyController::class, 'getRoomParty']);
    Route::post('room_party/add_user', [RoomPartyController::class, 'addUserRoomParty']);
    Route::post('room_party/add_users', [RoomPartyController::class, 'addUsersRoomParty']);
    Route::put('room_party/{room_party}/appointment_admin', [RoomPartyController::class, 'appointmentUserAdminRoomParty']);
    Route::put('room_party/{room_party}/appointment_regular', [RoomPartyController::class, 'appointmentUserRegularRoomParty']);
    Route::put('room_party/{room_party}/appointment_guest', [RoomPartyController::class, 'appointmentUserGuestRoomParty']);
    Route::delete('room_party/{room_party}/delete_participant', [RoomPartyController::class, 'deleteParticipantRoomParty']);
