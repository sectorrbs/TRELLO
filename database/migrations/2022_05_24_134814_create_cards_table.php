<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->default(null)->nullable();
            $table->foreignId('desk_lists_id')
                ->references('id')
                ->on('desk_lists')
                ->onDelete('cascade');
            $table->integer('num')->default(1);
            $table->string('term')->nullable();
            $table->integer('status')->default(0);
            $table->foreignId('id_backgrounds_cards')
                ->nullable()
                ->references('id')
                ->on('backgrounds_cards');
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
        Schema::dropIfExists('cards');
    }
}
