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

    
    const firstLink = document.querySelector("#items > a");
    firstLink.remove();
    
    
   
        
    function ourData(data_json){

      
        for(let i = 0; i < data_json.length; i++)
        {
            
            // Targeting
            const targetingItems = document.getElementById('items');
            
            // Creating Elements
            
            const createImgProduct = document.createElement('img');
            const createTitleProduct = document.createElement('h3');
            const createParagraphProduct = document.createElement('p');
            const creatingALink = document.createElement('a');
            const createArticle = document.createElement('article');

            
            
            // Nesting elements
            targetingItems.appendChild(creatingALink);
            creatingALink.appendChild(createArticle);
            createArticle.appendChild(createImgProduct);
            createArticle.appendChild(createTitleProduct);
            createArticle.appendChild(createParagraphProduct);

            // Giving a classname to some elements created before
            createTitleProduct.className = "productName";
            createParagraphProduct.className = "productDescription";

            // Insert elements from api
            
            createImgProduct.src = `${data_json[i].imageUrl}`;
            createImgProduct.alt = `${data_json[i].altTxt}`;
            createTitleProduct.innerHTML = `${data_json[i].name}`;
            createParagraphProduct.innerHTML = `${data_json[i].description}`;
            creatingALink.href = "./product.html?id="+`${data_json[i]._id}`+"&"+"name="+
            `${data_json[i].name}`+"&"+
            "price="+`${data_json[i].price}`+"&"+"description="+
            `${data_json[i].description}`+"&"+
            "img="+`${data_json[i].imageUrl}`+"&"+"colors="+`${data_json[i].colors}`;
        }

    }

  
    ourData(jsonArray);
        
    })
    