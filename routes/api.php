<?php

use App\Http\Controllers\Api\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api2\WebController;

Route::prefix('v2/')->group(function () {
        Route::get('categories', [WebController::class, 'categories']);
        Route::get('foods', [WebController::class, 'foods']);
});
