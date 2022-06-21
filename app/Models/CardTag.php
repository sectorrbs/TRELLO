<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardTag extends Model
{
    use HasFactory;

    public $guarded = false;
    public $table = 'cards_tags';
}
