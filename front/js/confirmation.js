const displayOrderId = document.getElementById('orderId')
const search_params = new URLSearchParams(window.location.search)

if(search_params.has('orderId')){
    displayOrderId.innerHTML = search_params.get('orderId')
    localStorage.clear()
}
