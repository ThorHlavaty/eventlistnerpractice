function buttonClicked(){
    console.log("Button pressed! 😘")
}

let x = 0
function addItem(){
    const input = document.getElementById("userSelction")
    const list = document.getElementById("shoppingList")
    if (input.value === ""){
        return
    }
    let htmlString = list.innerHTML
    x ++
    const id = `item-${x}`
    htmlString += `<li id="${id}">
        ${input.value}  <button onclick="remover('${id}')" class= "removal">remove me</button>
            </li>`
    list.innerHTML = htmlString
    input.value = ""

}

function remover(id){
    document.getElementById(id).remove()
}