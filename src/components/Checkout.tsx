import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'saveCard' ? checked : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Here you would typically make an API call to your backend
      // to process the order and payment information.
      // For this example, we'll just log the data and redirect to a confirmation page.
      console.log('Order submitted:', formData);
      navigate('/confirmation'); // Redirect to confirmation page
    } catch (error) {
      console.error('Error submitting order:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="fullName"
              name="fullName"
              label="Full name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email Address"
              fullWidth
              autoComplete="email"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={formData.zip}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveCard"
                  value="yes"
                  checked={formData.saveCard}
                  onChange={handleChange}
                />
              }
              label="Save this card for next time"
            />
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expiryDate"
              name="expiryDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
              value={formData.cvv}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
