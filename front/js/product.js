// API REQUEST
const connection = fetch ('http://localhost:3000/api/products')


connection.then(response =>{

    if(response.ok){
    return response.json();
    }

    else{
        console.log('Connexion to the API failed')
    }
})


// Targeting the actual query string
const SEARCH_PARAMS = new URLSearchParams(window.location.search);






