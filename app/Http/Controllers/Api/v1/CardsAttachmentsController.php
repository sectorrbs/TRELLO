<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardAttachmentRequest;
use App\Http\Resources\CardAttachmentResource;
use App\Models\CardAttachment;
use App\Services\UploadImageService;
use Illuminate\Http\Response;

class CardsAttachmentsController extends Controller
{
    public function createCardAttachmentImage(CardAttachmentRequest $request, UploadImageService $uploadImage)
    {
        $data = $request->validated();
        $data['image'] = $uploadImage->upload($data['image'], 'cards_images', CARD_IMAGES_THUMBNAILS);
        CardAttachment::create($data);
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function createCardAttachmentLink(CardAttachmentRequest $request)
    {
        CardAttachment::create($request->validated());
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function addCardAttachmentCover(CardAttachment $attachment)
    {
        CardAttachment::where('cover', 1)
            ->where('card_id', $attachment['card_id'])
            ->lazyById(200, $column = 'id')
            ->each->update(['cover' => 0]);
        $attachment->update(['cover' => 1]);
    }

    public function updateCardAttachment(CardAttachmentRequest $request, CardAttachment $attachment)
    {
        $attachment->update($request->validated());
    }

    public function deleteCardAttachmentCover(CardAttachment $attachment)
    {
        CardAttachment::where('cover', 1)
            ->where('card_id', $attachment['card_id'])
            ->lazyById(200, $column = 'id')
            ->each->update(['cover' => 0]);
    }

    public function deleteCardAttachment(CardAttachment $attachment, UploadImageService $uploadImage)
    {
        $uploadImage->delete($attachment['image'], 'cards_images', CARD_IMAGES_THUMBNAILS);
        $attachment->delete();
    }
}
