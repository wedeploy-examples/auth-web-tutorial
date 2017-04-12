// Insert create user method bellow
var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.me');

function submitForm() {
	auth.createUser({
		email: signUp.email.value,
		name: signUp.name.value,
		password: signUp.password.value
	})
	.then(function() {
		alert('Account successfully created!');
		signIn();
		signUp.reset();
	})
	.catch(function() {
		alert('Sign-up failed. Try another email.');
		signUp.reset();
	});
}
// Insert create user method above

function signIn() {
	auth.signInWithEmailAndPassword(signUp.email.value, signUp.password.value)
	
	.then(function() {
		document.location.href = '/welcome.html';
	})
	.catch(function() {
		alert('Sign-in failed. Try another email/password.');
	});
}

if (auth.currentUser) {document.location.href = '/welcome.html';}