// API REQUEST
const connection = fetch ('http://localhost:3000/api/products')

/* *********CONNECTION*********** */
connection.then((response) => {
    
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
    if(search_params.has('name') && search_params.has('price') && search_params.has('description') && search_params.has('img')){

        // This allow to recover the value of each paramaters
        const name = search_params.get('name');
        const price = search_params.get('price');
        const description = search_params.get('description');
        const img = search_params.get('img');
        const titleOfTheActualProduct = document.querySelector(".item__content__titlePrice > #title");
        const priceOfTheActualProduct = document.querySelector(" .item__content__titlePrice #price");
        const descriptionOfTheActualProduct = document.querySelector('.item__content__description #description');
        const imgOfTheActualProduct = document.querySelector(".item__img > img");

        // Insert of parameters value
        titleOfTheActualProduct.innerHTML=name;
        priceOfTheActualProduct.innerHTML =price;
        descriptionOfTheActualProduct.innerHTML = description;
        imgOfTheActualProduct.src=img;
    
    }

    else{
        console.log('Data recovery failed, please check the configuration of the condition');
    }




