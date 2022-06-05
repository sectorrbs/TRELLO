<?php

use App\Http\Controllers\Api\v1\TaskController;
use Illuminate\Support\Facades\Route;

Route::post('task/create', [TaskController::class, 'createTask']);
Route::delete('task/{task}/delete', [TaskController::class, 'deleteTask']);
Route::put('task/{task}/update', [TaskController::class, 'updateTask']);
