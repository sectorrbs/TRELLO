<?php

namespace App\Http\Resources;

use App\Models\BackgroundDesk;
use Illuminate\Http\Resources\Json\JsonResource;

class DeskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'room_id' => $this->room_id,
            'name' => $this->name,
            'is_tag_enlarged' => $this->is_tag_enlarged,
            'is_descr_enlarged' => $this->is_descr_enlarged,
            'id_backgrounds_desks' => $this->id_backgrounds_desks,
            'background' => new BackgroundDeskResource(BackgroundDesk::query()->where('id', $this->id_backgrounds_desks)->first()),
            'lists' => DeskListResource::collection($this->lists->sortBy('num'))  ,
            'participants' => PartyResource::collection($this->participants),
        ];
    }
}

//    'background' => new BackgroundDeskResource($this->background),
