<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DesksTagsRequest extends FormRequest
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
            'id_desk' => 'required|exists:desks,id',
            'title' => 'max:50'
        ];
    }
}
