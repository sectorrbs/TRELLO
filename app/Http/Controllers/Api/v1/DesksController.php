<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Http\Resources\DeskResource;
use App\Models\Desk;

class DesksController extends Controller
{
    public function getDesks()
    {
        #Cache::forget('desks');
        return DeskResource::collection(Desk::orderBy('created_at', 'desc')->get());
    }

    public function getDesk(Desk $desk)
    {
        return new DeskResource($desk);
    }

    public function createDesk(DeskRequest $request)
    {
        Desk::create($request->validated());

        return DeskResource::collection(Desk::orderBy('created_at', 'desc')->get());
    }

    public function updateDesk(DeskRequest $request, Desk $desk)
    {
        $desk->update($request->validated());
        return DeskResource::make($desk);
    }

    public function deleteDesk(Desk $desk)
    {
        $desk->delete();
        return DeskResource::collection(Desk::orderBy('created_at', 'desc')->get());
    }
}
