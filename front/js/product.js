
/* *********CONNECTION*********** */

const connection = fetch ('http://localhost:3000/api/products')

// 
connection.then(response =>
{

    if(response.ok)
    {
     return response.json();
    }

    else
    {
        console.log('Connexion to the API failed !')
    }
})
/* ********END OF CONNECTION*********** */

.then(myProduct =>
{

    // Targeting the actual query string
    const search_Params = new URLSearchParams(window.location.search);

    // Targeting HTML TAGS
    const imgOfTheProduct = document.querySelector('.item__img > img')
    const titleOfTheProduct = document.querySelector('.item__content__titlePrice > #title')
    const priceOfTheProduct = document.querySelector('.item__content__titlePrice  p > #price')
    const descriptionOfTheProduct = document.querySelector('.item__content__description__title +  #description')
    const colorOfTheProduct = document.querySelector(".item__content__settings__color #colors")
    // Targeting All Option of Select Tag
    const colorOfTheProductOptions = document.querySelectorAll('.item__content__settings__color #colors option')

    // Remove previous options of Select Tag
    for (let i = 0; i < colorOfTheProductOptions.length; i++){
        colorOfTheProductOptions[i].remove();
    }


const displayOfTheProduct = function (getOneProduct){

    // Loop through all products
    for(const product of getOneProduct )
    {
         // If the product id match with the paramater value then give the right informations associated with
        if(product._id === search_Params.get('id'))
        {
            imgOfTheProduct.src = product.imageUrl
            titleOfTheProduct.innerHTML = product.name
            priceOfTheProduct.innerHTML = product.price
            descriptionOfTheProduct.innerHTML = product.description
            
            // As previous <option> were deleted we create new ones and insert each color on it
            product.colors.forEach(element =>
            {
                const newOptions = document.createElement('option')
                colorOfTheProduct.appendChild(newOptions)
                newOptions.innerHTML=element
                newOptions.setAttribute('value',element)
            });
        }
        
        
    }
}

displayOfTheProduct(myProduct)

// Targeting HTML TAGS

    const addToCart = document.querySelector('#addToCart');
    const quantity = document.querySelector('#quantity');
    
    addToCart.addEventListener('click',() =>
    {
        if (quantity.value > 0 && quantity.value <= 100)
        {

        
            let getMyProducts = localStorage.getItem('Produits')
            let products
            
            // As getMyProducts have no values on it return an empty array
            if(getMyProducts === null)
            {
                products = []
            }

            // Then parse all values that gonna be inside the array
            else
            {
                products = JSON.parse(getMyProducts)
            }
        

        // If the identifier and the color are the same
        const InCaseOfSameValues = products.find(element => element.id === search_Params.get('id') 
        && colorOfTheProduct[colorOfTheProduct.selectedIndex].text === element.colors)

      
        if(InCaseOfSameValues)
        {
            
            // Increment the quantity if the number of articles is lower than 100
            if(InCaseOfSameValues.quantity < 100)
            {
                alert('Votre article a bien été ajouté au panier !')
                   // Then update the quantity in the cart 
                InCaseOfSameValues.quantity++
                
            }

        else{
                alert("Le nombre d'articles a été atteint !")
            }
    }

        else
        {
            alert('Votre article a bien été ajouté au panier !')
        products.push({id:search_Params.get('id'),colors:colorOfTheProduct[colorOfTheProduct.selectedIndex].text,quantity:quantity.value})
        }
       
          
           
            localStorage.setItem('Produits',JSON.stringify(products))
            
            //  products = []
        } 
        else
        {
            alert("Veuillez saisir un nombre d'articles entre 1 et 100 !")
        }

    })
})