<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeskListRequest;
use App\Http\Resources\DeskListResource;
use App\Models\DeskList;
use Illuminate\Http\Response;

class DeskListController extends Controller
{
    public function createList(DeskListRequest $request)
    {
        DeskList::create($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
        return DeskListResource::collection(DeskList::orderBy('created_at', 'desc')->get());
    }
}
