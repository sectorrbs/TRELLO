<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Controller;
    use App\Http\Resources\DeskResource;
    use App\Models\Desk;
    use Illuminate\Http\Request;

    class DesksController extends Controller
    {
        public function getDesks()
        {
            return DeskResource::collection(Desk::all());
        }

        public function getDeskList()
        {
            var_dump(898797897889);
            return DeskResource::collection($desk);
        }
    }
