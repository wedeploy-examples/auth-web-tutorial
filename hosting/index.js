var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.io');

function signInWithEmailAndPassword() {
	auth.signInWithEmailAndPassword(signIn.email.value, signIn.password.value)
	.then(function() {
		signIn.reset();
	})
	.catch(function() {
		alert('Sign-in failed.');
		signIn.reset();
	});
}

auth.onSignIn(function() {
	location.href = '/welcome.html';
});

if (auth.currentUser) {document.location.href = '/welcome.html';}