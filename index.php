<?php
defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'bm_example_block_editor_assets' );
function gutenberg_examples_01_esnext_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'bm-example-block',
		plugins_url( 'dist/block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/block.build.js' )
	);

	wp_enqueue_style(
		'bm-example-block-editor',
		plugins_url( 'dist/editor.build.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/editor.build.css' )
	);
}
