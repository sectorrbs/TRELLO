<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\CardPartyRequest;
    use App\Http\Resources\CardPartyResource;
    use App\Models\CardParty;
    use Illuminate\Http\Request;

    class CardPartyController extends Controller
    {
        public function addUserCardParty(CardPartyRequest $request)
        {
            return CardPartyResource::make(CardParty::create($request->validated()));
        }

        public function removeUserCardParty(CardPartyRequest $request)
        {

        }
    }
