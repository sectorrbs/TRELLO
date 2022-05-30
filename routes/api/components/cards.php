<?php


use App\Http\Controllers\Api\v1\DeskListController;
use Illuminate\Support\Facades\Route;

Route::post('card/create', [DeskListController::class, 'createList']);
