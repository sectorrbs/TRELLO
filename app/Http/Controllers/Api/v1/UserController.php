<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Resources\UserResource;
    use App\Models\User;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Auth;

    class UserController extends Controller
    {
        public function getUser()
        {
            return new UserResource(Auth::user());
        }

        public function getUsers(Request $request)
        {
            return UserResource::collection(User::where('name', 'like', '%' . $request->get('name') . '%')->get());
        }
    }
