const { IgApiClient } = require('instagram-private-api');
async function getInstagramData(){
// Crie uma instância do cliente
const ig = new IgApiClient();

// Faça login na sua conta (substitua 'SEU_USUÁRIO' e 'SUA_SENHA' pelos seus dados reais)
ig.state.generateDevice('fdgdfg');
await ig.account.login('dgdfg', '1dfhdfgh#');

// Obtenha a lista de seguidores
const followers = await ig.feed.accountFollowers(ig.state.cookieUserId).items();

// Obtenha a lista de pessoas que você segue
const following = await ig.feed.accountFollowing(ig.state.cookieUserId).items();

// Verifique quem não te segue de volta
const notFollowingBack = following.filter(user => !followers.some(follower => follower.pk === user.pk));

console.log('Seguidores:', followers);
console.log('Seguindo:', following);
console.log('Não te segue de volta:', notFollowingBack);

}

module.exports = { getInstagramData };