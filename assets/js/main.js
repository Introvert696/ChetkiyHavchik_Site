'use strict';
//получаем теги для дальнейшей вставки
let itemItems = document.querySelector(".items");
let purchasesDiv = document.querySelector(".purchases");
let priceValue = document.getElementById("price");
let optionList = document.getElementById("purchases");
//массив со всеми предметами
let itemsArr;

//отправляем запрос на сервак, чтобы получить items
fetch('http://localhost/items')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    try {
      //пытаемся создать список для выбора
      createOptionList(data);
    } catch (error) {
      //console.log(error);
    }
    try {
      //Выводим предметы на главную страницу
      viewAllItems(data);
    } catch (error) {
      //обработка ошибок
    }

  });

//обработка нажатий по листу
optionList.addEventListener("click", (e) => {
  let selectedItemId = e.target.value;
  //console.log(itemsArr);
  itemsArr.forEach(el => {
    if (selectedItemId == el.Item_Id) {
      //console.log(el);
      priceValue.value = el.Item_Price;
    }
  });
});

//вывод все предметов для заказа на главной
function viewAllItems(data) {
  //console.log(itemItems);
  itemsArr = data;
  //document.body.appendChild(itemDiv);
  data.forEach(el => {
    //console.log(el);

    let itemDiv = document.createElement("div");

    itemDiv.innerHTML = `<div class='item shadow'><img src=${el['Item_Pict']} class='ctrobj'><div class='item-text'><p><span>${el['Item_Name']} </span></p><br><p>${el['Item_Desk']} </p></div><div class='price-text'><p>Цена: <span>${el['Item_Price']}  руб</span> </p></div></div>`;
    itemItems.appendChild(itemDiv);

  });

}
//создание списка выбора предметов
function createOptionList(data) {
  itemsArr = data;
  data.forEach(el => {
    let purchasesOption = document.createElement("option");
    purchasesOption.value = el['Item_Id'];
    purchasesOption.innerHTML = el['Item_Name'];
    //console.log(priceValue);
    purchasesDiv.appendChild(purchasesOption);
  });

}