fetch('http://127.0.0.1:5500/pasajero.json').then((response) => response.json()).
then((data) => console.log(data))
