function customRender(reactElement, container){
    const customTag = document.createElement(reactElement.tag);
    customTag.innerHTML = reactElement.children;
    customTag.setAttribute('href',reactElement.props.href);
    customTag.setAttribute('target',reactElement.props.target)
    container.appendChild(customTag);
}

const reactElement ={
    tag : 'a',
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "Click this to visit Google"
}


const mainContainer = document.getElementById("root");


customRender(reactElement, mainContainer);