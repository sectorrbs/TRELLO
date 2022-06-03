<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\CheckList;
use Illuminate\Http\Response;

class CheckListController extends Controller
{
    public function createCheckList($request)
    {
        CheckList::create();
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function deleteCheckList(CheckList $checkList)
    {
        $checkList->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
