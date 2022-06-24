<?php

use App\Http\Controllers\Api\v1\CardsAttachmentsController;
use Illuminate\Support\Facades\Route;

Route::post('cards_attachments/create_image', [CardsAttachmentsController::class, 'createCardAttachmentImage']);
Route::post('cards_attachments/create_link', [CardsAttachmentsController::class, 'createCardAttachmentLink']);
