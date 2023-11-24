function getElementById(id) {
    return document.getElementById(id);
}

function getFieldValue(id, isValue) {
    let value;

    if(isValue) {
        value = getElementById(id).value;
    } else {
        value = getElementById(id).innerText;
    }

    return value;
}

function createElement(elementName) {
    return document.createElement(elementName);
}