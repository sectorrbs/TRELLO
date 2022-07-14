<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\RoomPartyRequest;
    use App\Http\Resources\RoomPartyResource;
    use App\Models\RoomParty;
    use App\Services\RoleService;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;

    class RoomPartyController extends Controller
    {

        public function getRoomParty()
        {
            return RoomPartyResource::collection(RoomParty::orderBy('created_at', 'desc')
                ->where('user_id', auth()->user()->id)->get());
        }

        public function createRoomParty(RoomPartyRequest $request, RoleService $role)
        {
            $party = $request->validated();
            RoomParty::create([
                'room_id' => $party['room_id'],
                'user_id' => $party['user_id'],
                'role_id' => $role->getRoleAdminById(),
            ]);
        }

        public function addUserRoomParty(Request $request, RoleService $role)
        {
            $users = $request->input('data.users');
            $room_id = $request->input('data.roomId');
            $message = $request->input('data.message');

            $members = RoomParty::where('room_id', $room_id)->get()->toArray();

            foreach ($users as $user) {
                if (!array_search($user['id'], array_column($members, 'user_id'))) {
                    RoomParty::create([
                        'room_id' => $room_id,
                        'user_id' => $user['id'],
                        'role_id' => $role->getRoleParticipantById(),
                    ]);
                }
            }
        }

        public function appointmentUserAdminRoomParty(RoomParty $roomParty, RoleService $role)
        {
            $roomParty->update([
                'role_id' => $role->getRoleAdminById()
            ]);
            return response(null, Response::HTTP_NO_CONTENT);
        }

        public function deleteParticipantRoomParty(RoomParty $roomParty)
        {
            $roomParty->delete();
            return response(null, Response::HTTP_NO_CONTENT);
        }
    }
