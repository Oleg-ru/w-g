fetch('https://69a7245d2cd1d055268ffffa.mockapi.io/user')
    .then(resp => resp.json())
    .then(data => console.log(data))