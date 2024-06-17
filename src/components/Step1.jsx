import React from 'react';
import { TextField, Button, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Step1 = ({ nextStep, handleChange, values }) => {
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
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
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
      </div>
    </Container>
  );
};

export default Step1;
