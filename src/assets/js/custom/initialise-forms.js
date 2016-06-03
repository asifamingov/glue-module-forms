/**
 * This file initialises forms
  */
(function( $ ) { /* start closure */
	'use strict';


	var initValidation = function() {
		window.initConstraintValidationAPI();
		$( 'form' ).formValidation( 'validate' );
	};


	// now: hookup form validation
	initValidation();

	// document ready: hookup form validation
	$( initValidation );


	// instruction based relevance
	if ( $( '.relevance', 'form' ).length > 0 ) {
		$( 'form', '#content' ).relevance( 'instructions' );
	}


}( jQuery )); /* end closure */
