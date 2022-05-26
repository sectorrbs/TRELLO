<?php

    namespace App\Observers;

    use Illuminate\Support\Facades\Cache;

    class DeskObserver
    {
        public function created()
        {
            Cache::forget('desks');
        }

        public function updated()
        {
            Cache::forget('desks');
        }

        public function deleted()
        {
            Cache::forget('desks');
        }
    }
