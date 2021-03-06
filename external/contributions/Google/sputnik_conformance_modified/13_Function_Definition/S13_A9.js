// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A9;
* @section: 13;
* @assertion: Function can be passed as argument;
* @description: Using function as argument of another function;
*/

function __func__INC(arg){return arg + 1;};
function __func__MULT(incrementator, arg, mult){ return incrementator(arg)*mult; };

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func__MULT(__func__INC, 2, 2) !== 6) {
	$ERROR('#1: function  can be passed as argument');
}
//
//////////////////////////////////////////////////////////////////////////////

