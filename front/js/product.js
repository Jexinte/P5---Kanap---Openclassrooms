

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


    const SEARCH_PARAMS = new URLSearchParams(window.location.search);


// In case of the paramaters exists 
    if(SEARCH_PARAMS.has('name') &&  SEARCH_PARAMS.has('price') && SEARCH_PARAMS.has('description')&& SEARCH_PARAMS.has('img') && SEARCH_PARAMS.has('colors'))
    {

        // This allow to recover the value of each paramaters
        const NAME = SEARCH_PARAMS.get('name');
        const PRICE = SEARCH_PARAMS.get('price');
        const DESCRIPTION = SEARCH_PARAMS.get('description');
        const IMG = SEARCH_PARAMS.get('img');

        
        // Targeting Items
        const TITLEOFTHEACTUALPRODUCT = document.querySelector(".item__content__titlePrice > #title");
        const PRICEOFTHEACTUALPRODUCT = document.querySelector(" .item__content__titlePrice #price");
        const DESCRIPTIONOFTHEACTUALPRODUCT = document.querySelector('.item__content__description #description');
        const IMGOFTHEACTUALPRODUCT = document.querySelector(".item__img > img");
        

        // Insert of parameters value in all targets selectors
        TITLEOFTHEACTUALPRODUCT.innerHTML=NAME;
        PRICEOFTHEACTUALPRODUCT.innerHTML =PRICE;
        DESCRIPTIONOFTHEACTUALPRODUCT.innerHTML = DESCRIPTION;
        IMGOFTHEACTUALPRODUCT.src=IMG;
    }

    else
    {
        console.log('Data recovery failed, please check the configuration of the condition');
    }

        // Targeting Items
    const COLOROFTHEACTUALPRODUCT = document.querySelector(".item__content__settings__color #colors");

    // Recover the parameter values in the query string
    const COLOR_OPTIONS = SEARCH_PARAMS.get('colors');
    // Split the parameter values in unique values
    let numberOfColors = COLOR_OPTIONS.split(',');

// Insert the right color according to the number of values present on the array
    switch(numberOfColors.length)
    {

        case 2:
            COLOROFTHEACTUALPRODUCT.children;

                        COLOROFTHEACTUALPRODUCT[0].innerHTML=numberOfColors[0];
                        COLOROFTHEACTUALPRODUCT[1].innerHTML=numberOfColors[1];

                        // Set the attribute value on each option
                        COLOROFTHEACTUALPRODUCT[0].setAttribute('value',numberOfColors[0]);
                        COLOROFTHEACTUALPRODUCT[1].setAttribute('value',numberOfColors[1]);

                    //   Deleted the element unuseful
                        COLOROFTHEACTUALPRODUCT[2].remove();

                        break;
        case 3:
            
            COLOROFTHEACTUALPRODUCT.children;

                        COLOROFTHEACTUALPRODUCT[0].innerHTML=numberOfColors[0];
                        COLOROFTHEACTUALPRODUCT[1].innerHTML=numberOfColors[1];
                        COLOROFTHEACTUALPRODUCT[2].innerHTML=numberOfColors[2];

                        // Set the attribute value on each option
                        COLOROFTHEACTUALPRODUCT[0].setAttribute('value',numberOfColors[0]);
                        COLOROFTHEACTUALPRODUCT[1].setAttribute('value',numberOfColors[1]);
                        COLOROFTHEACTUALPRODUCT[2].setAttribute('value',numberOfColors[2]);

                    break;
        case 4:
        
                        const NEWOPTION = document.createElement('option');
                        COLOROFTHEACTUALPRODUCT.appendChild(NEWOPTION);
                        COLOROFTHEACTUALPRODUCT.children;
                        
                        COLOROFTHEACTUALPRODUCT[0].innerHTML=numberOfColors[0];
                        COLOROFTHEACTUALPRODUCT[1].innerHTML=numberOfColors[1];
                        COLOROFTHEACTUALPRODUCT[2].innerHTML=numberOfColors[2];
                        COLOROFTHEACTUALPRODUCT[3].innerHTML=numberOfColors[3];
                    
                        // Set the attribute value on each option
                        COLOROFTHEACTUALPRODUCT[0].setAttribute('value',numberOfColors[0]);
                        COLOROFTHEACTUALPRODUCT[1].setAttribute('value',numberOfColors[1]);
                        COLOROFTHEACTUALPRODUCT[2].setAttribute('value',numberOfColors[2]);
                        COLOROFTHEACTUALPRODUCT[3].setAttribute('value',numberOfColors[3]);

                        break;
                        
        default:
                console.log('Data recovery failed, please check the configuration of the condition');
        }
    // End Insert the right color according to the number of values present on the array


/* *********LOCALSTORAGE*********** */

const TITLEOFTHEACTUALPRODUCT = SEARCH_PARAMS.get('name')
const TAGSELECT = document.querySelector('select');
const ADDTOCART = document.querySelector('#addToCart');
const QUANTITY = document.querySelector('#quantity');
const IMG = SEARCH_PARAMS.get('img');

ADDTOCART.addEventListener('click',()=>
{

    // ALLOW TO GET THE VALUE OF THE KEY
    let getMyProducts =localStorage.getItem('produits');
    
    let products;
    // NO VALUES ON 'produits" KEY ADD AN EMPTY ARRAY TO products
    
    if(getMyProducts === null)
    {
        products = [];
    }

    else
    {
          products = JSON.parse(getMyProducts);  
    }




     let testOfValue = products.find(element => element.id === SEARCH_PARAMS.get('id') && TAGSELECT[TAGSELECT.selectedIndex].text === element.colors );
   
     // CHECK IF VALUE ALREADY EXIST THEN JUST UPDATE THE QUANTITY 
     if(testOfValue)
     {
        testOfValue.quantity++;
     }

     // THE TOTALS OF PRODUCTS IS LIMITED TO 20 ABOVE IT PRODUCTS ARE DELETED
     else if (products.length > 20)
     {
        delete products;
     }

     // AS THE PRODUCT HAVE A DIFFERENT ID AND DIFFERENT COLOR ADD IT TO THE CART
     else
     {
        alert("Vos articles ont été ajoutés dans le panier !")
        products.push({title:TITLEOFTHEACTUALPRODUCT,id:SEARCH_PARAMS.get('id'),colors:TAGSELECT[TAGSELECT.selectedIndex].text,quantity:QUANTITY.value,img:IMG});
     }
    
     localStorage.setItem('produits',JSON.stringify(products));

})

/* ********* END OF LOCALSTORAGE *********** */


