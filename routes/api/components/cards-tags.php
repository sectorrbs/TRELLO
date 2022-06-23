<?php

use App\Http\Controllers\Api\v1\CardsTagsController;
use Illuminate\Support\Facades\Route;

Route::post('cards-tags/create', [CardsTagsController::class, 'createCardsTags']);
