module.exports = {


    getRandomString: function (characterLength) {
      let randomText = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < characterLength; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
      return randomText;
    }
  }
  