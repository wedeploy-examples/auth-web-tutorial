// Insert create user method bellow
var auth = WeDeploy.auth('auth.tutorial-auth-web.wedeploy.io');

function submitForm() {
		auth.createUser({
			email: signUp.email.value,
			name: signUp.name.value,
			password: signUp.password.value
		}).then(function() {
			auth.signInWithEmailAndPassword(signUp.email.value, signUp.password.value)
				.then(function(user) {
					alert('Sign-in successfully.');
					signUp.reset();
					document.location.href = '/welcome.html';
				})
				.catch(function() {
					alert('Sign-up failed. Try another email.');
					signUp.reset();
				});
		})
}
// Insert create user method above