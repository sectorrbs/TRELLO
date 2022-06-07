<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Resources\UserResource;
    use Illuminate\Support\Facades\Auth;

    class UserController extends Controller
    {
        public function getUser()
        {
            return new UserResource(Auth::user());
        }
    }
