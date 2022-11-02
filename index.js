const menuItem = document.getElementsByClassName('menu-item')
const checkbox = document.getElementById('my-checkbox')
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', ()=>{
        checkbox.checked = false
    })
    
}