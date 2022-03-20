
/* *********CONNECTION TO THE API*********** */
const connection = fetch ('http://localhost:3000/api/products')


connection.then(response => {
    
    if(response.ok){
        return response.json();
    }

    else{
        console.log('Connection failed');
    }
    
})

/* ********END OF CONNECTION*********** */

.then((products)=>{

    
    const baseStructureOfProduct = document.querySelector("#items > a");
    baseStructureOfProduct.remove();
    
    // Built to create new element
    const getProducts = function (allProducts){

        
        // Loop to get all json elements
            for(const data of allProducts )
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
                
                createImgProduct.src = `${data.imageUrl}`;
                createImgProduct.alt = `${data.altTxt}`;
                createTitleProduct.innerHTML = `${data.name}`;
                createParagraphProduct.innerHTML = `${data.description}`;
                
                // This is made to recover a single product for each link on product page
                creatingALink.href = `./product.html?id=${data._id}`;
                
            }
        }
        
        getProducts(products)
            
        })
        
        