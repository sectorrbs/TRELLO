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

        public function checkLists()
        {
            return $this->hasMany(checkList::class);
        }

        public function attachments()
        {
            return $this->hasMany(CardAttachment::class);
        }

        public function tags()
        {
            return $this->belongsToMany(
                 DeskTag::class, 'cards_tags'
            );
        }
        public function backgrounds()
        {
            return $this->belongsTo(BackgroundDesk::class, 'id');
        }

    }
