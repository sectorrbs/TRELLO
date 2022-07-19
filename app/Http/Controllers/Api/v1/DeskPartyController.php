<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\DeskPartyRequest;
    use App\Http\Resources\DeskPartyResource;
    use App\Models\DeskParty;
    use App\Services\RoleService;
    use Illuminate\Http\Request;
    use Illuminate\Http\Response;

    class DeskPartyController extends Controller
    {
        public function addUserDeskParty(DeskPartyRequest $request, RoleService $role)
        {
            $party = $request->validated();
            DeskParty::create([
                'desk_id' => $party['desk_id'],
                'room_id' => $party['room_id'],
                'user_id' => $party['user_id'],
                'role_id' => $role->getRoleAdminById(),
            ]);
        }

        public function getDeskParty()
        {
            return DeskPartyResource::collection(DeskParty::orderBy('created_at', 'desc')
                ->where('user_id', auth()->user()->id)->get());
        }

        public function updateUserDeskParty(Request $request, DeskParty $deskParty)
        {
            $deskParty->update([
                'role_id' => $request->get('id')
            ]);
            return response(null, Response::HTTP_NO_CONTENT);
        }

        public function addUsersDeskParty(Request $request, RoleService $role)
        {
            $users = $request->input('data.users');
            $room_id = $request->input('data.roomId');
            $desk_id = $request->input('data.deskId');
            $roleId = $request->input('data.role');
            $message = $request->input('data.message');

            $members = DeskParty::where('desk_id', $desk_id)->get()->toArray();

            foreach ($users as $user) {
                if (!array_search($user['id'], array_column($members, 'user_id'))) {
                    DeskParty::create([
                        'room_id' => $room_id,
                        'desk_id' => $desk_id,
                        'user_id' => $user['id'],
                        'role_id' => $role->getRoleId($roleId),
                    ]);
                }
            }
        }
    }
