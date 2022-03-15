const afficheLeNumeroDeCommande = document.getElementById('orderId')
const search_params = new URLSearchParams(window.location.search)

if(search_params.has('orderId')){
    afficheLeNumeroDeCommande.innerHTML = search_params.get('orderId')
}
