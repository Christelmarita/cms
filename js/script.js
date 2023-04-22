const apiBase = "https://cms.onibodesign.no";
const woocommerceBase = "/wp-json/wc/store";
const productBase = "/products";
const featuredBase = "/products?&featured=true";
const pagesBase = "/wp-json/wp/v2/pages";
const fullPagesURL = apiBase + pagesBase;
const fullProductURL = apiBase + woocommerceBase + productBase;
const fullFeaturedURL = "https://cms.onibodesign.no/wp-json/wc/store/products?featured=true";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://cms.onibodesign.no/wp-json/wc/store/products/${id}`;


// REGULAR PRODUCTS //

async function getProducts() {
    const response = await fetch(fullProductURL);
    const products = await response.json();
    return products;
}

async function getSingleProduct(id) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

function createProductHTML(product) {
    const container = document.querySelector(".featured");
    const productContainer = document.createElement("div");
    productContainer.classList.add("card");
    productContainer.id = product.id;

    for (let i = 0; i < product.images.length; i++) {;
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.classList.add("card-image");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img)
    }


    const title = document.createElement("p");
    title.innerText = product.name;
    title.classList.add("product_name");
    productContainer.append(title);

    const console = document.createElement("p");
    console.innerText = product.attributes[0].terms[0].name;
    console.classList.add("product_console");
    productContainer.append(console);

    const price = document.createElement("p");
    price.innerText = product.prices.price/100;
    price.classList.add("product_price");
    productContainer.append(price);

    const link = document.createElement("a");
    link.innerText = `Read more`;
    link.classList.add("product_link");
    link.href = `../products/details.html?id=${product.id}`;
    productContainer.append(link);

    const button = document.createElement(`button`);
    button.innerText = `Add to basket`;
    button.classList.add("add-to-basket");
    button.addEventListener('click', () => {
        alert('The product is successfully added to your basket!')
    })
    productContainer.append(button);

    container.append(productContainer);
}

function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

async function main() {
    const products = await getProducts();
    createProductsHTML(products);
}

main()

// FEATURED //

async function getFeaturedProducts() {
    const response = await fetch(fullFeaturedURL);
    const featuredProducts = await response.json()
    return featuredProducts;
}

async function getSingleFeatProduct(id) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}