<?php

    namespace App\Http\Resources;

    use Illuminate\Http\Resources\Json\JsonResource;
    use Illuminate\Support\Facades\App;

    class CardCommentResource extends JsonResource
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
                'text' => $this->text,
                'user' => new UserResource($this->user),
                'created_at' => App::make('dateConverter')->date_ru(strtotime($this->created_at)),
                'updated_at' => $this->updated_at,
            ];
        }
    }
