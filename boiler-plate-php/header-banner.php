<!-- Boiler plate spit out by copilot -->

<?php
/*
Plugin Name: Custom Header Message
Description: This plugin displays a custom message immediately under the head of a page.
Version: 1.0
Author: Your Name
*/

// Hook into 'wp_head' to add a message right after the head tag.
add_action('wp_head', 'display_custom_header_message');

function display_custom_header_message() {
    echo '<div class="custom-header-message" style="text-align: center; background-color: #ffeb3b; padding: 10px;">
             <p>Welcome to my WordPress site! This is a custom header message.</p>
          </div>';
}
?>

<!-- Boiler plate from another php attempt: This attempt had worked previously -->


<!-- This is a sample of a place to start. Not a truly usable file yet. More simple boilerplate.  -->

<?php
/*
Plugin Name: Work In Progress Plug-in
Plugin URI: https://esterenkodesign.com
Description: Displays a banner at the top of a website declaring it to be a test site.
Version: 1.0.1
Author: Kirk Esterline
Author URI: https://esterenkodesign.com
*/

// Exit if accessed directly

if(!defined('ABSPATH')) {
    exit;
}

// Hooking into WP as soon as the 'body' opens and adding a simple element and style.

add_action('wp_body_open', 'tb_head');
add_action('wp_print_styles', 'tb_css');

function tb_head()
{
    echo '<h1 class="tb">This is a test site!</h1>';
}

function tb_css()
{
    echo '
        <style>
            h1.tb {
                color: #000;
                text-align: center;
                background: yellow;
                padding: .25em 0;
            }
        </style>
    ';
}