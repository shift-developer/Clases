const getUsuariosGitHub = async (username) => {
    try {
        let url = 'https://api.github.com/users/' + username;
        const resp = await fetch(url);
        const usuario = await resp.json();
        console.log(usuario);
    }
    catch (err) {
        console.log('Falló el fetch', err);
    }
}

setTimeout( () => {
 for (user of usuariosGitHub){
    getUsuariosGitHub(user);
}}, 500);

