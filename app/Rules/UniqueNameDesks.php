<?php

namespace App\Rules;

use App\Models\Desk;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class UniqueNameDesks implements Rule, DataAwareRule
{
    protected $data = [];
    protected $id = [];

    public function __construct($id)
    {
        $this->id = $id;
    }

    public function passes($attribute, $value)
    {
        return !Desk::where('name', $value)
            ->where('room_id', $this->data['room_id'])
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
