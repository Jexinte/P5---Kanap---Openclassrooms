// Connection to the Api
fetch ('http://localhost:3000/api/products')



// Check if the connection is ok

.then((res) => {
    
    if(res.ok){
        return res.json();
    }

    else{
        console.log('Erreur 404');
    }
    
})

.then((myValue) => {
    const nameOfTheProduct = document.querySelector('.productName');
    const descriptionOfTheProduct = document.querySelector('.productDescription');
    
    const imgOfTheProduct = document.querySelector('#items a > article > img');
    
    nameOfTheProduct.textContent = `${myValue[0].name}`;
    descriptionOfTheProduct.textContent = `${myValue[0].description}`;
    imgOfTheProduct.src = `${myValue[0].imageUrl}`;
    imgOfTheProduct.alt = `${myValue[0].altTxt}`;
     
})

.then((myTest) => {
        const targetingItems = document.getElementById('items');
        let creatingALink = document.createElement('a');
        let createArticle = document.createElement('article');
        const createTitleProduct = document.createElement('h3');

        createTitleProduct.className = "productName";
        creatingALink.href = "./product.html?id=43";

        targetingItems.appendChild(creatingALink);
        creatingALink.appendChild(createArticle);
        createArticle.appendChild(createTitleProduct);


        if (myTest) {

            createTitleProduct.textContent = `${myTest[1].name}`;
        }

        else {
            console.log(typeof myTest);
        }

    });