
var div1 = document.querySelectorAll(".card-title");
var div2 = document.querySelector("#cart");
var div3 = document.querySelector(".price_show");
var btn1 = document.querySelector("#btn_price");
var button = document.querySelector(".btn");
var totalPrice = 0;

div1.forEach(function (item) {
    item.onclick = function() {
        
      
           
        
        totalPrice+= +(item.getAttribute("price"))
            div2.innerHTML +=item.textContent+" , " 
            div3.innerHTML="Total Price= " +totalPrice + " $"

   
    }

     
});








           
