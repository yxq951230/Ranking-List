function fun1(target){
    var cls = document.getElementsByClassName("tab_head_item")
    for (let i = 0; i < cls.length; i++) {
        cls[i].className = 'tab_head_item'
    }
    target.className = 'tab_head_item active'
}
function init(){
    document.getElementsByClassName("tab_head_item")[0].classList.add('active')
}