<?php

namespace App\Http\Resources\apiV2Front;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            // 'subcategories' => $this->collection($this->children),
            // 'is_drink' => $this->is_drink ? true : false,
            // 'foods' => FoodResource::collection($food_query->get()),
        ];
    }
}
