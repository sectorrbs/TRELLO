<?php

use App\Http\Controllers\Api\v1\CardCommentController;
use Illuminate\Support\Facades\Route;

Route::post('card_comment/create-or-update', [CardCommentController::class, 'createCardComment']);
Route::delete('card_comment/{card_comment}/delete', [CardCommentController::class, 'deleteCardComment']);

