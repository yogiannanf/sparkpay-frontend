<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = ['page_id', 'name', 'logo', 'description'];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}