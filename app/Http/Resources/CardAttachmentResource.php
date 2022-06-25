<?php

namespace App\Http\Resources;

use App\Services\ConverterDateService;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;

class CardAttachmentResource extends JsonResource
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
            'card_id' => $this->card_id,
            'type' => $this->type,
            'image' => $this->image,
            'link' => App::make('linkOperator')->existsProtocolLink($this->link),
            'image_name' => $this->image_name,
            'cover' => $this->cover,
            'date' => App::make('dateConverter')->date_ru(strtotime($this->created_at)),
        ];
    }
}
