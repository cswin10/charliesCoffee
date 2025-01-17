const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('show');
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');
    if (!form) {
        console.error('Form not found');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        // Use Fetch API to send form data asynchronously
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    alert('Reservation submitted successfully!');
                    form.reset(); // Reset the form fields
                } else {
                    alert('Failed to submit reservation.');
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the reservation.');
            });
    });
});