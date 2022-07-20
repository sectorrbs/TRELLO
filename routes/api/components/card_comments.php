<?php

    use App\Http\Controllers\Api\v1\CardCommentController;
    use Illuminate\Support\Facades\Route;

    Route::post('card_comment/create', [CardCommentController::class, 'createCardComment']);

