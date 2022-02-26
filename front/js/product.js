

// API REQUEST
const connection = fetch ('http://localhost:3000/api/products')

// 
connection.then(response =>{

    if(response.ok){
    return response.json();
    }

    else{
        console.log('Connexion to the API failed !')
    }
})


.then(myProduct =>{

// Targeting the actual query string
const search_Params = new URLSearchParams(window.location.search);

// Targeting HTML TAGS
const imgOfTheProduct = document.querySelector('.item__img > img')
const titleOfTheProduct = document.querySelector('.item__content__titlePrice > #title');
const priceOfTheProduct = document.querySelector('.item__content__titlePrice  p > #price');
const descriptionOfTheProduct = document.querySelector('.item__content__description__title +  #description');
const colorOfTheProduct = document.querySelector(".item__content__settings__color #colors");

// Targeting All Option of Select Tag
const colorOfTheProductOptions = document.querySelectorAll('.item__content__settings__color #colors option');

// Remove previous options of Select Tag
for (let i = 0; i < colorOfTheProductOptions.length; i++){
    colorOfTheProductOptions[i].remove();
}



// Loop through all products
for(const product of myProduct )
{
    // If the product id match with the paramater value then give the right informations associated with
    if(product._id === search_Params.get('id'))
    {
        imgOfTheProduct.src = product.imageUrl;
        titleOfTheProduct.innerHTML = product.name;
        priceOfTheProduct.innerHTML = product.price;
        descriptionOfTheProduct.innerHTML = product.description;
        
// As previous <option> were deleted we create new ones and insert each color on it
        product.colors.forEach(element =>
        {
            const newOptions = document.createElement('option');
            colorOfTheProduct.appendChild(newOptions);
            newOptions.innerHTML=element;
            newOptions.setAttribute('value',element);
        });
    }

}

})