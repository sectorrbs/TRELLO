<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Requests\DeskPartyRequest;
    use App\Models\DeskParty;
    use App\Services\RoleService;

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
    }
