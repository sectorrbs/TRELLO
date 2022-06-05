<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckList extends Model
{
    use HasFactory;

    public $guarded = false;

    public function tasks()
    {
        return $this->hasMany(Task::class, 'check_lists_id');
    }
}
