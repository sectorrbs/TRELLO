<?php

use App\Http\Controllers\Api\v1\CheckListController;
use Illuminate\Support\Facades\Route;

Route::post('check_list/create', [CheckListController::class, 'createCheckList']);
Route::delete('check_list/{check_list}/delete', [CheckListController::class, 'deleteCheckList']);
