<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDesksTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('desks_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_desk')
                ->references('id')
                ->on('desks')
                ->onDelete('cascade');
            $table->string('title')->nullable();
            $table->string('color');
            $table->string('style');
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
        Schema::dropIfExists('desks_tags');
    }
}
