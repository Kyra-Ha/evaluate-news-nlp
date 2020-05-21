
async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log("clicked");
    // if (client.checkForURL(formText)===true){

    console.log("::: Form Submitted :::");

    const response = await fetch('/analysis',{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: formText}),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity;
        document.getElementById('results').innerHTML = res.subjectivity;
        document.getElementById('results').innerHTML = res.text;
        console.log(res.polarity, res.subjectivity, res.text);
    })
}


export { handleSubmit}
