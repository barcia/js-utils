import { isString, hasValue } from '../../../main'

export default ({ element, children, classes, id, styles, attributes, eventListeners }) => {

    if (isString(element)) {
        const item = document.createElement(element);

        if (hasValue(children)) {
            if (isString(children)) {
                item.innerHTML = children;
            } else {
                children.forEach( child => item.appendChild(child))
            }
        }

        if (hasValue(classes)) classes.forEach( eachClass => item.classList.add(eachClass) );

        if (hasValue(id)) item.id = id;

        if (hasValue(styles)) Object.keys(styles).forEach( key => item.style[key] = styles[key] )

        if (hasValue(attributes)) attributes.forEach( ({name, value}) => item.setAttribute(name, value) )

        if (hasValue(eventListeners)) eventListeners.forEach( ({type, listener}) => item.addEventListener(type, listener) )

        return item
    }

    return false
}
