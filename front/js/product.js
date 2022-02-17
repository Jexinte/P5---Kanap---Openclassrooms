// API REQUEST
const connection = fetch ('http://localhost:3000/api/products')

/* *********CONNECTION*********** */
.then((response) => {
    
    if(response.ok){
        return response.json();
    }
    
    else{
        console.log('Connection failed');
    }
    
})

/* ********END OF CONNECTION*********** */


    const search_params = new URLSearchParams(window.location.search);
    
    
    // In case of the paramaters exists 
    if(
    search_params.has('name') && 
    search_params.has('price')&& 
    search_params.has('description')&&
    search_params.has('img') && search_params.has('colors'))
    {

        // This allow to recover the value of each paramaters
        const name = search_params.get('name');
        const price = search_params.get('price');
        const description = search_params.get('description');
        const img = search_params.get('img');

        
        // Targeting Items
        const titleOfTheActualProduct = document.querySelector(".item__content__titlePrice > #title");
        const priceOfTheActualProduct = document.querySelector(" .item__content__titlePrice #price");
        const descriptionOfTheActualProduct = document.querySelector('.item__content__description #description');
        const imgOfTheActualProduct = document.querySelector(".item__img > img");
        
    
        // Insert of parameters value in all targets selectors
        titleOfTheActualProduct.innerHTML=name;
        priceOfTheActualProduct.innerHTML =price;
        descriptionOfTheActualProduct.innerHTML = description;
        imgOfTheActualProduct.src=img;
    }

    else
    {
        console.log('Data recovery failed, please check the configuration of the condition');
    }

     // Targeting Items
    const colorOfTheActualProduct = document.querySelector(".item__content__settings__color #colors");

    // Recover the parameter values in the query string
    const color_options = search_params.get('colors');
    // Split the parameter values in unique values
    let numberOfColors = color_options.split(',');
    
    // Insert the right color according to the number of values present on the array
    switch(numberOfColors.length)
    {

        case 2:
            colorOfTheActualProduct.children;
                      colorOfTheActualProduct[0].innerHTML=numberOfColors[0];
                      colorOfTheActualProduct[1].innerHTML=numberOfColors[1];
                    //   Deleted the element unuseful
                      colorOfTheActualProduct[2].remove();
                      break;
        case 3:
            
           colorOfTheActualProduct.children;
                       colorOfTheActualProduct[0].innerHTML=numberOfColors[0];
                       colorOfTheActualProduct[1].innerHTML=numberOfColors[1];
                       colorOfTheActualProduct[2].innerHTML=numberOfColors[2];
                    break;
        case 4:
       
                      const newOption = document.createElement('option');
                      colorOfTheActualProduct.appendChild(newOption)
                      colorOfTheActualProduct.children;
                      colorOfTheActualProduct[0].innerHTML=numberOfColors[0];
                      colorOfTheActualProduct[1].innerHTML=numberOfColors[1];
                      colorOfTheActualProduct[2].innerHTML=numberOfColors[2];
                      colorOfTheActualProduct[3].innerHTML=numberOfColors[3];
                      break;
                      
        default:
             console.log('Data recovery failed, please check the configuration of the condition');
      }