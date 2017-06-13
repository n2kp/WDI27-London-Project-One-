module.exports = {
  instagram: {
    loginUrl: 'https://api.instagram.com/oauth/authorize/',
    clientId: process.env.INSTA_ACCESS_KEY,
    clientSecret: process.env.INSTA_SECRET_KEY,
    redirectUri: 'http://localhost:8000/register',
    responseCode: 'token',
    scope: 'basic',
    getLoginUrl() {
      return `${this.loginURL}?client_id=${this.clientID}&redirect_uri=${this.redirectUri}&response_type=${this.responseCode}`;
    }
  }
};
