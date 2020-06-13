const getUsuariosGitHub = async (username) => {
    try {
        let url = 'https://api.github.com/users/' + username;
        const resp = await fetch(url);
        console.log(await resp.json());
    }
    catch (err) {
        console.log('Falló el fetch', err);
    }
}

setTimeout( () => {
 for (user of usuariosGitHub){
    getUsuariosGitHub(user);
}}, 500);

