<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class FoodIngredient extends Model
{
    use HasFactory,HasTranslations;

    protected $fillable = ['food_id','name'];
    public $translatable = ['name'];

    public $timestamps = false;

    public function food()
    {
        return $this->belongsTo(Food::class);
    }

    // public function ingredient()
    // {
    //     return $this->belongsTo(Ingredient::class);
    // }
}
