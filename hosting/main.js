// Insert auth variable bellow
var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.me');
// Insert auth variable above


// Insert create user method bellow
function submitForm() {
	auth.createUser({
		email: user.email.value,
		name: user.name.value,
		password: user.password.value
	})
	.then(function() {
		alert('Account successfully created!');
		signIn();
		user.reset();
	})
	.catch(function() {
		alert('Sign-up failed. Try another email.');
		user.reset();
	});
}
// Insert create user method above


// Insert sign-in method bellow
function signIn() {
	auth.signInWithEmailAndPassword(user.email.value, user.password.value)
	.then(function() {
		document.location.href = '/welcome.html';
	})
	.catch(function() {
		alert('Sign-in failed. Try another email/password.');
	});
}
// Insert sign-in method above


// Insert current user se lector bellow
document.querySelector('.username').innerHTML = auth.currentUser.name;
// Insert current user selector bellow


function out() {
	auth.signOut()
	.then(() => {
		location.href = '/';
	});
}