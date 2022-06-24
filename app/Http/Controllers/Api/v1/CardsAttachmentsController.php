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

        public function addCardAttachmentCover(CardAttachment $attachment)
        {
            CardAttachment::where('cover', 1)
                ->where('card_id', $attachment['card_id'])
                ->lazyById(200, $column = 'id')
                ->each->update(['cover' => 0]);
            $attachment->update(['cover' => 1]);
        }

        public function deleteCardAttachmentCover(CardAttachment $attachment)
        {
            CardAttachment::where('cover', 1)
                ->where('card_id', $attachment['card_id'])
                ->lazyById(200, $column = 'id')
                ->each->update(['cover' => 0]);
        }
    }
