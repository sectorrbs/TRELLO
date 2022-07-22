<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardCommentRequest;
use App\Models\CardComment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CardCommentController extends Controller
{
    public function createCardComment(CardCommentRequest $request)
    {
        CardComment::updateOrCreate(['id' => $request->get('comment_id')], $request->validated());
    }


    public function deleteCardComment(CardComment $cardComment)
    {
        $cardComment->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
