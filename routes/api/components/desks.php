<?php

    use App\Http\Controllers\Api\v1\DesksController;

    Route::get('desks', [DesksController::class, 'getDesks']);
    Route::get('desk/{desk}', [DesksController::class, 'getDesk']);
    Route::post('desk/create', [DesksController::class, 'createDesk']);
    Route::put('desk/{desk}/update', [DesksController::class, 'updateDesk']);
    Route::delete('desk/{desk}/delete', [DesksController::class, 'deleteDesk']);
