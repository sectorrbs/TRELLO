<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Resources\DeskListResource;
    use App\Models\DeskList;
    use Illuminate\Http\Request;

    class DeskListController extends Controller
    {
        public function index()
        {
            return DeskListResource::collection(DeskList::orderBy('created_at', 'desc'));
        }

        public function store(Request $request)
        {
            //
        }


        public function show($id)
        {
            //
        }

        public function update(Request $request, $id)
        {
            //
        }


        public function destroy($id)
        {
            //
        }
    }
