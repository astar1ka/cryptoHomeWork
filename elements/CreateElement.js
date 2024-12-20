function CreateElement(tag, parent = null, options = {}){
    const element = document.createElement(tag);
    Object.keys(options).forEach(key => element[key] = options[key])
    if (parent) parent.appendChild(element);
    return element;
}