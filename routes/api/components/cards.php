<?php


use App\Http\Controllers\Api\v1\CardController;
use Illuminate\Support\Facades\Route;

Route::get('card/{card}', [CardController::class, 'getCard']);
Route::post('card/create', [CardController::class, 'createCard']);
Route::delete('card/{card}/delete', [CardController::class, 'deleteCard']);
