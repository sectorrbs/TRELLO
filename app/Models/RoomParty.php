<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class RoomParty extends Model
    {
        use HasFactory;

        public $guarded = false;
        public $table = 'room_party';

        public function user()
        {
            return $this->belongsTo(User::class);
        }

        public function role()
        {
            return $this->belongsTo(Role::class);
        }

        public function room()
        {
            return $this->belongsTo(Room::class);
        }

    }
