async function produtos (){
    const request = await fetch ('https://fakestoreapi.com/products');
    const result = await request.json();
    
    return result;
}


const promise = produtos();
promise.then(function(result) {
  console.log(result);
  const produtos = document.getElementById('produtos');
  produtos.innerHTML = "";

  const itemCategory = result[3].category;
  const itemImage = result[3].image;
  const itemTitle = result[3].title;
  const itemPrice = result[3].price;

  produtos.innerHTML += `
    <div id="produtos">
      <h1 class="title-page">${itemCategory}</h1>
      <div class="product-container">
        <div class="left-side-product">
          <div class="items">
            <div class="select-image-product">
              <img src="${itemImage}" alt="">
            </div>
            <div class="others-images-product">
              <div class="image-prod">
                <div class="box-prod"></div>
              </div>
              <div class="image-prod">
                <div class="box-prod"></div>
              </div>
              <div class="image-prod">
                <div class="box-prod"></div>
              </div>
              <div class="image-prod">
                <div class="box-prod"></div>
              </div>
              <div class="image-prod">
                <div class="box-prod"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-side-product">
          <div class="description-product">
            <h3 class="description-title">${itemTitle}</h3>
            <p class="description-subtitle">${itemPrice}</p>
          </div>
          <div class="color-product">
            <h4 class="description-color"> <strong>Fabric Color - </strong> Navy Blue</h4>
            <div class="select-colors">
              <input type="button" class="color-select1"></input>
              <input type="button" class="color-select2"></input>
              <input type="button" class="color-select3"></input>
              <input type="button" class="color-select4"></input>
              <input type="button" class="color-select5"></input>
              <input type="button" class="color-select6"></input>
            </div>
            <div class="costumize-product">
              <div class="costumize">
                <h4 class="costumize-title">Arm Style</h4>
                <div class="costumize-select">
                  <input type="button" value="C" />
                  <input type="button" value="C" />
                </div>
              </div>
              <div class="costumize">
                <h4 class="costumize-title">Flip Back Cushions</h4>
                <div class="costumize-select">
                  <input type="button" value="C" />
                  <input type="button" value="C" />
                </div>
              </div>
            </div>
            <div class="upgrades">
              <div class="upgrades-options">
                <h3 class="upgrades-title">Upgrades</h3>
                <label class="upgrade-option">
                  <input type="checkbox">
                  <span>Moveable chaise + $495</span>
                </label>
                <label class="upgrade-option">
                  <input type="checkbox">
                  <span>Ottoman + $345</span>
                </label>
                <label class="upgrade-option">
                  <input type="checkbox">
                  <span>Lumbar Pillows + $135</span>
                </label>
                <label class="upgrade-option">
                  <input type="checkbox">
                  <span>Sleep Kit + $295</span>
                </label>
              </div>
            </div>
            <button id="addCard" class="add__btn">ADD TO CARD</button>
          </div>
        </div>
      </div>
    </div>`;

    const botaoCarrinho = document.getElementById('addCard');
    botaoCarrinho.addEventListener("click",function(){
        const dadosPagamento = {
            userId: 123,
            date: getCurrentDate (),
            products:[
                {
                    productId: result[3].id,
                    quantity: 1,
                }
            ]
        };

        fetch('https://fakestoreapi.com/carts/7', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(dadosPagamento),
        })
        .then(reponse => reponse.json())
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        })

    });



  const produtosRelacionados = document.getElementById('produtosRelacionados');
  produtosRelacionados.innerHTML = "";

  let pontoZero = 0;
  for (let k = 0; k < result.length; k++) {
    const resultadoArray = result[k];
    if (resultadoArray.category === "men's clothing" && pontoZero < 3) {
      const produtosRelacionadosImg = resultadoArray.image;
      const produtosRelacionadosTitle = resultadoArray.title;
      const produtosRelacionadosPrice = resultadoArray.price;

      produtosRelacionados.innerHTML += `
        <div id="produtosRelacionados" class="row">
          <div class="card_products">
            <div class="col-lg-4">
              <a class="card_prod" href="#">
                <img src="${produtosRelacionadosImg}" alt="">
              </a>
              <h3>${produtosRelacionadosTitle}</h3>
              <p>${produtosRelacionadosPrice}</p>
            </div>
          </div>
        </div>
      `;

      pontoZero++;
    }
  }
});




