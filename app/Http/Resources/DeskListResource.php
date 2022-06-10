<?php

    namespace App\Http\Resources;

    use Illuminate\Http\Resources\Json\JsonResource;

    class DeskListResource extends JsonResource
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
                'desk_id' => $this->desk_id,
                'name' => $this->name,
                'num' => $this->num,
                'cards' => CardResource::collection($this->cards->sortBy('num'))
            ];
        }
    }
