<?php


namespace App\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UploadImageService
{
    public function upload($data, $path = null)
    {
        if ($_FILES) {
//            $name = md5(Carbon::now() . '_' . $data->getClientOriginalName()) . '.' . $data->getClientOriginalExtension();
            $name = $data->getClientOriginalName();
            Storage::putFileAs("/public/$path", $data, $name);
            Image::make($data)->fit(115, 80)->save(storage_path("/app/public/cards_images/thumb/$name"));
            return $name;
        }
        unset($deletesFile);
        return $data;
    }

    public function delete($img, $path = null)
    {
        if (Storage::exists("/$path/$img")) {
            Storage::delete("/$path/$img");
            Storage::delete("/$path/thumb/$img");
        }
    }
}
