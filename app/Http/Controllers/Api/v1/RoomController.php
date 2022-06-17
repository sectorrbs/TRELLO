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

//    public function getDesks(Auth $auth)
//    {
//        return DeskResource::collection(Desk::orderBy('created_at', 'desc')
//            ->where('user_id', auth()->user()->id)->get());
//    }
//
//    public function getDesk(Desk $desk)
//    {
//        if (auth()->user() && $desk->user_id === auth()->user()->id) {
//            return new DeskResource($desk);
//        }
//        return response(null, Response::HTTP_NO_CONTENT);
//    }
//
//    public function createDesk(DeskRequest $request)
//    {
//        Desk::create($request->validated());
//        return DeskResource::collection(Desk::orderBy('created_at', 'desc')
//            ->where('user_id', Auth::user()->id)->get());
//    }
//
//    public function updateDesk(DeskRequest $request, Desk $desk)
//    {
//        $desk->update($request->validated());
//        return DeskResource::make($desk);
//    }
//
//    public function deleteDesk(Desk $desk)
//    {
//        $desk->delete();
//        return DeskResource::collection(Desk::orderBy('created_at', 'desc')
//            ->where('user_id', Auth::user()->id)->get());
//    }
