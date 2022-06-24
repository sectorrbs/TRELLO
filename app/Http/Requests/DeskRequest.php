<?php

namespace App\Http\Requests;

use App\Rules\UniqueNameDesks;
use Illuminate\Foundation\Http\FormRequest;

class DeskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', new UniqueNameDesks($this->id)],
            'id_backgrounds_desks' => 'required|exists:backgrounds_desks,id',
            'room_id' => 'required|exists:rooms,id',
            'is_tag_enlarged' => '',
            'is_descr_enlarged' => '',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Название доски не указано',
            'name.unique' => 'Такое название уже занято',
        ];
    }
}
