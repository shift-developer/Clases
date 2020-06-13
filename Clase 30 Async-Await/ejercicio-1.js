function getNombresPromesa(url) {
    return fetch(url)
        .then(res => res.json())
        .then(users => console.log(users))
        .catch(err => console.log(err));   
}
getNombresPromesa('https://jsonplaceholder.typicode.com/users');