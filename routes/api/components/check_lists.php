<?php

use App\Http\Controllers\Api\v1\CheckListController;
use App\Http\Controllers\Api\v1\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('check_list/{check_list}', [CheckListController::class, 'getCheckList']);
Route::post('check_list/create', [CheckListController::class, 'createCheckList']);
Route::delete('check_list/{check_list}/delete', [CheckListController::class, 'deleteCheckList']);
Route::put('check_list/{check_list}/update', [CheckListController::class, 'updateCheckList']);
