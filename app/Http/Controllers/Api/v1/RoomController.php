<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Requests\RoomRequest;
    use App\Http\Resources\RoomResource;
    use App\Models\Room;
    use App\Http\Controllers\Controller;
    use Illuminate\Support\Facades\Auth;

    class RoomController extends Controller
    {
        public function getRooms()
        {
            return RoomResource::collection(Room::orderBy('created_at', 'desc')
                ->where('user_id', auth()->user()->id)->get());
        }

        public function getRoom(Room $room)
        {

        }

        public function createRoom(RoomRequest $request)
        {
            Room::create($request->validated());
            return RoomResource::collection(Room::orderBy('created_at', 'desc')->get());
        }

        public function updateRoom(RoomRequest $request, Room $room)
        {

        }

        public function deleteRoom(Room $room)
        {

        }
    }
