<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Http\Resources\CardResource;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CardController extends Controller
{

    public function getCard(Card $card)
    {
        dd($card->tags);
        return new CardResource($card);
    }

    public function createCard(CardRequest $request)
    {
        $new_card = Card::create($request->validated());
        return CardResource::make($new_card);
    }

    public function updateSuccessionCards(Request $request)
    {
        $cards = $request->all();

        foreach ($cards as $card) {
            $item = Card::find((int)$card['id']);
            $item->update(['num' => $card['num']]);
        }

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function updateCard(CardRequest $request, Card $card)
    {
        $card->update($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function deleteCard(Card $card)
    {
        $card->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
