<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardParty extends Model
{
    use HasFactory;
    public $guarded = false;
    public $table = 'card_party';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
