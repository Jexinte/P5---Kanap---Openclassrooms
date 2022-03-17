/* *********CONNECTION*********** */
const connection = fetch ('http://localhost:3000/api/products')

connection.then((response) => {

if(response.ok){
return response.json();
}

else{
console.log('Connection failed');
}

})

/* ********END OF CONNECTION*********** */

.then(myProducts =>
{


// Targeting 'Produits' to get values
const myCart = localStorage.getItem('Produits');

const localStorageCart = JSON.parse(myCart);

// Main Structure of Each 
const cart__Item = document.querySelector('.cart__item');


const cart__Items = document.querySelector('#cart__items');

// Delete the first article structure 
cart__Item.remove();


/* ******** DISPLAYOFPRODUCTS *********** */

// Each products add on product page is display on this function 
const getOfProductsInLocalStorage =  function getOfProductsInLocalStorage()
{
      localStorageCart.forEach(storageData =>
      {
     
      // Compare the id of each cart product with the id store in API DATA
      const idMatches = myProducts.find(api => storageData.id === api._id);


// ID MATCH CREATE STRUCTURE OF EACH PRODUCT AND INSERT THEM WITH INFORMATIONS ASSOCIATED WITH
            if(idMatches)
            {
                  // ARTICLE PART
                  const articleStructure = document.createElement('article');
                        articleStructure.className = "cart__item";
                        articleStructure.setAttribute('data-id',`${storageData.id}`);
                        articleStructure.setAttribute('data-color',`${storageData.colors}`);
                        cart__Items.appendChild(articleStructure);
                  // END OF ARTICLE PART

                  //  IMG PART
                  const cart__Item__Img_Main_Structure = document.createElement('div');
                        cart__Item__Img_Main_Structure.className = "cart__item__img";
                        articleStructure.appendChild(cart__Item__Img_Main_Structure);
                  // END OF IMG PART

                  const cart__Item__Img_Tag = document.createElement('img');
                        cart__Item__Img_Main_Structure.appendChild(cart__Item__Img_Tag);
                        cart__Item__Img_Tag.src=`${idMatches.imageUrl}`;
                        cart__Item__Img_Tag.setAttribute('alt',`${idMatches.altTxt}`);

                  // CONTENT PART
                  const cart__Item__Content_Structure = document.createElement('div');
                        cart__Item__Content_Structure.className = "cart__item__content";
                        articleStructure.appendChild(cart__Item__Content_Structure);
                  // END OF CONTENT PART

                  //  DESCRIPTION PART 
                  const cart__Item__Content_Description_Structure = document.createElement('div');
                        cart__Item__Content_Description_Structure.className = "cart__item__content__description";
                        cart__Item__Content_Structure.appendChild(cart__Item__Content_Description_Structure);

                  const cart__Item__Content__Description_Title_Structure = document.createElement('h2');
                        cart__Item__Content_Description_Structure.appendChild(cart__Item__Content__Description_Title_Structure);
                        cart__Item__Content__Description_Title_Structure.innerHTML=`${idMatches.name}`;

                  const cart__Item__Content_Description_First_Paragraph_Structure = document.createElement('p');
                        cart__Item__Content_Description_Structure.appendChild(cart__Item__Content_Description_First_Paragraph_Structure);
                        cart__Item__Content_Description_First_Paragraph_Structure.innerHTML = `${storageData.colors}`;

                  const cart__Item__Content_Description_Second_Paragraph_Structure = document.createElement('p');
                        cart__Item__Content_Description_Structure.appendChild(cart__Item__Content_Description_Second_Paragraph_Structure);
                        cart__Item__Content_Description_Second_Paragraph_Structure.innerHTML = `${idMatches.price} €`;
                  // END OF DESCRIPTION PART

                  // SETTINGS
                  const cart__Item_Content_Settings = document.createElement('div');
                        cart__Item_Content_Settings.className = "cart__item__content__settings";
                        cart__Item__Content_Structure.appendChild(cart__Item_Content_Settings);
                  // END OF SETTINGS

                  // SETTINGS QUANTITY
                  const cart__Item_Content_Settings_Quantity = document.createElement('div');
                        cart__Item_Content_Settings_Quantity.className = "cart__item__content__settings__quantity";
                        cart__Item_Content_Settings.appendChild(cart__Item_Content_Settings_Quantity);

                  const cart__Item_Content_Settings_Quantity_Paragraph = document.createElement('p');
                        cart__Item_Content_Settings_Quantity.appendChild(cart__Item_Content_Settings_Quantity_Paragraph);
                        cart__Item_Content_Settings_Quantity_Paragraph.innerHTML = "Qté : ";

                  const cart__Item_Content_Settings_Quantity_Input = document.createElement('input')
                        cart__Item_Content_Settings_Quantity_Input.className = "itemQuantity"
                        cart__Item_Content_Settings_Quantity_Input.setAttribute('type','number')
                        cart__Item_Content_Settings_Quantity_Input.setAttribute('name','itemQuantity')
                        cart__Item_Content_Settings_Quantity_Input.setAttribute('min',1)
                        cart__Item_Content_Settings_Quantity_Input.setAttribute('max',100)
                        cart__Item_Content_Settings_Quantity_Input.setAttribute('value',`${storageData.quantity}`)
                        cart__Item_Content_Settings_Quantity.appendChild(cart__Item_Content_Settings_Quantity_Input)
                  // END OF SETTINGS QUANTITY

                  // DELETE BUTTON
                  const cart__Item__Content_Settings_Delete = document.createElement('div')
                        cart__Item__Content_Settings_Delete.className = "cart__item__content__settings__delete"
                        cart__Item_Content_Settings.appendChild(cart__Item__Content_Settings_Delete)

                  const delete_Item = document.createElement('p');
                        delete_Item.className = "deleteItem"
                        cart__Item__Content_Settings_Delete.appendChild(delete_Item)
                        delete_Item.innerHTML = "Supprimer"
                  // END OF DELETE BUTTON

            }
});

}

getOfProductsInLocalStorage();

/* ********END OF DISPLAYOFPRODUCTS *********** */



/* ******** CALCULATEOFTOTALQUANTITYOFALLPRODUCTS *********** */


// Add up the quantity of each product and update the localStorage
const calculateOfTotalQuantityAndPriceOfAllTheProducts =  function ()
{

      const allProducts = localStorage.getItem('Produits')
      const productsJson = JSON.parse(allProducts)
      const totalQuantity = document.querySelector('#totalQuantity');
      const totalPrice = document.querySelector('#totalPrice');
      let totalQuantityOfProducts = 0
      let totalPriceOfProducts = 0


      for (const product of productsJson)
      {
            const idMatches = myProducts.find(api => product.id === api._id);
            
            // Convert string quantity to integer 
            let quantityOfLocalStorage = parseInt(product.quantity);
            let priceOfLocalStorage = parseInt(idMatches.price * product.quantity) 
            // Add total amount
            totalQuantityOfProducts += quantityOfLocalStorage
            totalPriceOfProducts += priceOfLocalStorage
      }

      // When the calculation is over display it
      totalQuantity.innerHTML = totalQuantityOfProducts
      totalPrice.innerHTML = totalPriceOfProducts
      }

calculateOfTotalQuantityAndPriceOfAllTheProducts()   

/* ******** END OF CALCULATEOFTOTALQUANTITYOFALLPRODUCTS *********** */     


/* ******** CALCULATEOFTOTALPRICEOFALLPRODUCTS *********** */

const getChangeItemsQuantity = function ()
{
      let cart__item = document.querySelectorAll('.cart__item');
      let change = {};
      let inputQuantity = document.querySelectorAll('.itemQuantity')
      inputQuantity.forEach((element,index) =>
      {
            
           
           

            element.addEventListener("change",(itemQuantity) => 
            {
                  let article = element.closest('article');
           
                  change.id = article.dataset.id;
                  change.value = itemQuantity.target.value;
                  // console.log(change)
                  updatePriceQuantityCart(change);    
            }) 
          
      })
      // return change;
}
getChangeItemsQuantity()

// Add up the price of each product 
const calculateOfTotalPriceOfAllProducts  = function () 
{
      const price = document.querySelectorAll('.cart__item__content__description > p + p')
      const totalPrice = document.querySelector('#totalPrice')
     

      let totalPriceOfAllProducts = 0
      quantityOfTheProduct.forEach((element =>{

            for (const priceDisplayOnCartPage of price)
            {
                  // Convert it to integer 
                  let priceOfEachProduct = parseInt(priceDisplayOnCartPage.textContent)
                  
                  // Save total amount
                  totalPriceOfAllProducts += priceOfEachProduct * element.value
                  console.log(totalPriceOfAllProducts)
            }
      }))

      // When the calculation is over display it
      totalPrice.innerHTML = totalPriceOfAllProducts
}
// calculateOfTotalPriceOfAllProducts()

/* ******** END OF CALCULATEOFTOTALPRICEOFALLPRODUCTS *********** */


/* ******** UPDATE QUANTITY *********** */

/* This function detect if a quantity is changed if yes then it pop up an alert saying that the change made is done and refresh the cart page to update the total */
const updatePriceQuantityCart = function(change) 
{

      // let inputQuantity = document.querySelectorAll('.itemQuantity')
       let localStorageProducts = localStorage.getItem('Produits')
       let getStorageProducts = JSON.parse(localStorageProducts)
      // let change = getChangeItemsQuantity();
       console.log(change)
      getStorageProducts.find(element => element.id === change.id ).quantity = change.value;
      localStorage.setItem('Produits',JSON.stringify(getStorageProducts))
     calculateOfTotalQuantityAndPriceOfAllTheProducts()  
      
      // for (let i = 0; i < inputQuantity.length; i++)
      // {

      // // Link to the right article
      // let myActualQuantity = inputQuantity[i].closest('article')
    

      // myActualQuantity.addEventListener("change",() =>
      // {
      // // Loop throught localStorage 
      // getStorageProducts.forEach(products =>
      // {
      //            let arr = []
      //            arr.push(products)
                
      //       let IdAndColorsInLocalStorageMatchesWithDataset = arr.find(el => el.id === myActualQuantity.dataset.id && el.colors === myActualQuantity.dataset.color && inputQuantity[i].value >=1 && inputQuantity[i].value <= 100)

      //       let quantityIsTooHigh = arr.find(el => el.id === myActualQuantity.dataset.id && el.colors === myActualQuantity.dataset.color && inputQuantity[i].value > 100)
      //       // Matches 
      //       if(IdAndColorsInLocalStorageMatchesWithDataset)
      //       {                              
      //             products.quantity = inputQuantity[i].value;
                 
      //             // alert('La quantité du produit a bien été augmenté !')
      //              window.location.href="cart.html"
      //       }
      //       else if(quantityIsTooHigh)
      //       {
      //       alert('Veuillez saisir une quantité entre 1 et 100')
      //       } 

           
      //       localStorage.setItem('Produits',JSON.stringify(getStorageProducts))

      // })
      // //   END OF THE SECOND LOOP

      // })

      // }
} 
 


// /* ******** END OF UPDATE QUANTITY *********** */


// /* ******** DELETE PRODUCTS *********** */


// When we click on a button , it recover the index in localstorage of the targeted element and delete it
const deleteProduct = function ()
{

      let deleteButton = document.querySelectorAll('.deleteItem')

      let localStorageProducts2 = localStorage.getItem('Produits')
      // Loop to get all buttons
      for (let i = 0; i < deleteButton.length; i++)
      {
            // More clear for the syntax
            let buttons = deleteButton[i]

            // Link each button to his article
            let myActualProduct = deleteButton[i].closest('article')
            let getStorageProducts2 = JSON.parse(localStorageProducts2) 

            buttons.addEventListener("click",() =>
            {    
                  const index = getStorageProducts2.findIndex(object =>{
                  return object.id === myActualProduct.dataset.id && object.colors === myActualProduct.dataset.color
            })

            if(index > -1)
            {
             getStorageProducts2.splice(index,1);  
            }

                  alert('Le produit sélectionné a bien été supprimé !') 
                  myActualProduct.remove()
                  window.location.href ="cart.html"
                  localStorage.setItem('Produits',JSON.stringify(getStorageProducts2))      
            })
      }
}

deleteProduct()
// /* ******** END OF DELETE PRODUCTS *********** */




})


/******** LOOKING FOR ID *********/

const search_params = new URLSearchParams(window.location.search)
const localStorageCart= localStorage.getItem('Produits')
const parsed = JSON.parse(localStorageCart)
const testedValue = parsed.find(el => el.id)
const productsFindId = testedValue.id

const productId = []
productId.push(productsFindId)

/******** END OF LOOKING FOR ID *********/


/******** CONDITIONS REQUESTED BY THE BACK-END ********/
let contact = 
{ 
      contact:
      {
      firstName: search_params.get('firstName'),
      lastName: search_params.get('lastName'),
      address:search_params.get('address'),
      city:search_params.get('city'),
      email:search_params.get('email')
      },

      products : productId
}

/******** END OF CONDITIONS REQUESTED BY THE BACK-END ********/

/******** SEND POST REQUEST TO BACK-END ************/
const requetePostVersLapi = fetch("http://localhost:3000/api/products/order",
{
      method : 'POST',
      body:JSON.stringify(contact),
      headers :{'Content-Type': 'application/json'},
})
/******** POST REQUEST TO BACK-END ************/


/********RECOVER POST REQUEST ORDER ID *************/
requetePostVersLapi.then(async(res)=>
{     
      let numeroDeCommande = await res.json()
      // If the request is accepted and the form send then redirect to confirmation.html
      if(res.status == 201)
      {
      window.location.href=`confirmation.html?orderId=${numeroDeCommande.orderId}`
      }
})
/********END OF RECOVER ORDER ID *************/

/**************FORM ************/
const myForm = document.querySelector('.cart__order__form');

// When  all input are checked , the form is send
myForm.addEventListener('submit',(e)=>
{

const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const addressInput = document.getElementById('address')
const cityInput = document.getElementById('city')
const emailInput = document.getElementById('email')


let RegexName =  new RegExp(/^[a-zA-z-\s]+$/)
let RegexCity =  new RegExp(/^[a-zA-z-\s]+$/)
let RegexAdress = new RegExp(/^[0-9]{1,3}[a-zA-z-\s]+$/)
let RegexEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)


      const checkFirstName = function ()
      {
            const firstNameErrorMsg = document.getElementById('firstNameErrorMsg')

            if(RegexName.test(firstNameInput.value) === false)
            {
                  firstNameErrorMsg.innerHTML = "Veuillez uniquement saisir des lettres, les chiffres et symboles ne sont pas acceptés"
                  e.preventDefault()
            }

            else if (RegexName.test(firstNameInput.value) === true)
            {
                  firstNameErrorMsg.innerHTML = " ";
            }
      }



      const checkLastName = function()
      {
            const lastNameErrorMsg = document.getElementById('lastNameErrorMsg')

            if(RegexName.test(lastNameInput.value) === false)
            {
                  lastNameErrorMsg.innerHTML = "Veuillez uniquement saisir des lettres, les chiffres et les symboles ne sont pas acceptés"
                  e.preventDefault()
            }

            else if (RegexName.test(lastNameInput.value) === true)
            {
                  lastNameErrorMsg.innerHTML = " ";
            }

      }



      const checkAddress = function ()
      {
            const addressErrorMsg = document.getElementById('addressErrorMsg')

            if(RegexAdress.test(addressInput.value) === false)
            {
                  e.preventDefault()
                  addressErrorMsg.innerHTML = "Veuillez saisir une adresse de cette manière, exemple : <br> 23 Avenue des Olympiades"

            }

            else if(RegexAdress.test(addressInput.value) === true)
            {
                  addressErrorMsg.innerHTML = "";
            }
      }



      const checkCity = function () 
      {
            const cityErrorMsg= document.getElementById('cityErrorMsg')

            if(RegexCity.test(cityInput.value) === false)
            {
                  cityErrorMsg.innerHTML = "Veuillez saisir un nom de ville correcte"
                  e.preventDefault()
            }

            else if(RegexCity.test(cityInput.value) === true)
            {
                  cityErrorMsg.innerHTML = "";
            }


      }



      const checkEmail = function () 
      {
            const emailErrorMsg= document.getElementById('emailErrorMsg')

            if(RegexEmail.test(emailInput.value) === false)
            {
                  emailErrorMsg.innerHTML = "Veuillez saisir une adresse mail correcte"
                  e.preventDefault()
            }

            else if(RegexCity.test(emailInput.value) === true)
            {
                  emailErrorMsg.innerHTML = "";
            }

      }




      checkFirstName()
      checkLastName()
      checkAddress()
      checkCity()  
      checkEmail()  

}) 
/**************FORM ************/


