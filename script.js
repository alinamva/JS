const inputDiv = document.querySelector('.inputdiv')
const inputToDo = document.querySelector('.inputtodo')
const toDos = document.querySelector('.todos')
const ulToDo = document.querySelector('ul')
const addToDoBtn = document.querySelector('.button')
const clearBtn = document.querySelector('.close')
const sort = document.querySelector(".sort")
const listElements = document.querySelector('.todos')

inputToDo.addEventListener('keyup', (event) =>{
    if(event.keyCode == 13) {
      toDos.style.border = 'thin solid #c4c4c4'
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
        toDo.parentNode.removeChild(toDo)
        if(ulToDo.children.length == 0)  {
          toDos.style.border = 'none'
          inputDiv.style.display = "flex"
        }
})
        inputDiv.style.display = 'none'
        } 
})
addToDoBtn.addEventListener('click', ()=>{
    inputDiv.style.display = "flex"
    inputToDo.focus()
    toDos.scrollTop = toDos.scrollHeight         
})
clearBtn.addEventListener('click', ()=>{
inputToDo.value = ''
})
sort.addEventListener("click", sortUl);
function sortUl(event) {
  if (event.target.id == "sort") {
    if (ulToDo.children.length != 0) {
      let arr = [];
      for (let i = 0; i < ulToDo.children.length; i++) {
        arr.push(ulToDo.children[i].childNodes[0].textContent);
      }
      event.target.src = "icons/sortdownb.png";
      arr.sort();
      for (let i = 0; i < ulToDo.children.length; i++) {
        ulToDo.children[i].childNodes[0].textContent = arr[i];
      }
    }
    sort.removeEventListener("click", sortUl);
    sort.addEventListener("click", reverseUl);
  }
}
function reverseUl(event) {
  if (event.target.id == "sort") {
    if (ulToDo.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < ulToDo.children.length; i++) {
        newDAta.push(ulToDo.children[i].childNodes[0].textContent);
      }
      event.target.src = "icons/sortupb.png";
      newDAta.sort().reverse();
      for (let i = 0; i < ulToDo.children.length; i++) {
        ulToDo.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sort.removeEventListener("click", reverseUl);
    sort.addEventListener("click", sortUl);
  }
}

const ull = document.querySelector("#sortlist")
new Sortable(ull, {
  animation: 200,
  });
