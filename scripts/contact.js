function isValidEmail(email) {
        // Regular expression for validating an Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
}

function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
        }
    
        const webhookUrl = 'https://discord.com/api/webhooks/1171891427274395798/IfLFqQwb9FPv75HVTQevesTSzkOj5ik5FxUBh1ZTeveZEP8jtqbaaNl6xqMwO6WWw8S7';
    
        const payload = {
                embeds: [
                    {
                        title: "**You Have a New Message FROM: Portfolio**",
                        color: 0x00ff00,
                        fields: [
                            {
                                name: "Name",
                                value: name,
                                inline: true,
                            },
                            {
                                name: "Email",
                                value: email,
                                inline: true,
                            },
                            {
                                name: "Message",
                                value: message,
                            },
                        ],
                    },
                ],
        };    
    
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send message to Discord');
            }
            alert('Message has been sent!');
            document.getElementById('contact-form').reset();
        })
        .catch(error => {
            console.error(error);
            alert('Failed to send the message. Try again later.');
        });
}
    