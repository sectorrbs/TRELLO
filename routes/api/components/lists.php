<?php

    use App\Http\Controllers\Api\v1\DeskListController;
    use Illuminate\Support\Facades\Route;

    Route::post('list/create', [DeskListController::class, 'createList']);
    Route::post('list/update-succession', [DeskListController::class, 'updateSuccessionLists']);
    Route::put('list/{list}/update', [DeskListController::class, 'updateList']);
    Route::delete('list/{list}/delete', [DeskListController::class, 'deleteList']);
