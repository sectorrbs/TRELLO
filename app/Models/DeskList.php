<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;

    class DeskList extends Model
    {
        use HasFactory;

        public $guarded = false;

        public function cards()
        {
            return $this->hasMany(Card::class, 'desk_lists_id');
        }
    }
