// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionDeclaration within a "for-in" Statement is not allowed
 *
 * @description: Declaring function within a "for-in" Statement
 * @negative SyntaxError
 * @onlyStrict
 * @bestPractice
 * http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls
 */
"use strict";
for (x in this) {
    function __func(){};
}
