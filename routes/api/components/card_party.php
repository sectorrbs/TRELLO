<?php

    use App\Http\Controllers\Api\v1\CardPartyController;
    use Illuminate\Support\Facades\Route;

    Route::get('card_party/get', [CardPartyController::class, 'getCardParty']);
    Route::post('card_party/add_user', [CardPartyController::class, 'addUserCardParty']);

