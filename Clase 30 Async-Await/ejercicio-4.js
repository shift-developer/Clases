const getUsuariosFollowersGitHub = async (username) => {
    try {
        let url = 'https://api.github.com/users/' + username;
        const resp = await fetch(url);
        const usuarios = await resp.json();
        const followers_url = await usuarios.followers_url;
        const respfollowers = await fetch(followers_url);
        const followers = await respfollowers.json();
        console.log(followers);
    }
    catch (err) {
        console.log('Falló el fetch del usuario', username, err);
    }
}

setTimeout( () => {
 for (user of usuariosGitHub){
    getUsuariosFollowersGitHub(user);
}}, 500);