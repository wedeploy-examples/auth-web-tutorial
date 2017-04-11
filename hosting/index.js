// Insert sign in method bellow
var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.me');

function signInWithEmailAndPassword() {
	auth.signInWithEmailAndPassword(signIn.email.value, signIn.password.value)
	.then(function() {
		alert('Sign-in successfully.');
		signIn.reset();
	})
	.catch(function() {
		alert('Sign-in failed.');
		signIn.reset();
	});
}

auth.onSignIn(function(user) {
	location.href = '/welcome.html';
});
// Insert sign in method above