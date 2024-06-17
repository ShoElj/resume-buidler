// src/components/Step3.jsx
import React from 'react';
import { TextField, Button, Container, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.container}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Address"
          onChange={handleChange('address')}
          defaultValue={values.address}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="City"
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={nextStep}
        >
          Continue
        </Button>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={prevStep}
        >
          Back
        </Button>
      </div>
    </Container>
  );
};

export default Step3;
