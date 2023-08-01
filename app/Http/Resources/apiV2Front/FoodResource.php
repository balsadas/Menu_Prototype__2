<?php

namespace App\Http\Resources\apiV2Front;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\FoodIngredient;


class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'image' => $this->getImage(),
            'popupImage' => $this->getPopupImage(),
            'discount' => $this->discount ?: null,
            'discount_unit' => $this->discount_unit ?: null,
            'sizes' => SizeResource::collection($this->sizes),
            'ingredients' => IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get())
        ];
    }
}
