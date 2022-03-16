function login() {}

const myButton = document.getElementById('submitButton');

myButton.addEventListener('click', function (data) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (email.value && password) {
    let body = {
      email: email.value,
      password: password.value,
    };

    console.log(body);
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((body) => {
        window.localStorage.setItem('token', body.token);
        window.location.replace('http://localhost:3000');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
