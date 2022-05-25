<?php

    namespace App\Http\Controllers\Api\v1;

    use App\Http\Controllers\Core\SiteController;

    class ApiController extends SiteController
    {

        public function index(): string
        {
            return view('site.common.index', $this->data);
        }

    }
