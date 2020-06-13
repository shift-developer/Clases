const getUsuariosFollowersGitHub = async (username) => {
    var cabecera = new Headers();
    var mi_opciones_request = {
        method: 'GET',
        headers: cabecera,
        mode: 'no-cors',    
        cache: 'default'
    };
    try {
        let url = 'https://api.github.com/users/' + username + '/followers';
        const respfollowers = await fetch(url, mi_opciones_request);
        const followers = await respfollowers.json();
        console.log(followers);
        return followers;
    }
    catch (err) {
        console.log('Falló el fetch del usuario', username, err);
    }
}

setTimeout( () => {
 for (user of usuariosGitHub){
    getUsuariosFollowersGitHub(user);
}}, 1000);