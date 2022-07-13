<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\RoomPartyRequest;
    use App\Models\RoomParty;
    use App\Services\RoleService;
    use Illuminate\Http\Request;

    class RoomPartyController extends Controller
    {

        public function createRoomParty(RoomPartyRequest $request, RoleService $role)
        {
            $party = $request->validated();
            RoomParty::create([
                'room_id' => $party['room_id'],
                'user_id' => $party['user_id'],
                'role_id' => $role->getRoleAdminById(),
            ]);
        }

        public function addRoomParty(Request $request, RoleService $role)
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
    }
