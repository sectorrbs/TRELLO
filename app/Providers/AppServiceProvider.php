<?php

namespace App\Providers;

use App\Services\ConverterDateService;
use App\Services\LinkOperator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('dateConverter', function ($app) {
            return new ConverterDateService();
        });
        $this->app->singleton('linkOperator', function ($app) {
            return new LinkOperator();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
