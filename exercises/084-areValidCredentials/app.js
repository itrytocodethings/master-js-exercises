const areValidCredentials = (name, password) => {
    return name.length > 3 && password.length >= 8 ? true : false;
}

console.log(areValidCredentials('wack', 'lol123'));