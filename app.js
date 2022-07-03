addEventListener('DOMContentLoaded',() => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

document.querySelectorAll(".gallery__item img").forEach(el=>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
})
})

document.querySelectorAll(".gallery__item").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.classList.remove("active");
        console.log("click");
})
})