<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Str;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function uploadFile($file, $dir)
    {
        $random = Str::random();
        $filename = $random. '.' . $file->extension(); 
        $webpFilename = $random . '.webp';

       
        // Intervention 
        craete_folder('uploads');
        $image = Image::make($file)->encode('webp', 90)->resize(210, 210)->save(public_path('uploads/'.$dir.'/'  .  $webpFilename));    
        craete_folder('popup');
        $image = Image::make($file)->encode('webp', 90)->resize(420, 420)->save(public_path('popup/'.$dir.'/'  .  $webpFilename)); 
        craete_folder('tablet');
        $image = Image::make($file)->encode('webp', 90)->resize(600, 600)->save(public_path('tablet/'.$dir.'/'  .  $webpFilename));    

        $file->move(public_path('uploads/' . $dir), $filename);

        return $webpFilename;
    }

    protected function removeFile($file, $dir)
    {   

        $extension = explode('.', $file)[0];
        $fileJPG = $extension.'.jpg';
        $filePNG = $extension.'.png';

        file_remove( $dir, $file);
        file_remove( $dir, $fileJPG);
        file_remove( $dir, $filePNG);   

    }
}
