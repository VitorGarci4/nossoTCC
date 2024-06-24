const remuvButton = document.getElementsByClassName("fas fa-times")
console.log(remuvButton)
for (var i = 0 ;i < remuvButton.length; i++){
    remuvButton[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.remove()
    })
}

let totalAmount = 0 
const cartsExist = document.getElementsByClassName("content")
for (var i = 0; i < cartsExist.length; i++){
    // console.log(cartsExist[i])
    const productprice = cartsExist[i].getElementsByClassName("price")[0].ineerText.replace("$", "")
    const quantidaDeProduto = cartsExist[i].getElementsByClassName("quantidade")[0]
    const valorTotal = document.getElementsByClassName("total")[0]
        
    totalAmount += productprice * quantidaDeProduto
}
