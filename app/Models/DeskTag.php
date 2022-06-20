<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeskTag extends Model
{
    use HasFactory;

    public $table = 'desks_tags';

    public $guarded = false;
}
