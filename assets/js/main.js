'use strict';
let itemItems = document.querySelector(".items");
let purchasesDiv = document.querySelector(".purchases");


fetch('http://vh522015.eurodir.ru/items')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      try {
        createOptionList(data);      
      } catch (error) {
          console.log(error);
      }
      try {
        viewAllItems(data);
      } catch (error) {
          
      }
    
  });

function viewAllItems(data){
   console.log(itemItems);
    
    //document.body.appendChild(itemDiv);
    data.forEach(el => {
        console.log(el);
        
        let itemDiv = document.createElement("div");

        itemDiv.innerHTML = `<div class='item shadow'><img src=${el['Item_Pict']} class='ctrobj'><div class='item-text'><p><span>${el['Item_Name']} </span></p><br><p>${el['Item_Desk']} </p></div><div class='price-text'><p>Цена: <span>${el['Item_Price']}  руб</span> </p></div></div>`;
        itemItems.appendChild(itemDiv);

       


    });
    
}
function createOptionList(data){
    data.forEach(el => {
        let purchasesOption = document.createElement("option");
        purchasesOption.value = el['Item_Id'];
        purchasesOption.innerHTML = el['Item_Name'];
        
        purchasesDiv.appendChild(purchasesOption);


    });

}