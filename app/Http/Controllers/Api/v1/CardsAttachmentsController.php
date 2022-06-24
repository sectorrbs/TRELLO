<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardAttachmentRequest;
use App\Http\Resources\CardAttachmentResource;
use App\Models\CardAttachment;
use App\Services\UploadImageService;

class CardsAttachmentsController extends Controller
{
    public function createCardAttachmentImage(CardAttachmentRequest $request, UploadImageService $uploadImage)
    {
        $data = $request->validated();
        $data['image'] = $uploadImage->upload($data['image'], 'cards_images');
        CardAttachment::create($data);
        return CardAttachmentResource::collection(CardAttachment::where('card_id', $data['card_id'])->get());
    }
}
