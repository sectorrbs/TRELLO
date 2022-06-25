<?php


namespace App\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UploadImageService
{
    public function upload($file, $path, $thumbnails)
    {
        if ($_FILES) {
            $name = md5(Carbon::now() . '_' . $file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension();
            Storage::putFileAs("/public/$path", $file, $name);
            $this->addingThumbnails($thumbnails, ['name' => $name, 'data' => $file, 'path' => $path]);
            return $name;
        }
        return $file;
    }

    public function delete($image_name, $path, $thumbnails)
    {
        if (Storage::exists("/public/$path/$image_name")) {
            Storage::delete("/public/$path/$image_name");
            $this->destroyThumbnails($image_name, $path, $thumbnails);
        }
    }

    private function addingThumbnails($thumbnails, $params)
    {
        foreach ($thumbnails as $thumbnail) {
            Image::make($params['data'])
                ->fit($thumbnail['thumb_width'], $thumbnail['thumb_height'])
                ->save($this->getFullThumbnailPath($thumbnail, $params['path']) . $params['name']);
        }
    }

    private function destroyThumbnails($image_name, $path, $thumbnails)
    {
        foreach ($thumbnails as $thumbnail) {
            Storage::delete('/public/' . $path . '/' . $this->getOriginalThumb($thumbnail) . '/' . $image_name);
        }
    }

    private function isExistsOrCreateThumbnailDirectory($thumbnail, $path)
    {
        $path = storage_path('/app/public/' . $path . '/' . $this->getOriginalThumb($thumbnail));
        if (!is_dir($path)) {
            mkdir($path);
        }
    }


    private function getFullThumbnailPath($thumbnail, $path)
    {
        $this->isExistsOrCreateThumbnailDirectory($thumbnail, $path);
        return storage_path('/app/public/' . $path . '/' . $this->getOriginalThumb($thumbnail));
    }

    private function getOriginalThumb($thumbnail)
    {
        return 'thumb_' . $thumbnail['thumb_width'] . '_' . $thumbnail['thumb_height'] . '/';
    }
}
