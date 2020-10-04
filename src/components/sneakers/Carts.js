import React, { useEffect } from 'react';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import moment from 'moment';
import { descAction, viewCartsAction } from '../../redux/actions/sneakerAction';
import useStyles from '../../styles/sneakerStyle';
import Payment from './Payment';

const Carts = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const carts = useSelector(state => state.viewCarts);
	const descriptions = useSelector(state => state.descriptions);

	useEffect(() => {
		dispatch(viewCartsAction());
		dispatch(descAction());
	}, []);

	return (
		<div>
			<Grid container direction='column' spacing={2}>
				<Grid item md={6}>
					<Typography>
						<Link to={`/sneakers`} className={classes.viewMore}>
							Back to List
						</Link>
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='h4' className='text-color'>
						Sneakers available in my cart
					</Typography>
				</Grid>
				<Grid container direction='row' spacing={2}>
					{carts.loading ? (
						[...new Array(6)].map((value, index) => (
							<Grid item key={index} xs={12} sm={12} md={4}>
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
												<Skeleton animation='wave' variant='text' width='80%' />
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
										<Button size='small' color='primary'>
											<Skeleton animation='wave' variant='text' width='80%' />
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))
					) : carts.data.length === 0 ? (
						<Paper>
							<Typography variant='h5'>
								Nothing in your Cart, come back soon when you add Sneakers
							</Typography>
						</Paper>
					) : (
						carts.data.map(cart => {
							const description = descriptions.data.find(
								d => d.sneakerId === cart.sneakerId && d.size === cart.size
							);
							return (
								<Grid item key={cart.id} xs={12} sm={12} md={4}>
									<Card className={classes.sneakerCardRoot}>
										<CardActionArea>
											<CardMedia
												style={{ height: '300px' }}
												image={`${process.env.API_URL}/${cart.Sneaker.picture}`}
												title={`${cart.Sneaker.model}`}
											/>
											<CardContent>
												<Typography gutterBottom variant='h4' component='h2'>
													{cart.Sneaker.brandName}
												</Typography>
												<Table>
													<TableBody>
														<TableRow>
															<TableCell>Model</TableCell>
															<TableCell>{cart.Sneaker.model}</TableCell>
														</TableRow>
														<TableRow>
															<TableCell>Size</TableCell>
															<TableCell>
																{description && description.size}
															</TableCell>
														</TableRow>
														<TableRow>
															<TableCell>Released date</TableCell>
															<TableCell>
																{moment(cart.Sneaker.releaseDate).format(
																	'Do MMM YYYY'
																)}
															</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className={classes.priceCell}>
																Price
															</TableCell>
															<TableCell className={classes.priceCell}>
																{description && description.price}Rwf
															</TableCell>
														</TableRow>
													</TableBody>
												</Table>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Payment
												cartId={cart.id}
												price={description && description.price}
											/>
										</CardActions>
									</Card>
								</Grid>
							);
						})
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Carts;
