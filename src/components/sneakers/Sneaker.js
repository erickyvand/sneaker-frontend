import {
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
import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { sneakerAction } from '../../redux/actions/sneakerAction';
import useStyles from '../../styles/sneakerStyle';

const Sneaker = props => {
	const sneakerId = props.match.params.sneakerId;
	const classes = useStyles();
	const dispatch = useDispatch();

	const sneaker = useSelector(state => state.sneaker);

	useEffect(() => {
		dispatch(sneakerAction(sneakerId));
	}, []);

	return (
		<div>
			<Grid container direction='row' spacing={2}>
				{sneaker.loading ? (
					'Loading...'
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
													<TableCell>Price</TableCell>
													<TableCell>{sneaker.data.price}Rwf</TableCell>
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
								<CardActions>
									{/* <Link to={`/sneaker/${sneaker.id}`} className={classes.viewMore}>
								View more
							</Link> */}
								</CardActions>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Typography variant='h5' className='text-color'>
								Available size and quantity of the {sneaker.data.model} Sneaker
							</Typography>
							{sneaker.data.Descriptions === undefined ? (
								'Loading'
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
														</TableRow>
														<TableRow>
															<TableCell>Quantity</TableCell>
															<TableCell>{description.quantity}Rwf</TableCell>
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
		</div>
	);
};

export default Sneaker;
