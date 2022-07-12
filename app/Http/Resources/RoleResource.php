<?php

    namespace App\Http\Resources;

    use Illuminate\Http\Resources\Json\JsonResource;

    class RoleResource extends JsonResource
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
                'status' => $this->status,
                'label' => $this->getLabel($this->id)
            ];
        }

        public function getLabel($id)
        {
            switch ($id) {
                case 1:
                    return 'Обычный';
                case 2:
                    return 'Администратор';
            }
            return false;
        }
    }
