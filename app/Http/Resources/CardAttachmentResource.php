<?php

    namespace App\Http\Resources;

    use Illuminate\Http\Resources\Json\JsonResource;

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
                'link' => $this->link,
                'cover' => $this->cover,
                'date' => $this->date_ru(strtotime($this->created_at)),
            ];
        }

        function date_ru($timestamp, $show_time = false)
        {
            if (empty($timestamp)) {
                return '-';
            } else {
                $now = explode(' ', date('Y n j H i'));
                $value = explode(' ', date('Y n j H i', $timestamp));

                if ($now[0] == $value[0] && $now[1] == $value[1] && $now[2] == $value[2]) {
                    return 'сегодня в ' . $value[3] . ':' . $value[4];
                } else {
                    $month = array(
                        '', 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
                    );
                    $out = $value[2] . ' ' . $month[$value[1]] . ' ' . $value[0];
                    if ($show_time) {
                        $out .= ' в ' . $value[3] . ':' . $value[4];
                    }
                    return $out;
                }
            }
        }
    }
