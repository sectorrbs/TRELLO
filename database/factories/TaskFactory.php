<?php

namespace Database\Factories;

use App\Models\CheckList;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->text(30),
            'check_lists_id' => CheckList::all()->random()->id,
            'check'=>$this->faker->boolean
        ];
    }
}
