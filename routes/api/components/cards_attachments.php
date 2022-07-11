<?php

    use App\Http\Controllers\Api\v1\CardsAttachmentsController;
    use Illuminate\Support\Facades\Route;

    Route::post('cards_attachments/create_image', [CardsAttachmentsController::class, 'createCardAttachmentImage']);
    Route::post('cards_attachments/create_link', [CardsAttachmentsController::class, 'createCardAttachmentLink']);
    Route::get('cards_attachments/{attachment}/add-cover', [CardsAttachmentsController::class, 'addCardAttachmentCover']);
    Route::get('cards_attachments/{attachment}/delete-cover', [CardsAttachmentsController::class, 'deleteCardAttachmentCover']);
    Route::get('cards_attachments/{attachment}/delete', [CardsAttachmentsController::class, 'deleteCardAttachment']);
    Route::post('cards_attachments/{attachment}/update', [CardsAttachmentsController::class, 'updateCardAttachment']);
