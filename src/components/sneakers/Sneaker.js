import React, { useEffect, useState } from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Collapse,
	Grid,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Tooltip,
	Typography,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import moment from 'moment';
import Alert from '@material-ui/lab/Alert';
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import {
	addCartAction,
	sneakerAction,
} from '../../redux/actions/sneakerAction';
import useStyles from '../../styles/sneakerStyle';
import { Link } from 'react-router-dom';

const Sneaker = props => {
	const sneakerId = props.match.params.sneakerId;
	const classes = useStyles();
	const dispatch = useDispatch();

	const sneaker = useSelector(state => state.sneaker);
	const cart = useSelector(state => state.addCart);

	const [open, setOpen] = useState(false);

	const handleAddCart = size => {
		dispatch(addCartAction(sneakerId, size));
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		document.title = 'Sneaker | Additional information';
		dispatch(sneakerAction(sneakerId));
	}, []);

	return (
		<div>
			<Collapse in={open}>
				{cart.message ? (
					<Alert variant='filled' severity='success' onClose={handleClose}>
						{cart.message}
					</Alert>
				) : cart.error ? (
					<Alert variant='filled' severity='error' onClose={handleClose}>
						{cart.error}
					</Alert>
				) : (
					''
				)}
			</Collapse>
			<Grid container direction='column' spacing={2}>
				<Grid item md={6}>
					<Typography>
						<Link to={`/sneakers`} className={classes.viewMore}>
							Back to List
						</Link>
					</Typography>
				</Grid>
				<Grid item md={12}>
					<Typography variant='h4' className='text-color'>
						Available size and quantity of the {sneaker.data.model} Sneaker
					</Typography>
				</Grid>
				<Grid container direction='row' spacing={2}>
					{sneaker.loading ? (
						<Grid item xs={12} sm={12} md={6}>
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
											</TableBody>
										</Table>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					) : (
						<>
							<Grid item xs={12} sm={12} md={6}>
								<Card className={classes.sneakerCardRoot}>
									<CardActionArea>
										<CardMedia
											style={{ height: '300px' }}
											image={`${process.env.API_URL}/${sneaker.data.picture}`}
											title={`${sneaker.data.model}`}
										/>
										<CardContent>
											<Typography gutterBottom variant='h4' component='h2'>
												{sneaker.data.brandName}
											</Typography>
											<Table>
												<TableBody>
													<TableRow>
														<TableCell>Model</TableCell>
														<TableCell>{sneaker.data.model}</TableCell>
													</TableRow>
													<TableRow>
														<TableCell>Released date</TableCell>
														<TableCell>
															{moment(sneaker.data.releaseDate).format(
																'Do MMM YYYY'
															)}
														</TableCell>
													</TableRow>
												</TableBody>
											</Table>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xs={12} sm={12} md={6}>
								{sneaker.data.Descriptions === undefined ? (
									[...new Array(5)].map((value, index) => (
										<Paper key={index} elevation={6}>
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
														<TableCell>
															<Skeleton
																animation='wave'
																variant='circle'
																width={50}
																height={50}
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
										</Paper>
									))
								) : sneaker.data.Descriptions.length === 0 ? (
									<Paper>
										<Typography variant='h5'>
											No Size or quantity available for this sneaker
										</Typography>
									</Paper>
								) : (
									sneaker.data.Descriptions.map(description => (
										<Grid
											key={description.id}
											container
											direction='column'
											spacing={2}
										>
											<Grid item>
												<Paper elevation={6}>
													<Table>
														<TableBody>
															<TableRow>
																<TableCell>Size</TableCell>
																<TableCell>{description.size}</TableCell>
																<TableCell>
																	<Tooltip title='Add to cart'>
																		<IconButton
																			style={{ color: '#184b52' }}
																			onClick={() =>
																				handleAddCart(description.size)
																			}
																		>
																			<AddShoppingCartIcon />
																		</IconButton>
																	</Tooltip>
																</TableCell>
															</TableRow>
															<TableRow>
																<TableCell>Quantity</TableCell>
																<TableCell>{description.quantity}</TableCell>
															</TableRow>
															<TableRow>
																<TableCell className={classes.priceCell}>
																	Price
																</TableCell>
																<TableCell className={classes.priceCell}>
																	{description.price}Rwf
																</TableCell>
															</TableRow>
														</TableBody>
													</Table>
												</Paper>
											</Grid>
										</Grid>
									))
								)}
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Sneaker;
