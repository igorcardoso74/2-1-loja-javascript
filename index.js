setTimeout(function(){
    document.getElementById('loading').style.display = "none";
}, 3000);


async function categorias (){
    const request = await fetch("https://fakestoreapi.com/products/categories");
    const result = await request.json();

    return result;
}

const promise = categorias ();
promise.then(function(result){
    const navbar = document.getElementById("navbar");
    navbar.innerHTML="";
    const categoryTitle = document.getElementById("categoryTitle");
    categoryTitle.innerHTML="";


    for (let k = 0; k < result.length; k++){
        const title = result[k];
        navbar.innerHTML = `${navbar.innerHTML}<il> ${title} </il>`;
        categoryTitle.innerHtml = `${categoryTitle.innerHTML} ${title}`;
    }
})


const myForm = document.getElementById("newsletter");

myForm.addEventListener("submit", function (event){
    event.preventDefault();

    const dadosNewsletter = new FormData(event.target);

    const email = dadosNewsletter.get("emailField");
    console.log(email);
        });

data.innerHTML="";
let year = new Date().getFullYear();
const rightDate = document.getElementById("data");
rightDate.innerHTML = `<il> © ${year} Template</il>`;