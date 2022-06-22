<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards_tags', function (Blueprint $table) {
<<<<<<< HEAD
            $table->foreignId('card_id')
                ->references('id')
                ->on('cards')
                ->onDelete('cascade');
            $table->foreignId('desk_tag_id')
=======
            $table->foreignId('id_card')
                ->references('id')
                ->on('cards')
                ->onDelete('cascade');
            $table->foreignId('id_desk_tag')
>>>>>>> origin/master
                ->references('id')
                ->on('desks_tags')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards_tags');
    }
}
