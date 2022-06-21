<?php

use App\Http\Controllers\Api\v1\DesksTagsController;
use Illuminate\Support\Facades\Route;

Route::get('desk-tags/{deskId}', [DesksTagsController::class, 'getDeskTags']);
Route::post('desks-tags/create', [DesksTagsController::class, 'createDesksTags']);
Route::put('desk-tags/{tag}/update', [DesksTagsController::class, 'updateDeskTag']);
