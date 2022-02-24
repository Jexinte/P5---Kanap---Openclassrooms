


    // API REQUEST
    const CONNECTION = fetch ('http://localhost:3000/api/products')

    /* *********CONNECTION*********** */
    .then((response) =>
    {

        if(response.ok)
        {
            return response.json();
        }

        else
        {
            console.log('connection failed');
        }

    })

    /* ********END OF CONNECTION*********** */



    const section = document.querySelector('#cart__items');
    const imgOfTheProduct = document.querySelector('.cart__item__img > img');
    const nameOfTheProduct = document.querySelector('.cart__item__content__description > h2')
    const priceOfTheProduct = document.querySelector('.cart__item__content__description  p + p');
    const colorsOfTheProduct = document.querySelector('.cart__item__content__description  p');
    const conversion = JSON.parse(localStorage.getItem('produits'));
    section.children[0].remove();

  
   
    

   
for (const i of conversion)
{
      
 
      /****************** CREATING ELEMENTS **************************/

            // CONVERT PRICE
            const parse_Price = parseInt(i.quantity);

            const modeleOfArticle = document.createElement('article');
            modeleOfArticle.className = "cart__item";
            const modeleOfCartImg  = document.createElement('div');

            // CART_ITEM_IMG
            const modeleOfCartImgTAG  = document.createElement('img');
            
            modeleOfCartImg.appendChild(modeleOfCartImgTAG);
            // END OF CART ITEM IMG

            // CART CONTENT

            const modeleOfCartContent = document.createElement('div');
            modeleOfCartContent.className = "cart__item__content";
            
            const modeleOfCartContentDescription = document.createElement('div');
            modeleOfCartContentDescription.className ="cart__item__content__description";

            const modeleOfCartContentDescriptionH2 = document.createElement('h2');
            modeleOfCartContentDescription.appendChild(modeleOfCartContentDescriptionH2);

            const modeleOfCartContentDescriptionFirstParagraph = document.createElement('p');
            modeleOfCartContentDescription.appendChild(modeleOfCartContentDescriptionFirstParagraph);

            const modeleOfCartContentDescriptionSecondParagraph = document.createElement('p');
            modeleOfCartContentDescriptionFirstParagraph.appendChild(modeleOfCartContentDescriptionSecondParagraph);

            // END OF CART CONTENT

            // CART SETTINGS

            const modeleOfSettings = document.createElement('div');
            modeleOfSettings.className="cart__item__content__settings";
      

            const modeleOfSettingsQuantity = document.createElement('div');
            modeleOfSettingsQuantity.className="cart__item__content__settings__quantity";
      

            const modeleOfSettingsParagraph = document.createElement('p');
            

            const modeleOfSettingsInput = document.createElement('input');
            //END OF CART SETTINGS

            // CART DELETE
            const modeleOfCartDelete = document.createElement('div');
            modeleOfCartDelete.className = "cart__item__content__settings__delete";
            const modeleOfCartDeleteParagraph = document.createElement('p');
            modeleOfCartDeleteParagraph.className = "deleteItem";

         /****************** END OF CREATING ELEMENTS **************************/
      
            
            
           
         /****************** INSERTION OF ELEMENTS **************************/   
            // MODELE  ARTICLE TAG

            section.appendChild(modeleOfArticle);
            modeleOfArticle.setAttribute('data-id',i.id)
            modeleOfArticle.setAttribute('data-color',i.colors);
            // END OF  MODELE  ARTICLE TAG

            
            // CART IMG

            modeleOfArticle.appendChild(modeleOfCartImg);
            modeleOfCartImgTAG.src=i.img;
            modeleOfCartImg.className = "cart__item__img";

            // END OF CART IMG
            
            // CART CONTENT

            modeleOfArticle.appendChild(modeleOfCartContent);
            modeleOfCartContent.appendChild(modeleOfCartContentDescription);
            modeleOfCartContentDescription.appendChild(modeleOfCartContentDescriptionH2);
            modeleOfCartContentDescriptionH2.innerHTML=i.title;
            modeleOfCartContentDescription.appendChild(modeleOfCartContentDescriptionFirstParagraph);
            modeleOfCartContentDescriptionFirstParagraph.innerHTML = i.colors;
            modeleOfCartContentDescription.appendChild(modeleOfCartContentDescriptionSecondParagraph);
            modeleOfCartContentDescriptionSecondParagraph.innerHTML = parse_Price + " €";
            modeleOfCartContent.appendChild(modeleOfSettings);

            // END OF CART CONTENT

            // SETTINGS

            modeleOfSettings.appendChild(modeleOfSettingsQuantity);
            modeleOfSettingsQuantity.appendChild(modeleOfSettingsParagraph);
            modeleOfSettingsParagraph.innerHTML = "Qté : "
            modeleOfSettingsQuantity.appendChild(modeleOfSettingsInput);
            modeleOfSettingsInput.className="itemQuantity";
            modeleOfSettingsInput.setAttribute('name','itemQuantity');
            modeleOfSettingsInput.setAttribute('type','number')
            modeleOfSettingsInput.setAttribute('min',"1");
            modeleOfSettingsInput.setAttribute('max',"100");
            modeleOfSettingsInput.setAttribute('value',"0");

            // END OF SETTINGS

            // CART DELETE

            modeleOfSettings.appendChild(modeleOfCartDelete);
            modeleOfCartDelete.appendChild(modeleOfCartDeleteParagraph);
            modeleOfCartDeleteParagraph.innerHTML = "Supprimer";

            // END OF CART DELETE

            /****************** END INSERTION OF ELEMENTS **************************/ 
  
}
