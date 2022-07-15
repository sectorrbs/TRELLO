<?php

    use App\Http\Controllers\Api\v1\DeskPartyController;
    use Illuminate\Support\Facades\Route;

    Route::get('desk_party/get', [DeskPartyController::class, 'getDeskParty']);
    Route::post('desk_party/add_user', [DeskPartyController::class, 'addUserDeskParty']);
    Route::post('desk_party/add_users', [DeskPartyController::class, 'addUsersDeskParty']);
    Route::put('desk_party/{desk_party}/appointment_admin', [DeskPartyController::class, 'appointmentUserAdminDeskParty']);
    Route::put('desk_party/{desk_party}/appointment_regular', [DeskPartyController::class, 'appointmentUserRegularDeskParty']);
    Route::put('desk_party/{desk_party}/appointment_guest', [DeskPartyController::class, 'appointmentUserGuestDeskParty']);
    Route::delete('desk_party/{desk_party}/delete_participant', [DeskPartyController::class, 'deleteParticipantDeskParty']);
