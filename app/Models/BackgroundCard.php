<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BackgroundCard extends Model
{
    use HasFactory;

    public $guarded = false;
    public $table = 'backgrounds_cards';
}
