async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log("clicked");
    client.checkForURL(formText);
    console.log("::: Form Submitted :::");

    fetch('/analysis',{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:formText}),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `Polarity: ${res.polarity} <br> Subjectivity: ${res.subjectivity} <br> Polarity Confidence: ${res.polarity_confidence} <br> Subjectivity Confidence: ${res.subjectivity_confidence} <br> Text: ${res.text}`;
        console.log(res);
    })
}



export { handleSubmit }
