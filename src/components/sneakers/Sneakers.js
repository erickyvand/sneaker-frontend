import React, { useEffect } from 'react';
import {
	Badge,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import FadeIn from 'react-fade-in';
import Skeleton from '@material-ui/lab/Skeleton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import useStyles from '../../styles/sneakerStyle';
import { sneakersAction } from '../../redux/actions/sneakerAction';
import { Link } from 'react-router-dom';

const Sneakers = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const sneakers = useSelector(state => state.sneakers);

	useEffect(() => {
		document.title = 'Sneaker | Latest Release';
		dispatch(sneakersAction());
	}, []);
	return (
		<div>
			<Typography style={{ float: 'right' }}>
				<Link to='/' className={classes.badge}>
					<Badge>
						<HomeIcon />
					</Badge>
				</Link>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Link to='/carts' className={classes.badge}>
					<Badge>
						My Cart <ShoppingCartIcon />
					</Badge>
				</Link>
			</Typography>
			<Typography variant='h3' className='text-color'>
				10 LATEST RELEASED SNEAKERS
			</Typography>
			<Grid container direction='row' spacing={2}>
				{sneakers.data.length === 0
					? [...new Array(10)].map((value, index) => (
							<Grid key={index} item xs={12} sm={12} md={4}>
								<FadeIn>
									<Card className={classes.sneakerCardRoot}>
										<CardActionArea>
											<Skeleton
												animation='wave'
												variant='rect'
												width='100%'
												height={300}
											/>
											<CardContent>
												<Typography gutterBottom variant='h4' component='h2'>
													<Skeleton
														animation='wave'
														variant='text'
														width='80%'
													/>
												</Typography>
												<Table>
													<TableBody>
														<TableRow>
															<TableCell>
																<Skeleton
																	animation='wave'
																	variant='text'
																	width='80%'
																/>
															</TableCell>
															<TableCell>
																<Skeleton
																	animation='wave'
																	variant='text'
																	width='80%'
																/>
															</TableCell>
														</TableRow>
														<TableRow>
															<TableCell>
																<Skeleton
																	animation='wave'
																	variant='text'
																	width='80%'
																/>
															</TableCell>
															<TableCell>
																<Skeleton
																	animation='wave'
																	variant='text'
																	width='80%'
																/>
															</TableCell>
														</TableRow>
													</TableBody>
												</Table>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Skeleton animation='wave' variant='text' width='80%' />
										</CardActions>
									</Card>
								</FadeIn>
							</Grid>
					  ))
					: sneakers.data.map(sneaker => (
							<Grid key={sneaker.id} item xs={12} sm={12} md={4}>
								<FadeIn>
									<Card className={classes.sneakerCardRoot}>
										<CardActionArea>
											<CardMedia
												style={{ height: '300px' }}
												image={`${process.env.API_URL}/${sneaker.picture}`}
												title={`${sneaker.model}`}
											/>
											<CardContent>
												<Typography gutterBottom variant='h4' component='h2'>
													{sneaker.brandName}
												</Typography>
												<Table>
													<TableBody>
														<TableRow>
															<TableCell>Model</TableCell>
															<TableCell>{sneaker.model}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell>Released date</TableCell>
															<TableCell>
																{moment(sneaker.releaseDate).format(
																	'Do MMM YYYY'
																)}
															</TableCell>
														</TableRow>
													</TableBody>
												</Table>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Link
												to={`/sneaker/${sneaker.id}`}
												className={classes.viewMore}
											>
												View more
											</Link>
										</CardActions>
									</Card>
								</FadeIn>
							</Grid>
					  ))}
			</Grid>
		</div>
	);
};

export default Sneakers;
