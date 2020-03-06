const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://official-joke-api.appspot.com/random_joke', true);
request.onload = function() {
	// Begin accessing JSON data here
	if (request.status >= 200 && request.status < 400) {
		var one_data = JSON.parse(this.response);
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const h1 = document.createElement('h1');
		h1.textContent = one_data.setup;

		const p = document.createElement('p');
		p.textContent = one_data.punchline;

		container.appendChild(card);
		card.appendChild(h1);
		card.appendChild(p);
		
	} else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Gah, it's not working!`;
		app.appendChild(errorMessage);
	}
}

request.send();
