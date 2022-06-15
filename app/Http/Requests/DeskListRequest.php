<?php

    namespace App\Http\Requests;

    use App\Rules\UniqueName;
    use Illuminate\Foundation\Http\FormRequest;

    class DeskListRequest extends FormRequest
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
                'name' => ['required', new UniqueName($this->id)],
                'desk_id' => 'required|exists:desks,id',
                'num' => 'required'
            ];
        }

        public function messages()
        {
            return [
                'name.required' => 'Название списка не указано',
                'name.unique' => 'Название списка уже занято',
                'desk_id.exists' => 'Такой лоски нету'
            ];
        }
    }
