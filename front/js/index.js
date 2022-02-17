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

.then((jsonArray)=>{

    // Remove the first link replaced later
    const firstLink = document.querySelector("#items > a");
    firstLink.remove();
    
    
   
    // Built for create new element
    function ourData(data_json)
    {

        // Loop to get all json elements
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

                // Insert of all products on homepage
                
                createImgProduct.src = `${data_json[i].imageUrl}`;
                createImgProduct.alt = `${data_json[i].altTxt}`;
                createTitleProduct.innerHTML = `${data_json[i].name}`;
                createParagraphProduct.innerHTML = `${data_json[i].description}`;

                // This is made to recover a single product for each link on product page
                creatingALink.href = "./product.html?id="+`${data_json[i]._id}`+"&"+"name="+
                `${data_json[i].name}`+"&"+
                "price="+`${data_json[i].price}`+"&"+"description="+
                `${data_json[i].description}`+"&"+
                "img="+`${data_json[i].imageUrl}`+"&"+
                "colors="+`${data_json[i].colors}`;
                
            
            }

    }

  
    ourData(jsonArray);
        
    })
    