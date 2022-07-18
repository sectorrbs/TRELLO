<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class DeskParty extends Model
    {
        use HasFactory;

        public $guarded = false;
        public $table = 'desk_party';

        public function user()
        {
            return $this->belongsTo(User::class);
        }

        public function role()
        {
            return $this->belongsTo(Role::class);
        }
    }