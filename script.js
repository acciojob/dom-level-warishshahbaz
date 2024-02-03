//your JS code here. If required.
const targetElement = document.getElementById("level");

    if (!targetElement) {
        console.error(`Element with id "${elementId}" not found.`);
        return -1;
    }

    let domLevel = 0;
    let currentElement = targetElement;

    // Traverse up the DOM tree until reaching the root HTML element
    while (currentElement !== document.documentElement) {
        currentElement = currentElement.parentNode;
        domLevel++;
    }
alert(domLevel)
    