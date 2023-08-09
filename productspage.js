async function produtos(){
    const request = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const result = await request.json();

    return result;
}

const promise = produtos ();
promise.then(function(result){
    const produtos = document.getElementById("produtos");
    produtos.innerHTML="";
    

    for (let k = 0;k < result.length; k++){

        const produtosTitle = result[k].title;
        const produtosImg = result[k].image;
        const produtosPrice = result[k].price;
        
     

        produtos.innerHTML += `
        <div class="card_products">
                <div class="col-lg-4">
                <a class="card_prod" href="http://localhost:3000/2-1-loja/detailproductpage.html">
                    <img src="${produtosImg}" alt="">
                    <img class="image-hover-on" src="assets/products/1/product-hover.webp" alt="">
                </a>
                <h3>${produtosTitle}</h3>
                <p>${produtosPrice}</p>
            </div>
        `
    }    
});

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchProducts = document.getElementById('produtos');

searchBtn.addEventListener('click', filterProducts);

function filterProducts() {
    const keyword = searchInput.value.toLowerCase();
    const filteredProducts = Array.from(document.querySelectorAll('.card_products'))
      .filter(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productDescription = product.querySelector('p').textContent.toLowerCase();
        return productName.includes(keyword) || productDescription.includes(keyword);
      });
  
    // Exibir apenas os produtos filtrados
    document.querySelectorAll('.card_products').forEach(product => {
      if (filteredProducts.includes(product)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }