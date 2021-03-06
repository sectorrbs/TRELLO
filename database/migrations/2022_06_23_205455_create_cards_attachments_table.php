<?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    class CreateCardsAttachmentsTable extends Migration
    {
        /**
         * Run the migrations.
         *
         * @return void
         */
        public function up()
        {
            Schema::create('cards_attachments', function (Blueprint $table) {
                $table->id();
                $table->foreignId('card_id')
                    ->references('id')
                    ->on('cards')
                    ->onDelete('cascade');
                $table->string('type');
                $table->string('image')->nullable();
                $table->string('link')->nullable();
                $table->string('image_name')->nullable();
                $table->boolean('cover')->default(false);
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
            Schema::dropIfExists('cards_attachments');
        }
    }
