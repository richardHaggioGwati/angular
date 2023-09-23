export class AuthService {
  loggedIn = false;

  isAuthenticate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn)
      }, 8)
    })
  }

  login() {
    this.loggedIn = true;
    console.log('Logged In.....')
  }

  logout() {
    this.loggedIn = false
  }
}
