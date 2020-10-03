import React from 'react';
import FadeIn from 'react-fade-in';
import { Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/LayoutStyle';

const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<FadeIn>
				<Grid
					container
					direction='column'
					justify='space-between'
					alignItems='center'
				>
					<Grid item xs={12} sm={12} md={12}>
						<Typography variant='h2' className='text-color'>
							Welcome to the Sneaker City, the best e-commerce
						</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={12}>
						<Link to='/sneakers' className={classes.homeLink}>
							Click here to proceed
						</Link>
					</Grid>
				</Grid>
			</FadeIn>
		</div>
	);
};

export default Home;
