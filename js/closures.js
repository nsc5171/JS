/* for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
} */

/* for (var i=1; i<=5; i++) {
	(function(j){
		setTimeout( function timer(){
			console.log( j );
		}, j*1000 );
	})( i );
} */


/* for (var i=1; i<=5; i++) {
    var j=i;
	setTimeout( function timer(){
		console.log( j );
	}, i*1000 );
} */

/* for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
} */

 /* let i;
 for ( i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
} */

/* for (var i=1; i<=5; i++) {
    var j=i;
    let a=i;
	setTimeout( function timer(){
		console.log( j + " " + a );
	}, i*1000 );
} */
