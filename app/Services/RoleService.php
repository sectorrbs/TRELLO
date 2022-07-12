<?php


namespace App\Services;

use App\Models\Role;

class RoleService
{
    public function getRoleAdminById()
    {
        return Role::where('role', 'admin')->pluck('id')->first();
    }
}
