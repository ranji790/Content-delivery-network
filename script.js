document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
  
    // Send the data to the server via fetch
    fetch('https://ya4sty3fv2.execute-api.eu-north-1.amazonaws.com/prod/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject) // Convert the form data into JSON
    })
    .then(response => response.text()) // Convert the response to text
    .then(data => {
      alert('Your booking has been submitted!');
      document.getElementById('booking-form').reset(); // Reset the form
    })
    .catch(error => {
      alert('There was an error submitting your booking.');
      console.error('Error:', error);
    });
  });