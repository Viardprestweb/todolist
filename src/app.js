
import './assets/styles/main.scss';

import Icon from './assets/images/icons/baseline-view_list-24px.svg';
import todo from './todo.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = 'My future todolist';
  element.classList.add('hello');

  // btn.innerHTML = 'Click me and check the console!';
  btn.onclick = todo;
  
  element.appendChild(btn);

  // Add the image to our existing div.
  var IconElt = new Image();
  IconElt.src = Icon;
  btn.appendChild(IconElt);

  return element;
}

document.body.appendChild(component());

