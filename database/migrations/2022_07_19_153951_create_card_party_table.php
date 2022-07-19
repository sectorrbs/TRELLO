<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class CreateCardPartyTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create('card_party', function (Blueprint $table) {
                $table->id();
                $table->foreignId('desk_id')
                    ->references('id')
                    ->on('desks')
                    ->onDelete('cascade');
                $table->foreignId('card_id')
                    ->references('id')
                    ->on('cards')
                    ->onDelete('cascade');
                $table->foreignId('user_id')
                    ->references('id')
                    ->on('users');
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
            Schema::dropIfExists('card_party');
        }
    }
