<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'desk_lists_id' => $this->desk_lists_id,
            'name' => $this->name,
            'description' => $this->description,
            'num' => $this->num,
            'term' => $this->term,
            'status' => $this->status,
            'deskList' => $this->deskList,
            'tags' => CardTagsResource::collection($this->tags),
            'checkLists' => CheckListResource::collection($this->checkLists),
        ];
    }
}
