var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.io');

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