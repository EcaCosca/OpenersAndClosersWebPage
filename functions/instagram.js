require('ismorphic-fetch');
const url = `https://ig.instant-tokens.com/users/c1d4873b-f1ad-4f71-937d-eb89e68a03a7/instagram/17841400666951258/token.js?userSecret=f24ejws1zukw91o0o9kd2f`;

async function getPosts() {
    const data = await fetch(url).then(res => res.json());
    console.log(data);
    return data;
}

exports.handler = async function(event, context, callback) {
    const posts = await getPosts();
    callback(null, {
        statusCode: 200,
        body: 'Hello, World',
    });
};