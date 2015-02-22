# grid_D-Pad
Use keyboard D-pad control grid layout

## Usage

new a gridDPad object

```javascript
var gridDPad = new gridDPad();
```

### parameter

* gridW[Number] - require

    * grid width

* gridH[Number] - require

    * grid height

* domList[Array] - require

    * grid DOM object

* transitionDom[object]

    * move scroll transition


```javascript
var gridW = 320,
    gridH = 180;

var gridDPad = new gridDPad({
    gridW: gridW,
    gridH: gridH,
    domList: document.querySelectorAll('li'),
    transitionDom: document.querySelector('.transition')
});
```

### Method

* move(type)

    * grid move arrow
    * type = 'left' or 'up' or 'right' or 'down'

```javascript
gridDPad.move('left');

gridDPad.move('up');

gridDPad.move('right');

gridDPad.move('down');
```

