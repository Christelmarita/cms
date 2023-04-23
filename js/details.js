const apiBase = "https://cms.onibodesign.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";
const featuredBase = "/products?&featured=true";
const pagesBase = "/wp-json/wp/v2/pages";
const fullPagesURL = apiBase + pagesBase;
const fullProductURL = apiBase + woocommerceBase + productBase;
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://cms.onibodesign.no/wp-json/wc/store/products/${id}`;


async function getSingleProduct(id) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

function createProductHTML(product) {
    const container = document.querySelector(".product_page");
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-image");
    productContainer.id = product.id;

    for (let i = 0; i < product.images.length; i++) {;
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.classList.add("image-game");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
    }

    const productContainerTwo = document.createElement("div");
    productContainerTwo.classList.add("product-info");

    const title = document.createElement("h1");
    title.innerText = product.name;
    title.classList.add("product_name_big");
    productContainerTwo.append(title);

    const console = document.createElement("p");
    console.innerText = product.attributes[0].terms[0].name;
    console.classList.add("product_console");
    productContainerTwo.append(console);

    const price = document.createElement("p");
    price.innerText = product.prices.price/100;
    price.classList.add("product_price_big");
    productContainerTwo.append(price);

    const description = document.createElement("p");
    description.innerText = product.description.replace('<p>', '').replace('</p>', '');
    description.classList.add("product_description");
    productContainerTwo.append(description);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("product_button");

    const button = document.createElement(`button`);
    button.innerText = `Add to basket`;
    button.classList.add("add-to-basket", "cta_large");
    button.addEventListener('click', () => {
        alert('The product is successfully added to your basket!')
    })
    buttonContainer.append(button);

    const linkButton = document.createElement("a");
    linkButton.innerText = `Buy it now`;
    linkButton.classList.add("secondary_cta_large", "detail_cta");
    linkButton.href = `../cart.html?id=${product.id}`;
    buttonContainer.append(linkButton);

    productContainerTwo.append(buttonContainer);

    container.append(productContainer, productContainerTwo);
}

async function mainDetail() {
    const products = await getSingleProduct();
    createProductHTML(products);
}

mainDetail()