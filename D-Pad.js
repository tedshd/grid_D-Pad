/*global $, jQuery, alert, console, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-02-22 17:29:06
 * @version $Id$
 */

(function () {
    function gridDPad(option) {
        if (!option.domList) {
            console.error('not set grid array');
            return;
        }
        var focusCount = 0,
            domList = option.domList,
            gridSum = option.domList.length,
            gridW = option.gridW || 320,
            gridH = option.gridH || 180,
            viewW,
            viewH,
            viewXCount,
            viewYCount,
            viewCount,
            scrollCount;
        function initView() {
            viewW = window.document.documentElement.clientWidth;
            viewH = window.document.documentElement.clientHeight;
            viewXCount = Math.floor(viewW/gridW);
            viewYCount = Math.floor(viewH/gridH);
            viewCount = viewXCount*viewYCount;
            console.log(gridH - (viewH%gridH));
            console.log(viewXCount);
            console.log(viewYCount);
        }
        function resetCount(count) {
            focusCount = count || 0;
        }
        function moveUp() {
            focusCount = focusCount - viewXCount;
            if (0 >= focusCount) {
                focusCount = 0;
            }
            domList[focusCount].classList.add('focus');
        }
        function moveDown() {
            focusCount = focusCount + viewXCount;
            if (focusCount >= gridSum - 1) {
                focusCount = gridSum - 1;
            }
            console.log(focusCount);
            domList[focusCount].classList.add('focus');
        }
        function moveLeft() {
            focusCount--;
            if (0 >= focusCount) {
                focusCount = 0;
            }
            domList[focusCount].classList.add('focus');
        }
        function moveRight() {
            focusCount++;
            if (focusCount >= gridSum) {
                focusCount = gridSum - 1;
            }
            domList[focusCount].classList.add('focus');
        }
        function move(type) {
            domList[focusCount].classList.remove('focus');
            switch (type) {
                case 'up':
                    moveUp();
                    console.log(focusCount);
                    break;
                case 'down':
                    moveDown();
                    console.log(focusCount);
                    break;
                case 'left':
                    moveLeft();
                    console.log(focusCount);
                    break;
                case 'right':
                    moveRight();
                    console.log(focusCount);
                    break;
                default:
                    console.error('gridDPad move type error');
                    break;
            }
            scrollCount = Math.floor(focusCount/viewCount);
            if (option.transitionDom) {
                option.transitionDom.style.top = - gridH*viewYCount*scrollCount + 'px';
            }
        }
        initView();
        window.onresize = initView;
        this.initView = initView;
        this.resetCount = resetCount;
        this.move = move;
    }

    window.gridDPad = gridDPad;
})();