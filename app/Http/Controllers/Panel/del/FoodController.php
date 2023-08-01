<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\FoodRequest;
use App\Models\Category;
use App\Models\Food;
use App\Models\FoodSize;
use Illuminate\Http\Request; 
use function GuzzleHttp\Promise\all;

class FoodController extends Controller
{
    public function index(Request $request)
    {
        $append = [];

        $categories = Category::all();
         $foods = Food::where(function ($query) use ($request) {
            if ($request->has('q')) {
                $query->where('name', 'like', '%' . ucwords($request->get('q')) . '%')
                ->orWhere('name', 'like', '%' . ucwords($request->get('q')) . '%')
                ->where('discount', 'like', '%' . $request->get('q') . '%')
                ->orWhere('discount', 'like', '%' . ucwords($request->get('q')) . '%');
            }
        })->where(function ($query) use ($request) {
            if ($request->has('categories')) {
                $query->whereIn('category_id', $request->get('categories'));
            }
        })->paginate(10);


        if ($request->has('q')) {
            $append['q'] = $request->get('q');
        }

        if ($request->has('categories')) {
            $append['categories'] = $request->get('categories');
        }

        if (count($append)) {
            $foods->appends($append);
        }
       
        return view('foods.index', compact('foods', 'categories'));
    }

    public function create()
    {
        $categories = Category::whereIsLeaf(true)->get();

         $tabs = [
            'single' => [
                'name' => trans('main.single'),
                'loop_count' => 1,
            ],
            'double' => [
                'name' => trans('main.double'),
                'loop_count' => 2,
            ],
            'triple' => [
                'name' => trans('main.triple'),
                'loop_count' => 3,
            ],
        ];

        return view('foods.create', compact('categories', 'tabs'));
    }

    public function store(FoodRequest $request)
    {
        $request->merge(['image' => $this->uploadFile($request->file('file'), 'foods')]);

        if (!$request->has('active')) {
            $request->merge(['is_active' => false]);
        }
        
        $prices = $request->get('price');
        
        $food = Food::create($request->all());
        if ($request->has('size')) {
            $sizes = $this->getSizeCollection(collect($request->get('size')));
            
            foreach ($sizes as $key => $size) {
                FoodSize::create([
                    'food_id' => $food->id,
                    'price' => $this->priceWithCoins($prices[$key]),
                    'name' => $size,
                ]);
            }
        } else {
            FoodSize::create([
                'food_id' => $food->id,
                'price' => $this->priceWithCoins($prices[0]),
            ]);
        }

        return redirect()->route('foods.index')->with('success', trans('main.food_created'));
    }

    public function show(Food $food)
    {
        return view('foods.show', compact('food'));
    }

    public function edit(Food $food)
    {
        $categories = Category::whereIsLeaf(true)->get();

        $tabs = [
            'single' => [
                'name' => trans('main.single'),
                'loop_count' => 1,
            ],
            'double' => [
                'name' => trans('main.double'),
                'loop_count' => 2,
            ],
            'triple' => [
                'name' => trans('main.triple'),
                'loop_count' => 3,
            ],
        ];
        return view('foods.edit', compact('food', 'categories'));
    }

    public function update(Food $food, FoodRequest $request)
    {
        // $prices = $request->get('price');

        if ($request->has('file')) {
            $this->removeFile($food->image, 'foods');
            $request->merge(['image' => $this->uploadFile($request->file('file'), 'foods')]);
        }

        // if (!$request->has('is_active') && $food->is_active) {
        //     $request->merge(['is_active' => 0]);
        // }

        if ($food->is_active) {
            if (!$request->has('active')) {
                $request->merge(['is_active' => false]);
            }
        } else {
            if ($request->has('active')) {
                $request->merge(['is_active' => true]);
            }
        }


        $food->update($request->all());
        // $food->sizes()->delete();

        // if ($request->has('size')) {
        //     $sizes = $this->getSizeCollection(collect($request->get('size')));

        //     foreach ($sizes as $key => $size) {
        //         FoodSize::create([
        //             'food_id' => $food->id,
        //             'price' => $this->priceWithCoins($prices[$key]),
        //             'name' => $size,
        //         ]);
        //     }
        // } else {
        //     FoodSize::create([
        //         'food_id' => $food->id,
        //         'price' => $this->priceWithCoins($prices[0]),
        //     ]);
        // }

        return redirect()->route('foods.show', $food->id)->with('success', trans('main.food_updated'));
    }

    public function destroy(Food $food)
    {
        if ($food->orders()->exists()) {
            return redirect()->route('foods.index')->with('warning', trans('main.food_can_not_deleted'));
        }

        $this->removeFile($food->image, 'foods');
        $food->sizes()->delete();
        $food->delete();

        return redirect()->route('foods.index')->with('danger', trans('main.food_deleted'));
    }

     private function priceWithCoins($price)
    {
        return $price;
    }

    private function getSizeCollection($req)
    {
        $sizes = [];

        for ($i = 0; $i < count($req->flatten()); $i += 3) {
            $sizes[$i / 3][collect($req[$i])->keys()->first()] = collect($req[$i])->values()->first();
            $sizes[$i / 3][collect($req[$i + 1])->keys()->first()] = collect($req[$i + 1])->values()->first();
            $sizes[$i / 3][collect($req[$i + 2])->keys()->first()] = collect($req[$i + 2])->values()->first();
        }

        return $sizes;
    }

    public function order()
    {
        $foods = Food::orderBy('order')->get();
        $categories = Category::whereNull('parent_id')->orderBy('order')->get();
        


        if (count($foods) > 1) {
            return view('foods.order', compact('categories', 'foods'));
        }

        return redirect()->route('foods.index')->with('warning', trans('main.at_least_must_have_two_foods'));
    }

    public function orderUpdate(Request $request)
    {

        foreach ($request->get('order', []) as $key => $order) { 
            Food::whereId($order)->update(['order' => $key + 1]);
        }

        return redirect()->route('foods.index')->with('success', trans('main.food_ordered'));
    }
}
