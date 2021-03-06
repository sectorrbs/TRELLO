<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDesksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('desks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')
                ->references('id')
                ->on('rooms')
                ->onDelete('cascade');
            $table->string('name');
            $table->boolean('is_tag_enlarged')->default(false);
            $table->boolean('is_descr_enlarged')->default(false);
            $table->foreignId('id_backgrounds_desks')
                ->references('id')
                ->on('backgrounds_desks');
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
        Schema::dropIfExists('desks');
    }
}
