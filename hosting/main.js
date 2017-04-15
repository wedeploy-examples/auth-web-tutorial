// Insert create user method below

// Insert create user method above


// Insert sign-in method below

// Insert sign-in method above


// Insert current user selector below

// Insert current user selector above


function out() {
	auth.signOut()
	.then(() => {
		location.href = '/';
	});
}