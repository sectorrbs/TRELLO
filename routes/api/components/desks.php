<?php

use App\Http\Controllers\Api\v1\DesksController;
use Illuminate\Support\Facades\Route;

Route::get('desks', [DesksController::class, 'getDesks']);
Route::get('desk/{desk}', [DesksController::class, 'getDesk'])->middleware('user');
Route::post('desk/create', [DesksController::class, 'createDesk']);
Route::put('desk/{desk}/update', [DesksController::class, 'updateDesk']);
Route::delete('desk/{desk}/delete', [DesksController::class, 'deleteDesk']);
