<?php

use App\Http\Controllers\Api\v1\BackgroundDeskController;
use Illuminate\Support\Facades\Route;

Route::get('backgrounds-desks', [BackgroundDeskController::class, 'getBackgrounds']);
