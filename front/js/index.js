// API REQUEST
const connection = fetch ('http://localhost:3000/api/products')

/* *********CONNEXION*********** */
connection.then((response) => {
    
    if(response.ok){
        return response.json();
    }

    else{
        console.log('Connection failed');
    }
    
})

/* ********FIN DE CONNEXION*********** */

.then((jsonArray)=>{

 
    // // Targeting
    //     const imgOfTheProduct = document.querySelector('#items a > article > img');
    //     const nameOfTheProduct = document.querySelector('.productName');
    //     const descriptionOfTheProduct = document.querySelector('.productDescription')
    //     const targetingItems = document.getElementById('items');
    // // Creating Elements
        
    //     const createImgProduct = document.createElement('img');
    //     const createTitleProduct = document.createElement('h3');
    //     const creatingALink = document.createElement('a');
    //     const createArticle = document.createElement('article');
        
    function ourData(data_json){

        for(let i = 1; i < data_json.length; i++){
            
            // Targeting
            const imgOfTheProduct = document.querySelector('#items a > article > img');
            // const nameOfTheProduct = document.querySelector('.productName');
            // const descriptionOfTheProduct = document.querySelector('.productDescription')
            const targetingItems = document.getElementById('items');
            
            // Creating Elements
            
            const createImgProduct = document.createElement('img');
            const createTitleProduct = document.createElement('h3');
            const createParagraphProduct = document.createElement('p');
            const creatingALink = document.createElement('a');
            const createArticle = document.createElement('article');
            
            // Nesting
            targetingItems.appendChild(creatingALink);
            creatingALink.appendChild(createArticle);
            createArticle.appendChild(createImgProduct);
            createArticle.appendChild(createTitleProduct);
            createArticle.appendChild(createParagraphProduct);
            createTitleProduct.className = "productName";
            createParagraphProduct.className = "productDescription";
            imgOfTheProduct.src = `${data_json[i].imageUrl}`;
            imgOfTheProduct.alt = `${data_json[i].altTxt}`;
            createTitleProduct.innerHTML = `${data_json[i].name}`;
            createParagraphProduct.innerHTML = `${data_json[i].description}`;
            creatingALink.href = "./product.html?id=${data_json[i]._id}";
            
            
            
        }
        
        
        
    }
        
    ourData(jsonArray);
        
    })
    