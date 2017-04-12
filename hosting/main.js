// Insert create user method bellow

// Insert create user method above


// Insert sign-in method bellow

// Insert sign-in method above


// Insert current user selector bellow

// Insert current user selector above


function out() {
	auth.signOut()
	.then(() => {
		location.href = '/';
	});
}