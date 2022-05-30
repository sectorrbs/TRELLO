<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;

    class Card extends Model
    {
        use HasFactory;

        public $guarded = false;


        public function deskList()
        {
            return $this->belongsTo(DeskList::class, 'desk_lists_id');
        }
    }
