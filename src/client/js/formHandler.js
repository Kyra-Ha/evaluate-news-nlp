
async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value

    client.checkForUrl(formText)

    console.log("::: Form Submitted :::")
    
    const res = await fetch('http://localhost:3000/analysis',{
        method: 'POST', 
        credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formText)

    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.body.polarity;
        document.getElementById('results').innerHTML = res.body.subjectivity;
        document.getElementById('results').innerHTML = res.body.text;
    })
}


