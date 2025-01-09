document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.contact-form');
	console.log('Form found:', form);
	if (!form) {
		console.error('Form not found');
		return;
	}

	// Create the thank you message element
	const thankYouMessage = document.createElement('div');
	thankYouMessage.innerHTML =
		'<h2>Thank you for your message!</h2><button id="close-thank-you">Send Another Message</button>';

	// Initially hide the thank you message
	thankYouMessage.style.display = 'none';
	// Append thank you message to the body
	document.body.appendChild(thankYouMessage);
	console.log('Thank you message appended to body'); // Debug log

	form.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission
		console.log('Form submitted'); // Debug log

		const formData = new FormData(form);

		// Use Fetch API to send form data asynchronously
		fetch(form.action, {
			method: 'POST',
			body: formData,
		})
			.then((response) => {
				if (response.ok) {
					console.log('Form submitted successfully'); // Debug log

					// Show the thank you message first
					thankYouMessage.style.display = 'block'; // Show thank you message
					console.log('Thank you message displayed'); // Debug log

					// Reset the form fields
					form.reset();
				} else {
					alert('There was an issue with your submission. Please try again.');
					console.error('Form submission failed'); // Debug log
				}
			})
			.catch((error) => {
				alert('There was an error. Please try again.');
				console.error('Error during form submission:', error); // Debug log
			});
	});

	// Close the thank you message and allow the user to send another message
	document.body.addEventListener('click', function (event) {
		if (event.target.id === 'close-thank-you') {
			console.log('Sending another message'); // Debug log
			thankYouMessage.style.display = 'none'; // Hide the thank you message
			form.style.display = 'block'; // Show the form again
			form.reset(); // Reset the form fields
		}
	});
});
