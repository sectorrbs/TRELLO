<?php

/*
|--------------------------------------------------------------------------
| RBS CMS constants
|--------------------------------------------------------------------------
*/


defined('CMS_VERSION') or define('CMS_VERSION', '2.7');

defined('PATH_ASSETS') or define('PATH_ASSETS', 'assets');
defined('PATH_PLUGINS') or define('PATH_PLUGINS', 'assets/plugins');
defined('PATH_UPLOADS') or define('PATH_UPLOADS', 'storage/uploads');
defined('PATH_ADMIN') or define('PATH_ADMIN', 'assets/admin');
defined('PATH_SITE') or define('PATH_SITE', 'assets/site');

defined('ACCESS_ADMIN') or define('ACCESS_ADMIN', 'admin');
defined('ACCESS_USER') or define('ACCESS_USER', 'user');


defined('CARD_IMAGES_THUMBNAILS') or define('CARD_IMAGES_THUMBNAILS',
    [
        ['thumb_width' => 115, 'thumb_height' => 80],
        ['thumb_width' => 250, 'thumb_height' => 140],
        ['thumb_width' => 700, 'thumb_height' => 250],
    ]);
/*
|--------------------------------------------------------------------------
| ADMIN-PANEL constants
|--------------------------------------------------------------------------
*/

//const EMPTY_TEXT = '<span class="color-gray-lite">не указано<span>';
//const ICON_SUFFIX = ' fa-fw color-gray-lite';
