<?php

use App\Http\Controllers\Api\v1\BackgroundCardController;
use Illuminate\Support\Facades\Route;

Route::get('backgrounds-cards', [BackgroundCardController::class, 'getBackgrounds']);
