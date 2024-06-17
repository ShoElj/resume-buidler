// src/components/Confirm.jsx
import React from 'react';
import axios from 'axios';

const Confirm = ({ nextStep, prevStep, values }) => {
  const submit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-pdf', values);
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'resume.pdf';
      link.click();
      nextStep();
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };

  return (
    <div>
      <h1>Confirm Your Details</h1>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={submit}>Confirm & Continue</button>
    </div>
  );
};

export default Confirm;
