<?php
/**
 * Script to parse the URL into 'friendly-string-urls'
 *
 * @copyright  2014
 * @license
 * @version    $Id$
 * @link
 * @since      File available since Release 1.0.0
 */

$this_url = strtok($_SERVER["REQUEST_URI"],'?');

$urlarray = explode("/", str_replace("%20", "-", $this_url)); // parse the REQUEST_URI information
array_shift($urlarray); // shift long to 0
$urlsize = count($urlarray); // size of
$urlsection = $urlarray[$urlsize - 1]; // use the last part of the URL