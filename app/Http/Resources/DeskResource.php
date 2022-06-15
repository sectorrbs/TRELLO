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
                'name' => $this->name,
                'id_backgrounds_desks' => $this->id_backgrounds_desks,
                'background' => new BackgroundDeskResource(BackgroundDesk::query()->where('id', $this->id_backgrounds_desks)->first()),
                'lists' => DeskListResource::collection($this->lists->sortBy('num'))
            ];
        }
    }

//    'background' => new BackgroundDeskResource($this->background),
