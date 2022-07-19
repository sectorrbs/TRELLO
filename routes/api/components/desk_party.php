<?php

use App\Http\Controllers\Api\v1\DeskPartyController;
use Illuminate\Support\Facades\Route;

Route::get('desk_party/get', [DeskPartyController::class, 'getDeskParty']);
//Route::post('desk_party/add_user', [DeskPartyController::class, 'addUserDeskParty']);
//Route::post('desk_party/add_users', [DeskPartyController::class, 'addUsersDeskParty']);
Route::put('desk_party/{desk_party}/update_user', [DeskPartyController::class, 'updateUserDeskParty']);

