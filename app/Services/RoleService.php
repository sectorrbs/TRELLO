<?php


namespace App\Services;

use App\Models\Role;

class RoleService
{
    public function getRoleAdminById()
    {
        return Role::where('status', 'admin')->pluck('id')->first();
    }
}
