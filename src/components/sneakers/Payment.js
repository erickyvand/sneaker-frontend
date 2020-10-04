import React, { useEffect, useState } from 'react';
import {
	Button,
	Collapse,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { payAction } from '../../redux/actions/sneakerAction';

const schema = Yup.object({
	cardNumber: Yup.number('Card Number must be a number').max(
		99999999,
		'Card Number length must be 8'
	),
});

const Payment = ({ cartId, price }) => {
	const dispatch = useDispatch();

	const [open, setOPen] = useState(false);
	const [allow, setAllow] = useState(false);

	const payment = useSelector(state => state.payment);

	const handleClickOpen = () => {
		setOPen(true);
	};

	const handleClose = () => {
		setOPen(false);
	};

	const handleCloseAlert = () => {
		setAllow(false);
	};

	const handlePayment = values => {
		dispatch(payAction(cartId, values));
		setAllow(true);
	};

	useEffect(() => {
		document.title = 'Sneaker | Cart';
	}, []);

	return (
		<div>
			<Button size='small' color='primary' onClick={handleClickOpen}>
				Pay this Sneaker
			</Button>
			<Dialog fullWidth open={open} onClose={handleClose}>
				<DialogTitle>Enter your Card Number to Pay</DialogTitle>
				<Formik
					initialValues={{ cardNumber: '' }}
					validationSchema={schema}
					onSubmit={(values, { resetForm }) => {
						handlePayment(values);
						resetForm();
					}}
				>
					{props => (
						<form onSubmit={props.handleSubmit}>
							<DialogContent>
								<Collapse in={allow}>
									{payment.message ? (
										<Alert
											variant='filled'
											severity='success'
											onClose={handleCloseAlert}
										>
											{payment.message}
										</Alert>
									) : payment.error ? (
										<Alert
											variant='filled'
											severity='error'
											onClose={handleCloseAlert}
										>
											{payment.error}
										</Alert>
									) : (
										''
									)}
								</Collapse>
								<TextField
									autoFocus
									margin='normal'
									id='amount'
									label='amount'
									type='text'
									value={price}
									fullWidth
									disabled
								/>
								<TextField
									name='cardNumber'
									fullWidth
									margin='normal'
									autoFocus
									size='small'
									label='Card Number'
									value={props.values.cardNumber}
									onChange={props.handleChange('cardNumber')}
									error={
										props.values.cardNumber !== '' &&
										Object.prototype.hasOwnProperty.call(
											props.errors,
											'cardNumber'
										)
									}
									helperText={
										props.errors.cardNumber && props.errors.cardNumber
									}
								/>
							</DialogContent>
							<DialogActions>
								<Button
									type='text'
									disabled={
										!props.values.cardNumber ||
										props.values.cardNumber.length < 8 ||
										Object.keys(props.errors).length !== 0 ||
										payment.loading
									}
									color='primary'
									variant='contained'
								>
									{payment.loading ? 'Loading...' : 'Confirm'}
								</Button>
								<Button
									color='secondary'
									variant='contained'
									onClick={handleClose}
								>
									Close Dialog
								</Button>
							</DialogActions>
						</form>
					)}
				</Formik>
			</Dialog>
		</div>
	);
};

export default Payment;
