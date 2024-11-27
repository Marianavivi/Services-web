import * as React from 'react';
import { useState } from 'react';
import api from '../../services/api';
import { TextField, Button } from '@mui/material';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/register', { username, password });
      console.log(response.data); // Handle successful registration
    } catch (error) {
      console.error('Error registering:', error); // Handle registration error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
