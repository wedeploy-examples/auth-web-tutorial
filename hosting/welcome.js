// Insert sign out method bellow
var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.me');

if (auth.currentUser == null) {
  location.href = '/';
}

document.querySelector('.username').innerHTML = auth.currentUser.name;

function out() {
  auth
  	.signOut()
    .then(() => {
      location.href = '/';
    });
}
// Insert sign out method above