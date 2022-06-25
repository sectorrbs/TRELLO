<?php


namespace App\Services;


class LinkOperator
{
    public function existsProtocolLink($link)
    {
        $isProtocol = strpos('http', $link);
        if ($isProtocol) {
            return $link;
        } else {
            return 'https://' . $link;
        }
    }
}
