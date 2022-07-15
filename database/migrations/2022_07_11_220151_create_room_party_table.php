<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomPartyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_party', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')
                ->references('id')
                ->on('rooms')
                ->onDelete('cascade');
            $table->foreignId('user_id')
                ->references('id')
                ->on('users');
            $table->foreignId('role_id')
                ->references('id')
                ->on('roles');
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
        Schema::dropIfExists('room_party');
    }
}
