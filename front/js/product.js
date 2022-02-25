

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

// Loop through JSON file
for(const product of myProduct )
{
    // If the id match with the paramater then it give is associated informations
    if(product._id === search_Params.get('id')){
        let colors = JSON.stringify(product);
        console.log(colors);
        imgOfTheProduct.src = product.imageUrl;
        titleOfTheProduct.innerHTML = product.name;
        priceOfTheProduct.innerHTML = product.price;
        descriptionOfTheProduct.innerHTML = product.description;
        
        product.colors.forEach((element,index) => {
            
            console.log(element)
            colorOfTheProduct[index].innerHTML=element;
            colorOfTheProduct[index].setAttribute('value',element);
           console.log(index);
        });
    }

    
  
    

}

})