Create a HTML element

```js
const myElement = createElement(
    {
        element: 'div',
        children: [
            para2,
            para
        ],
        classes: ['primary', 'secondClass'],
        id: 'myItem',
        styles: {
            backgroundColor: 'lightsalmon',
            borderRadius: '8px',
            padding: '4px'
        },
        attributes: [
            {
                name: 'aria-label',
                value: 'My box',
            },
        ],
        eventListeners: [
            {
                type: 'click',
                listener: callback
            }
        ]
    }
)
```
