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
