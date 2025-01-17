// Description: JavaScript file for the contact form.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    console.log('Form found:', form);
    if (!form) {
        console.error('Form not found');
        return;
    }

    // Create the thank you banner element
    const thankYouBanner = document.createElement('div');
    thankYouBanner.innerHTML = '<p>Thank you for your message! We will be in touch :)</p>';
    thankYouBanner.style.position = 'fixed';
    thankYouBanner.style.top = '0';
    thankYouBanner.style.left = '0';
    thankYouBanner.style.width = '100%';
    thankYouBanner.style.backgroundColor = '#4CAF50';
    thankYouBanner.style.color = '#fff';
    thankYouBanner.style.textAlign = 'center';
    thankYouBanner.style.padding = '10px';
    thankYouBanner.style.display = 'none';
    thankYouBanner.style.zIndex = '1000';

    // Append thank you banner to the body
    document.body.appendChild(thankYouBanner);
    console.log('Thank you banner appended to body'); // Debug log

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

                    // Show the thank you banner
                    thankYouBanner.style.display = 'block'; // Show thank you banner
                    console.log('Thank you banner displayed'); // Debug log

                    // Hide the banner after 5 seconds
                    setTimeout(() => {
                        thankYouBanner.style.display = 'none';
                    }, 5000);

                    // Reset the form fields
                    form.reset();
                } else {
                    console.error('Form submission failed'); // Debug log
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error); // Debug log
            });
    });
});