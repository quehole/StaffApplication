const webhookURL = "https://discord.com/api/webhooks/1041740427256143892/aWONufg5d0rIotSYe8zJ5s1avFvyG6XmjjLyDQnm8o9bmu9M-8TB9zmHan5hDMnlCrF7" // MANDATORY | Your Webhook URL Here
const avatarURL = "" // OPTIONAL | The URL for the PFP of the webhook itself. Must be a link to a supported image format.

// Getting the elements from the HTML page
const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')

function sendMessage() { // After submitting the form.
    var request = new XMLHttpRequest() // Creates a new XML Http Request
    request.open("POST", webhookURL) // Opens a new HTTP Request to the webhook URL
    request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

    var embed = { // Embed to send.
        author: { name: `${username.value}#${usertag.value}` }, // Author of the embed
        title: "New Staff Application!", // Title of the embed
        timestamp: new Date(), // Footer Timestamp of the embed
        color: 0xFF0000, // Color of the embed
        footer: { text: `Staff Application Webhook | User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "User", value: `${username.value}#${(usertag.value).toString()}`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "How did they find the server", value: `${reason.value}` },
            { name: "Why do they want to join us", value: `${appeal.value}` }
        ]
    }

    var params = { // Parameters to send the request
        username: `Staff Application`, // Name of the webhook
        avatar_url: avatarURL, // PFP URL of the webhook
        embeds: [ embed ] // Embeds to send with the webhook
    }

    request.send(JSON.stringify(params)) // Sends the request 
    alert('Staff application Sent!') // Tells the user that the appeal has been sent.
    console.log('Staff application Sent!') // Logs that the appeal has been sent. (For DEVELOPMENT purposes)
}
