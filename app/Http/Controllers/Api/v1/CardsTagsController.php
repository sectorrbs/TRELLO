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
            dump($request->validated());
            CardTag::updateOrCreate($request->validated());
            return response(null, Response::HTTP_NO_CONTENT);
        }

        public function deleteCardsTags(CardsTagsRequest $request)
        {
            $tag = $request->validated();
            CardTag::where('desk_tag_id', $tag['desk_tag_id'])->delete();
            return response(null, Response::HTTP_NO_CONTENT);
        }
    }
