<?php 

if (!function_exists('file_remove')) {
    function file_remove($dir, $fileName){
        if(file_exists(public_path('uploads/' .$dir. '/' . $fileName))){
            unlink(public_path('uploads/'  .$dir. '/' . $fileName));
        }

        if(file_exists(public_path('popup/' .$dir. '/' . $fileName))){
            unlink(public_path('popup/' .$dir. '/' . $fileName));
        }

        if(file_exists(public_path('tablet/' .$dir. '/' . $fileName))){
            unlink(public_path('tablet/' .$dir. '/' . $fileName));
        }
    }


}