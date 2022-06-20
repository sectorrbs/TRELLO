<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DesksTagsRequest;
use App\Http\Resources\DesksTagsResource;
use App\Models\DeskTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class DesksTagsController extends Controller
{
    public function getDeskTags($desk_id)
    {
        return DesksTagsResource::collection(DeskTag::where('id_desk', $desk_id)->get());
    }

    public function createDesksTags(DesksTagsRequest $request)
    {
        $desksTags = $request->validated();
        $tags = Tag::all();
        foreach ($tags as $tag) {
            DeskTag::create([
                'id_desk' => $desksTags['id_desk'],
                'color' => $tag['color'],
            ]);
        }
    }

    public function updateDeskTag(DesksTagsRequest $request, DeskTag $tag)
    {
        dd($tag);
    }

    public function deleteDesksTags($id)
    {
        DeskTag::where('id_desk', $id)->delete();
    }
}
