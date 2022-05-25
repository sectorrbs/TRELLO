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
    }
