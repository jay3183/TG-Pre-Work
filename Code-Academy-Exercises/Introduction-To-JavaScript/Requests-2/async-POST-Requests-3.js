// information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': c94ae8062f094654be49537d2da6c0eb
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


// I makde an account on rebrandly and generated an API key.
