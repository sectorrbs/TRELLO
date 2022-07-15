<?php


namespace App\Services;

use App\Models\Role;

class RoleService
{
    public function getRoleId($roleId)
    {
        return Role::where('id', $roleId)->pluck('id')->first();
    }

    public function getRoleAdminById()
    {
        return Role::where('status', 'admin')->pluck('id')->first();
    }

    public function getRoleParticipantById()
    {
        return Role::where('status', 'participant')->pluck('id')->first();
    }

    public function getRoleGuestById()
    {
        return Role::where('status', 'guest')->pluck('id')->first();
    }
}
