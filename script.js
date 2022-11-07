const inputDiv = document.querySelector('.inputdiv')
const inputToDo = document.querySelector('.inputtodo')
const toDos = document.querySelector('.todos')
const ulToDo = document.querySelector('ul')
const addToDoBtn = document.querySelector('.button')
const clearBtn = document.querySelector('.close')
const sortIconDown = document.querySelector('.sorticondown')
const sortIconUp = document.querySelector('.sorticonup')

inputToDo.addEventListener('keyup', (event) =>{
    if(event.keyCode == 13) {
        const toDo = document.createElement('li')
        toDo.classList.add('todolist')
        toDo.innerText = inputToDo.value
        inputToDo.value = ''
        ulToDo.appendChild(toDo)
        const closeList = document.createElement('p')
        closeList.classList.add('closelist')
        closeList.innerHTML = '<ion-icon name="close-outline" class="close"></ion-icon>'
        toDo.appendChild(closeList)
        closeList.addEventListener('click', ()=>{
        toDo.style.display = 'none'
})
        inputDiv.style.opacity = '0'
        } 
})
addToDoBtn.addEventListener('click', ()=>{
    inputDiv.style.opacity = "1"
    toDos.scrollTop = toDos.scrollHeight

})
clearBtn.addEventListener('click', ()=>{
inputToDo.value = ''
})
sortIconUp.addEventListener('click',()=>{
    var  i, switching, b, shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    b = ulToDo.getElementsByTagName("li");
    for (i = 0; i < (b.length + 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
})
// sortIconDown.addEventListener('click',()=> {

//   var  i, switching, b, shouldSwitch;
//   switching = true;
//   while (switching) {
//     switching = false;
//     b = ulToDo.getElementsByTagName("li");
//     for (i = 0; i < (b.length + 1); i++) {
//       shouldSwitch = false;
//       if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// })

    