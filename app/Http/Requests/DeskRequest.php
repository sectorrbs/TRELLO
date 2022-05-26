<?php

    namespace App\Http\Requests;

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
                'name' => 'required|unique:desks,name,' . $this->id,
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
