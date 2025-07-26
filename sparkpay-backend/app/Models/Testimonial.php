<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_id',
        'name',
        'photo',
        'testimonial',
    ];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
