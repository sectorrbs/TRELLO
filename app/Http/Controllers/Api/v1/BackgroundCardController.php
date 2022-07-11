<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\BackgroundCardResource;
use App\Models\BackgroundCard;
use Illuminate\Http\Request;

class BackgroundCardController extends Controller
{
    public function getBackgrounds()
    {
        return BackgroundCardResource::collection(BackgroundCard::all());
    }
}
