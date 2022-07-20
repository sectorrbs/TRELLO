<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\CardCommentRequest;
    use App\Models\CardComment;
    use Illuminate\Http\Request;

    class CardCommentController extends Controller
    {
        public function createCardComment(CardCommentRequest $request)
        {
            CardComment::create($request->validated());
        }
    }
