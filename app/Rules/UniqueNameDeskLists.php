<?php

    namespace App\Rules;

    use App\Models\DeskList;
    use Illuminate\Contracts\Validation\DataAwareRule;
    use Illuminate\Contracts\Validation\Rule;

    class UniqueNameDeskLists implements Rule, DataAwareRule
    {
        protected $data = [];
        protected $id = [];

        public function __construct($id)
        {
            $this->id = $id;
        }

        public function passes($attribute, $value)
        {
            return !DeskList::where('name', $value)
                ->where('desk_id', $this->data['desk_id'])
                ->where('id', '<>', $this->id)
                ->exists();
        }

        public function message()
        {
            return 'Название списка уже занято';
        }

        public function setData($data)
        {
            $this->data = $data;

            return $this;
        }
    }
