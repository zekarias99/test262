// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If x is -Infinity, Math.cos(x) is NaN
 *
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.7_cos/S15.8.2.7_A5.js
 * @description Checking if Math.cos(-Infinity) is NaN
 */

// CHECK#1
var x = -Infinity;
if (!isNaN(Math.cos(x)))
{
	$ERROR("#1: 'var x = -Infinity; isNaN(Math.cos(x)) === false'");
}
