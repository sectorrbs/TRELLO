<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\DeskListRequest;
    use App\Http\Resources\DeskListResource;
    use App\Models\DeskList;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;

    class DeskListController extends Controller
    {
        public function createList(DeskListRequest $request)
        {
            DeskList::create($request->validated());
            return response(null, Response::HTTP_NO_CONTENT);
        }

        public function updateSuccessionLists(Request $request, Desklist $list)
        {
            $lists = $request->all();
            foreach ($lists as $list) {
                $item = Desklist::find($list['id']);
                $item->update(['num' => $list['num']]);
            }
            return response(null, Response::HTTP_NO_CONTENT);
        }

        public function updateList(DeskListRequest $request, Desklist $list)
        {
            $list->update($request->validated());
            return DeskListResource::make($list);
        }

        public function deleteList(DeskList $list)
        {
            $list->delete();
            return response(null, Response::HTTP_NO_CONTENT);
        }
    }
