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

      const conversion = JSON.parse(myCart);

       // Main Structure of Each 
      const cart__Item = document.querySelector('.cart__item');
      
     
      const cart__Items = document.querySelector('#cart__items');

      // Delete the first article structure 
      cart__Item.remove();

/* ******** INSERTOFPRODUCTS *********** */
 const insertOfProducts =  function insertOfProducts()
{
      
      conversion.forEach(storageData =>
      {
            // Convert quantity value on localstorage to integer
            const parse_Quantity = parseInt(storageData.quantity);
            
           // Store API DATA
           let jsonData = myProducts;
      
           // Compare the id of each cart product with the id store in API DATA
          const inCaseOfSameData = jsonData.find(element => storageData.id === element._id);
         
            
                  // ID MATCH CREATE STRUCTURE OF EACH PRODUCT AND INSERT THEM WITH INFORMATIONS ASSOCIATED WITH
                  if(inCaseOfSameData)
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
                              cart__Item__Img_Tag.src=`${inCaseOfSameData.imageUrl}`;
                              cart__Item__Img_Tag.setAttribute('alt',`${inCaseOfSameData.altTxt}`);

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
                              cart__Item__Content__Description_Title_Structure.innerHTML=`${inCaseOfSameData.name}`;

                        const cart__Item__Content_Description_First_Paragraph_Structure = document.createElement('p');
                              cart__Item__Content_Description_Structure.appendChild(cart__Item__Content_Description_First_Paragraph_Structure);
                              cart__Item__Content_Description_First_Paragraph_Structure.innerHTML = `${storageData.colors}`;

                        const cart__Item__Content_Description_Second_Paragraph_Structure = document.createElement('p');
                              cart__Item__Content_Description_Structure.appendChild(cart__Item__Content_Description_Second_Paragraph_Structure);
                              cart__Item__Content_Description_Second_Paragraph_Structure.innerHTML = `${inCaseOfSameData.price} €`;

                        // END OF DELETE BUTTON

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

                        const cart__Item_Content_Settings_Quantity_Input = document.createElement('input');
                              cart__Item_Content_Settings_Quantity_Input.className = "itemQuantity";
                              cart__Item_Content_Settings_Quantity_Input.setAttribute('type','number');
                              cart__Item_Content_Settings_Quantity_Input.setAttribute('name','itemQuantity');
                              cart__Item_Content_Settings_Quantity_Input.setAttribute('min',1);
                              cart__Item_Content_Settings_Quantity_Input.setAttribute('max',100);
                              cart__Item_Content_Settings_Quantity_Input.setAttribute('value',`${parse_Quantity}`);
                              cart__Item_Content_Settings_Quantity.appendChild(cart__Item_Content_Settings_Quantity_Input);

                        // END OF SETTINGS QUANTITY

                        // DELETE BUTTON

                        const cart__Item__Content_Settings_Delete = document.createElement('div');
                              cart__Item__Content_Settings_Delete.className = "cart__item__content__settings__delete";
                              cart__Item_Content_Settings.appendChild(cart__Item__Content_Settings_Delete);

                        const delete_Item = document.createElement('p');
                              delete_Item.className = "deleteItem";
                              cart__Item__Content_Settings_Delete.appendChild(delete_Item);
                              delete_Item.innerHTML = "Supprimer";

                        // END OF DELETE BUTTON
                       
                  }

                  else {
                        console.log('Le panier est vide');
                  }
                  
      });

}
insertOfProducts();

/* ********END OF INSERTOFPRODUCTS *********** */



/* ******** CALCULATEOFTOTALQUANTITYOFALLPRODUCTS *********** */



let totalQuantityOfProducts = 0;
// Add up the quantity of each product and update the localStorage
const calculateOfTotalQuantityOfAllProducts =  function ()
{

            const quantityOfAllProducts = localStorage.getItem('Produits');
            const quantity = JSON.parse(quantityOfAllProducts);
            const totalQuantity = document.querySelector('#totalQuantity');

                

                  for (const totalQuantityLocalStorage of quantity)
                  {
                        // Convert string quantity to integer 
                        let quantityOfLocalStorage = parseInt(totalQuantityLocalStorage.quantity);
                        // Add total amount
                        totalQuantityOfProducts += quantityOfLocalStorage;
                        
                  }
                  // When the calculation is over display it
                  totalQuantity.innerHTML = totalQuantityOfProducts;
      }
 
     
      calculateOfTotalQuantityOfAllProducts()   
/* ******** END OF CALCULATEOFTOTALQUANTITYOFALLPRODUCTS *********** */     




/* ******** CALCULATEOFTOTALPRICEOFALLPRODUCTS *********** */
let total2 = 0;

      // Add up the price of each product 
      const calculateOfTotalPriceOfAllProducts  = function () 
      {
            const price = document.querySelectorAll('.cart__item__content__description > p + p');
            const totalPrice = document.querySelector('#totalPrice');
            
            
            
          
            for (const priceDisplayOnCartPage of price)
            {
                 
                   // Convert it to integer 
                  let priceOfEachProduct = parseInt(priceDisplayOnCartPage.textContent);
                  
                  // Save total amount
                  total2 = priceOfEachProduct * totalQuantityOfProducts;
                  
                 
            }
            
            // When the calculation is over display it
            totalPrice.innerHTML = total2;
      }
      calculateOfTotalPriceOfAllProducts();

/* ******** END OF CALCULATEOFTOTALPRICEOFALLPRODUCTS *********** */


/* ******** UPDATE QUANTITY *********** */

/* This function detect if a quantity is changed if yes then it pop up an alert saying that the change made is done and refresh the cart page to update the total */
const updateQuantity = function() {

      let inputQuantity = document.querySelectorAll('.itemQuantity');
      let localStorageProducts = localStorage.getItem('Produits');


      for (let i = 0; i < inputQuantity.length; i++)
      {

            // Link to the right article
            let myActualQuantity = inputQuantity[i].closest('article');
            let getStorageProducts = JSON.parse(localStorageProducts);
      
            myActualQuantity.addEventListener("change",() =>
            {
                        // Loop throught localStorage 
                        getStorageProducts.forEach(products =>
                        {
                              
                                    // Matches 
                              if(products.id === myActualQuantity.dataset.id && products.colors === myActualQuantity.dataset.color && inputQuantity[i].value >=1 && inputQuantity[i].value <= 100)
                              {                              
                                    products.quantity = inputQuantity[i].value;
                                    alert('La quantité du produit a bien été augmenté !');
                                    window.location.href="cart.html";  
                                    
                              

                              }
                              else if(products.id === myActualQuantity.dataset.id && products.colors === myActualQuantity.dataset.color && inputQuantity[i].value > 100){
                              alert('Veuillez saisir une quantité entre 1 et 100');
                              } 

                             
                              localStorage.setItem('Produits',JSON.stringify(getStorageProducts));
                              
                        })
                        //   END OF THE SECOND LOOP
                  
            })
            
            }
} 
updateQuantity()     


// /* ******** END OF UPDATE QUANTITY *********** */


// /* ******** DELETE PRODUCTS *********** */

const deleteProduct = function ()
{

      let deleteButton = document.querySelectorAll('.deleteItem');

      let localStorageProducts2 = localStorage.getItem('Produits')
      // Loop to get all buttons
      for (let i = 0; i < deleteButton.length; i++)
      {
            // More clear for the syntax
            let buttons = deleteButton[i];

            // Link each button to his article
            let myActualProduct = deleteButton[i].closest('article');
            let getStorageProducts2 = JSON.parse(localStorageProducts2);   
        
           
            
            buttons.addEventListener("click",() =>
            {    
                  // Lorsqu'on clique sur le bouton supprimer, il récupère la position de l'index de l'élément ciblé et le supprime
                  const index = getStorageProducts2.findIndex(object =>{
                        return object.id === myActualProduct.dataset.id && object.colors === myActualProduct.dataset.color
                  })
                   
                  if(index > -1)
                  {
                        getStorageProducts2.splice(index,1);  
                  }

                        alert('Le produit sélectionné a bien été supprimé !') 
                        myActualProduct.remove();
                        window.location.href ="cart.html";  
                        localStorage.setItem('Produits',JSON.stringify(getStorageProducts2));           
            })
      }
}

deleteProduct()
// /* ******** END OF DELETE PRODUCTS *********** */




})



const myForm = document.querySelector('.cart__order__form');


const search_params = new URLSearchParams(window.location.search)
const localStorageCart= localStorage.getItem('Produits')
const parsed = JSON.parse(localStorageCart)
const testedValue = parsed.find(el => el.id)
const productsFindId = testedValue.id
const productId = []
productId.push(productsFindId)

  let contact = 
  { 
      contact:{
             firstName: search_params.get('firstName'),
             lastName: search_params.get('lastName'),
             address:search_params.get('address'),
             city:search_params.get('city'),
             email:search_params.get('email')
      },
     
      products : productId
  }


const requetePostVersLapi = fetch("http://localhost:3000/api/products/order",{
      // La méthode POST sert à envoyer des données vers l'API
      method : 'POST',
      body:JSON.stringify(contact),

      headers : {
            'Content-Type': 'application/json'
      },
})




      requetePostVersLapi.then(async(res)=>{

            const numeroDeCommande = await res.json()
             window.location.href=`confirmation.html?numeroDeCommande=${numeroDeCommande.orderId}`
      
           
      })




// Quand le formulaire est envoyé...
myForm.addEventListener('submit',(e)=>
{

      // const produitDansLeLocalStorageParse = JSON.parse(produitDansLeLocalStorage)
 
      const firstNameInput = document.getElementById('firstName')
      const lastNameInput = document.getElementById('lastName')
      const addressInput = document.getElementById('address')
   
      const cityInput = document.getElementById('city')
      const emailInput = document.getElementById('email')
      
      // const submitButton = document.getElementById('order')
   
      let RegexName =  new RegExp(/^[a-zA-z-\s]+$/)
      let RegexCity =  new RegExp(/^[a-zA-z-\s]+$/)
      let RegexAdress = new RegExp(/^[a-zA-z-\s]+$/)
      let RegexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

      
         // Permet de récupérer par la suite les informations qui sont en paramètre quand le formulaire est envoyé gra^ce à .get()
        
              

      const checkFirstName = function ()
      {
          const firstNameErrorMsg = document.getElementById('firstNameErrorMsg')

            if(RegexName.test(firstNameInput.value) === false)
            {
                  firstNameErrorMsg.innerHTML = "Veuillez uniquement saisir des lettres"
                   e.preventDefault()
            }

            else if (RegexName.test(firstNameInput.value) === true){
                  firstNameErrorMsg.innerHTML = " ";
            }
      }
  


      const checkLastName = function()
      {
            const lastNameErrorMsg = document.getElementById('lastNameErrorMsg')

           if(RegexName.test(lastNameInput.value) === false)
           {
            lastNameErrorMsg.innerHTML = "Veuillez uniquement saisir des lettres"
            e.preventDefault()

           }

           else if (RegexName.test(lastNameInput.value) === true){
                 lastNameErrorMsg.innerHTML = " ";
           }

      }
      


      const checkAddress = function ()
      {
            const addressErrorMsg = document.getElementById('addressErrorMsg')

            if(RegexAdress.test(addressInput.value) === false)
            {
                  addressErrorMsg.innerHTML = "L'adresse saisi est incorrecte"
                  e.preventDefault()
            }

            else if(RegexAdress.test(addressInput.value) === true){
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

            else if(RegexCity.test(cityInput.value) === true){
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

            else if(RegexCity.test(emailInput.value) === true){
                  emailErrorMsg.innerHTML = "";
            }
    
      }

      checkFirstName()
      checkLastName()
      checkAddress()
      checkCity()  
      checkEmail()  

      
      
}) 



// /**END OF FORMULAIRE */


