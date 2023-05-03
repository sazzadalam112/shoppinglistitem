const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemlist = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function additem(e) {
    e.preventDefault();
    
    const newitem = itemInput.value
    // valide input 
    if(newitem === '') {
        alert('please add something');
        return;
    }
    // create list item 
   const li =  document.createElement('li');
   li.appendChild(document.createTextNode(newitem));

   const button = createButton('remove-item btn-link text-red');
   li.appendChild(button);
   itemlist.appendChild(li);
   itemInput.value = '';
   
   

}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button;

}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
         e.target.parentElement.parentElement.remove();
    }
}
function clearItems() {
//    itemlist.innerHTML = ''; 
while(itemlist.firstChild) {
    itemlist.removeChild(itemlist.firstChild);
}
}




// addEventListener 
itemForm.addEventListener('submit',additem);
itemlist.addEventListener('click',removeItem);
clearBtn.addEventListener('click',clearItems)


