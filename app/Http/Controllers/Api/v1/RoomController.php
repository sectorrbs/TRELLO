<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Requests\RoomRequest;
use App\Http\Resources\RoomResource;
use App\Models\Room;
use App\Http\Controllers\Controller;
use App\Models\RoomRole;
use App\Services\RoleService;

class RoomController extends Controller
{
    public function getRooms()
    {
        return RoomResource::collection(Room::orderBy('created_at', 'desc')
            ->where('user_id', auth()->user()->id)->get());
    }

    public function getRoom(Room $room)
    {
        return new RoomResource($room);
    }

    public function createRoom(RoomRequest $request, RoleService $role)
    {
        $room = Room::create($request->validated());
        RoomRole::create([
            'room_id' => $room['id'],
            'user_id' => $room['user_id'],
            'role_id' => $role->getRoleAdminById(),
        ]);
        return RoomResource::collection(Room::orderBy('created_at', 'desc')->get());
    }

    public function updateRoom(RoomRequest $request, Room $room)
    {

    }

    public function deleteRoom(Room $room)
    {

    }
}
