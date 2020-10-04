import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	homeLink: {
		color: 'white',
		fontSize: 20,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	notFoundText: {
		color: 'wheat',
		textAlign: 'center',
		margin: 90
	},
}));

export default useStyles;
