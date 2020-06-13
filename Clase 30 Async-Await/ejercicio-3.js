const getUsuariosGitHub = async (username) => {
    var cabecera = new Headers();
    var mi_opciones_request = {
        method: 'GET',
        headers: cabecera,
        mode: 'no-cors',
        cache: 'default'
    };
    try {
        let url = 'https://api.github.com/users/' + username;
        const resp = await fetch(url, mi_opciones_request);
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

