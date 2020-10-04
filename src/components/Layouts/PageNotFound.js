import React, { useEffect } from 'react';
import { Badge, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from '../../styles/LayoutStyle';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const classes = useStyles();

	useEffect(() => {
		document.title = 'Sneakers | Page Not Found';
	}, []);
	return (
		<div>
			<Typography variant='h6'>
				<Link to='/' className='text-color'>
					<Badge>
						Back Home <HomeIcon />
					</Badge>
				</Link>
			</Typography>
			<Typography variant='h1' className={classes.notFoundText}>
				Page Not Found
			</Typography>
			<Typography variant='h1' className={classes.notFoundText}>
				404
			</Typography>
		</div>
	);
};

export default PageNotFound;
