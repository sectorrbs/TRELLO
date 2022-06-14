<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Desk extends Model
    {
        use HasFactory;

        public $guarded = false;

        public function lists()
        {
            return $this->hasMany(DeskList::class);
        }

        public function background()
        {
            return $this->hasMany(BackgroundDesk::class, 'id');
        }
    }
