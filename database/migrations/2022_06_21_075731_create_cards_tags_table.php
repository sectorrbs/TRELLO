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
            $table->foreignId('id_card')
                ->references('id')
                ->on('cards')
                ->onDelete('cascade');
            $table->foreignId('id_desk_tag')
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
