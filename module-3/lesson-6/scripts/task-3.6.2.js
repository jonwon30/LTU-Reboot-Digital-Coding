let div = document.querySelectorAll('div')[0];
let newParagraph = document.createElement('p');
let newTextNode = document.createTextNode('This is the new text node blah blah blah');

newParagraph.appendChild(newTextNode);
div.appendChild(newParagraph)

newParagraph.style.color = 'red'
newParagraph.style.border = '10px solid blue'