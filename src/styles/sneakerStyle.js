import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	sneakerCardRoot: {
		maxWidth: 450,
	},
	viewMore: {
		color: 'white',
		fontSize: 20,
		textDecoration: 'none',
		textAlign: 'center',
		display: 'block',
		width: '100%',
		backgroundColor: '#184b52',
		'&:hover': {
			color: '#184b52',
			backgroundColor: 'wheat',
		},
	},
	badge: {
		color: 'wheat',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	priceCell: {
		fontWeight: 'bold',
	},
}));

export default useStyles;
