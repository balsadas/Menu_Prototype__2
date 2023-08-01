<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Food;
use Illuminate\Support\Facades\Route;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class WebController extends Controller
{

    public function welcome(){
        return view('web.welcome');
    }
    public function index(){
	    $categories = Category::whereParentId(null)->orderBy('order', 'ASC')->get();
        return view('web.home', compact('categories'));
    }

    public function category(Category $category){
        $menu = Category::whereParentId(null)->orderBy('order')->get();
        if ($category->is_leaf){
            $foods = Food::whereCategoryId($category->id)->where('is_active',1)->orderBy('order')->get();
            return view('web.category', compact('foods', 'menu', 'category'));
        }else{
            $categories = Category::whereParentId($category->id)->orderBy('order')->get();
            return view('web.subcategory', compact('categories', 'menu', 'category'));
        }
    }
    public function food(Category $category, Food $food){
        $menu = Category::whereParentId(null)->get();
        // $categories = Category::whereParentId(null)->get();
        return view('web.food', compact('food', 'menu', 'category'));
    }
}
