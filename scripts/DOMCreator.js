export default function createDOM(element = {}) {
    const dom = document.createElement(element.tag);
    Object.entries(element).forEach(el => {
        const
            name = el[0],
            value = el[1];

        if (name === 'children') {
            if (Array.isArray(value)) { //as array
                value.forEach(child => {
                    dom.append(createDOM(child));
                });
            } else {
                dom.append(createDOM(value));
            }
        } else {
            dom[name] = value;
        }
    });
    return dom;
}
