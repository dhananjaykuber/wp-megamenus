<?php
/**
 * Mega Menus Theme functions and definitions
 *
 * @package megamenus-theme
 */

// Enqueue scripts and styles for navigation menus.
add_action( 'wp_enqueue_scripts', 'megamenu_enqueue_scripts' );
add_action( 'admin_enqueue_scripts', 'megamenu_enqueue_scripts' );

/**
 * Enqueue scripts and styles for the theme.
 */
function megamenu_enqueue_scripts() {

	wp_enqueue_script(
		'megamenu-script',
		get_template_directory_uri() . '/build/index.js',
		array(),
		'1.0.0',
		false
	);

	wp_enqueue_style(
		'megamenu-style',
		get_template_directory_uri() . '/build/index.css',
		array(),
		'1.0.0',
	);
}
