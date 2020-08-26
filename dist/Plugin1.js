//=============================================================================
// RPG Maker MZ - Plugin1.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Prototype
 * @author Author Name
 *
 * @help Plugin1.js - v1.0.0
 *
 * @command aCommand
 * @text A command
 * @desc A command description.
 *
 * @arg anArg
 * @type number
 * @min 1
 * @max 60
 * @default 1
 * @text An argument
 * @desc An argument description.
 */

(function () {
    'use strict';

    class TestClass extends Bitmap {
        /**
         * @param x
         * @param y
         */
        testFunc(x, y) {
            return x + y;
        }
    }
    const btm = new TestClass(100, 200);
    console.log(btm.clear());

}());
