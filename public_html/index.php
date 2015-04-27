<?php 

require_once($_SERVER['DOCUMENT_ROOT'] . '/inc/urlmanager.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/inc/header.php');

// now load the main page dependant on the url structure and keywords contained
switch ($urlarray[0]) {
    case '':
        require_once($_SERVER['DOCUMENT_ROOT'] . '/modules/home/body.php');
        break;


    default:
        header("HTTP/1.0 404 Not Found");
        require_once($_SERVER['DOCUMENT_ROOT'] . '/modules/404/body.php');
        break;
}

require_once($_SERVER['DOCUMENT_ROOT'] . '/inc/footer.php');

?>