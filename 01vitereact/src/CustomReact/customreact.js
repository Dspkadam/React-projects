 function customRender (reactElement ,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML= reactElement.children
 }
 const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
 }
 
 const mainContainer = document.querySelector('#root')

 customRender(reactElement, mainContainer)
