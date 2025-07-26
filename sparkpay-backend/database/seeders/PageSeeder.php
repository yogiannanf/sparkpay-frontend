<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Page;
use App\Models\User;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::where('role', 'admin')->first();

        Page::create([
            'user_id' => $admin->id,
            'title' => 'Beranda',
            'slug' => 'beranda',
            'content' => 'Ini adalah halaman beranda SparkPay.',
        ]);

        Page::create([
            'user_id' => $admin->id,
            'title' => 'Tentang Kami',
            'slug' => 'tentang-kami',
            'content' => 'Halaman tentang SparkPay dan tim kami.',
        ]);
    }
}
