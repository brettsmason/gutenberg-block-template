const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'bm/example-block', {
	title: __( 'Example block' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit() {
		return <div>Basic example with JSX! (editor)</div>;
	},
	save() {
		return <div>Basic example with JSX! (front)</div>;
	},
} );