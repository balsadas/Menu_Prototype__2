<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SizeResource extends JsonResource
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
            'name' => $this->getTranslations('name') ?: null,
            'price' => $this->price ? price_format($this->price) : null,
            // 'price' => $this->price,
            // 'discount_price' => $this->food->discount ? $this->getDiscountPrice() : 'null',
            'discount_price' => $this->food->discount ? price_format($this->getDiscountPrice()) : 'null',
        ];
    }
}
