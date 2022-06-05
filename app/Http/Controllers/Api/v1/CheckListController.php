<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CheckListRequest;
use App\Models\CheckList;
use Illuminate\Http\Response;

class CheckListController extends Controller
{
    public function createCheckList(CheckListRequest $request)
    {
        CheckList::create($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function deleteCheckList(CheckList $checkList)
    {
        $checkList->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
