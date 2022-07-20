<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class CardComment extends Model
    {
        use HasFactory;

        public $guarded = false;

        public function user()
        {
            return $this->belongsTo(User::class);
    }
    }
