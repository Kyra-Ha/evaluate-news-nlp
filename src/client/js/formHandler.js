//Setting up API


async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    checkForUrl(formText)

    console.log("::: Form Submitted :::")
   
    const res = await fetch('http://localhost:8080/analysis'){
        method: 'POST', 
        credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formText)

    });
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = res.message;
        document.getElementById('subjectivity').innerHTML = res.message;
        document.getElementById('text').innerHTML = res.message;
    })
}


export { handleSubmit }