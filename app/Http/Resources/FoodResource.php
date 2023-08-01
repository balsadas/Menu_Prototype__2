<?php

namespace App\Http\Resources;

use App\Models\FoodIngredient;
use App\Models\Ingredient;
use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'image' => $this->getImage(),
            'popupImage' => $this->getPopupImage(),
            'discount' => $this->discount ?: null,
            // 'discount_unit' => $this->discount_unit ?: null,
            'discount_unit' => $this->discount_unit ? ($this->discount_unit =='manat' ? 'tmt' :'%') : null,
            'sizes' => SizeResource::collection($this->sizes),
            // 'sizes' => '0',
            'ingredients' => IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get())
        ];
    }
}
