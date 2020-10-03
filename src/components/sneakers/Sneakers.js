import React, { useEffect } from 'react';
import {
	Button,
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
import useStyles from '../../styles/sneakerStyle';
import { sneakersAction } from '../../redux/actions/sneakerAction';
import { Link } from 'react-router-dom';

const Sneakers = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const sneakers = useSelector(state => state.sneakers);
	console.log(sneakers);

	useEffect(() => {
		document.title = 'Sneakers | Latest Release';
		dispatch(sneakersAction());
	}, []);
	return (
		<div>
			<Typography variant='h3' className='text-color'>
				10 LATEST RELEASED SNEAKERS
			</Typography>
			<Grid container direction='row' spacing={2}>
				{sneakers.data.length === 0
					? 'Loading data...'
					: sneakers.data.map(sneaker => (
							<Grid key={sneaker.id} item md={4}>
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
															<TableCell>Price</TableCell>
															<TableCell>{sneaker.price}Rwf</TableCell>
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
											<Link to={`/sneaker/${sneaker.id}`} className={classes.viewMore}>View more</Link>
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
