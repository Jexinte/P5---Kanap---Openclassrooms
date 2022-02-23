// API REQUEST
const CONNECTION = fetch ('http://localhost:3000/api/products')

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

.then((jsonObject)=>{

    // Remove the first link replaced later
    const FIRSTLINK = document.querySelector("#items > a");
    FIRSTLINK.remove();
    
    
   
    // Built to create new element
    function ourData(data_json)
    {

        // Loop to get all json elements
            for(const DATA of data_json)
            {
                
                // Targeting
                const TARGETINGITEMS = document.getElementById('items');
                
                // Creating Elements
                
                const CREATEIMGPRODUCT = document.createElement('img');
                const CREATETITLEPRODUCT = document.createElement('h3');
                const CREATEPARAGRAPHPRODUCT = document.createElement('p');
                const CREATINGALINK = document.createElement('a');
                const CREATEARTICLE = document.createElement('article');

                
                
                // Nesting elements
                TARGETINGITEMS.appendChild(CREATINGALINK);
                CREATINGALINK.appendChild(CREATEARTICLE);
                CREATEARTICLE.appendChild(CREATEIMGPRODUCT);
                CREATEARTICLE.appendChild(CREATETITLEPRODUCT);
                CREATEARTICLE.appendChild(CREATEPARAGRAPHPRODUCT);

                // Giving a classname to some elements created before
                CREATETITLEPRODUCT.className = "productName";
                CREATEPARAGRAPHPRODUCT.className = "productDescription";

                // Insert of all products on homepage
                
                CREATEIMGPRODUCT.src = `${DATA.imageUrl}`;
                CREATEIMGPRODUCT.alt = `${DATA.altTxt}`;
                CREATETITLEPRODUCT.innerHTML = `${DATA.name}`;
                CREATEPARAGRAPHPRODUCT.innerHTML = `${DATA.description}`;

                // This is made to recover a single product for each link on product page
                CREATINGALINK.href = "./product.html?id="+`${DATA._id}`+"&"+"name="+
                `${DATA.name}`+"&"+
                "price="+`${DATA.price}`+"&"+"description="+
                `${DATA.description}`+"&"+
                "img="+`${DATA.imageUrl}`+"&"+
                "colors="+`${DATA.colors}`;
                
            }
    }

  
    ourData(jsonObject);
        
    })
    