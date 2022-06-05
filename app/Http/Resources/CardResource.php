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
            'deskList' => $this->deskList,
            'checkLists' => CheckListResource::collection($this->checkLists),
        ];
    }
}
