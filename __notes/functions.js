// iife - Immediately-Invoked Function Expression

( function(){ /* code */ }() );

for ( var i = 0; i < elems.length; i++ ) {

   (function( lockedInIndex ){

      elems[ i ].addEventListener( 'click', function(e){
        e.preventDefault();
        alert( 'I am link #' + lockedInIndex );
      }, 'false' );

    })( i );

}

//ex.
var counter = (function(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    },
    increment: function() {
      return ++i;
    }
  };
}());

// `counter` is an object with properties, which in this case happen to be
// methods.

counter.get(); // 0
counter.set( 3 );
counter.increment(); // 4
counter.increment(); // 5
