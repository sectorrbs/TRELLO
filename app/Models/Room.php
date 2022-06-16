<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    public $guarded = false;

    public function desks()
    {
        return $this->hasMany(Desk::class);
    }
}
