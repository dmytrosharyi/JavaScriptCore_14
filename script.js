function Button1(){
  var elements = document.querySelectorAll('ul>li');
  for(let i=0; i<elements.length; i++){
    var currentLi = elements[i];
    currentLi.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero tortor.'
  }
}
function Button2(){
  var elements = document.getElementsByTagName('li');
  var value = 0;
  for(let i=0; i<elements.length; i++){
    value++;
  }
  alert('Quantity of <li>: '+value);
}
