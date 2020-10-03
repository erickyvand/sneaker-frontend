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
}));

export default useStyles;
