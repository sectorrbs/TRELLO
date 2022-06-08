<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeskRequest;
use App\Http\Resources\DeskResource;
use App\Models\Desk;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class DesksController extends Controller
{
    public function getDesks(Auth $auth)
    {
        #Cache::forget('desks');
        return DeskResource::collection(Desk::orderBy('created_at', 'desc')->where('user_id', Auth::user()->id)->get());
    }

    public function getDesk(Desk $desk)
    {
        if ($desk->user_id === auth()->user()->id) {
            return new DeskResource($desk);
        }
        return response(null, Response::HTTP_NO_CONTENT);
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
