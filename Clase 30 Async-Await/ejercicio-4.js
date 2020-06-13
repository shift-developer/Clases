const getUsuariosFollowersGitHub = async (username) => {
    try {
        let url = 'https://api.github.com/users/' + username + '/followers';
        const respfollowers = await fetch(url);
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