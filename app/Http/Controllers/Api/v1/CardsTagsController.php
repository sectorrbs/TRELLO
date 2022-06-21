<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardsTagsRequest;
use App\Models\CardTag;
use Illuminate\Http\Response;

class CardsTagsController extends Controller
{
    public function createCardsTags(CardsTagsRequest $request)
    {
        CardTag::create($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
