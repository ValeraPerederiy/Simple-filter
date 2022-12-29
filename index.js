let arrOfItems = ['Яблоко','Груша','Апельсин','Мандарин','Банан','Киви','Фейхоа','Ананас']

let list = document.getElementById('list');
let input = document.getElementById('search');

arrOfItems.forEach(e=>{
    let item = document.createElement("li");
    item.innerText = e;
    list.appendChild(item);
})

input.oninput = ()=>{
    let listOFLi = document.querySelectorAll('li')
    listOFLi.forEach( e=>{
        if(e.innerText.toLowerCase().search(input.value.toLowerCase()) == -1){
            e.classList.add('hide');
        }else{
            e.classList.remove('hide');
        } 
        console.log(e)
    } )
}
