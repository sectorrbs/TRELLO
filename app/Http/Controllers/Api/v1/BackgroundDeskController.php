<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BackgroundDeskResource;
use App\Models\BackgroundDesk;

class BackgroundDeskController extends Controller
{
    public function getBackgrounds()
    {
        return BackgroundDeskResource::collection(BackgroundDesk::all());
    }
}
