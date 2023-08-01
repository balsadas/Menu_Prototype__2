<?php

namespace Database\Seeders;

use App\Models\Password;

use Illuminate\Database\Seeder;

class PasswordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Password::create([
            'code' => 55555
        ]);
    }
}
