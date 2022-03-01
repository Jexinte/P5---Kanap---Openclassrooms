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

      const cart__Item = document.querySelector('.cart__item');
      
      // Main Structure of Each 
      const cart__Items = document.querySelector('#cart__items');

      //
      cart__Item.remove();

      /* ******** INSERTOFPRODUCTS *********** */
      function InsertOfProducts()
      {
      
      conversion.forEach(storageData =>
      {
            // Convert quantity value on localstorage to integer
            const parse_Quantity = parseInt(storageData.quantity);
            
            myProducts.forEach(ApiData =>
            {
                  if(storageData.id === ApiData._id)
                  {
                        const parse_Price = parseInt(ApiData.price);
                        
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
                              cart__Item__Img_Tag.src=`${ApiData.imageUrl}`;
                              cart__Item__Img_Tag.setAttribute('alt',`${ApiData.altTxt}`);

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
                              cart__Item__Content__Description_Title_Structure.innerHTML=`${ApiData.name}`;

                        const cart__Item__Content_Description_First_Paragraph_Structure = document.createElement('p');
                              cart__Item__Content_Description_Structure.appendChild(cart__Item__Content_Description_First_Paragraph_Structure);
                              cart__Item__Content_Description_First_Paragraph_Structure.innerHTML = `${storageData.colors}`;

                        const cart__Item__Content_Description_Second_Paragraph_Structure = document.createElement('p');
                              cart__Item__Content_Description_Structure.appendChild(cart__Item__Content_Description_Second_Paragraph_Structure);
                              cart__Item__Content_Description_Second_Paragraph_Structure.innerHTML = `${parse_Price} €`;

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
            });
      });
      }

      InsertOfProducts();
      /* ********END OF INSERTOFPRODUCTS *********** */

     
      // Add up the quantity of each product store in the localStorage
      function calculateOfTotalQuantityOfAllProducts()
      {

      const quantityOfAllProducts = localStorage.getItem('Produits');
      const quantity = JSON.parse(quantityOfAllProducts);
      const totalQuantity = document.querySelector('#totalQuantity');

            let total = 0;

            for (const i of quantity)
            {
                  // Convert string to data 
                  let quantityParse = parseInt(i.quantity);
                  // Save total amount
                  total += quantityParse;
                  totalQuantity.innerHTML =total;
            }
      }
      calculateOfTotalQuantityOfAllProducts();
            
      // Add up the price of each product 
      function calculateOfTotalPriceOfAllProducts()
      {
            const price = document.querySelectorAll('.cart__item__content__description > p + p');
            const totalPrice = document.querySelector('#totalPrice');
            const quantityOfEachProduct = document.querySelector('.itemQuantity');
            
            let total = 0;
            for (const i of price)
            {
                  const priceOfEachProduct = parseInt(i.textContent);
                  // Save total amount
                  total += priceOfEachProduct * quantityOfEachProduct.value;
                  totalPrice.innerHTML = total;
            }
      }
      calculateOfTotalPriceOfAllProducts()


})



