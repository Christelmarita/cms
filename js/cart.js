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

function createCartProductHTML(product) {

    const container = document.querySelector(".product_page");
    const cartContainer = document.createElement("div");
    cartContainer.classList.add("product-image");
    cartContainer.id = product.id;


    for (let i = 0; i < product.images.length; i++) {;
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.classList.add("image-game");
        img.src = imgData.src;
        img.alt = imgData.alt;
        cartContainer.append(img)
    }

    const cartContainerTwo = document.createElement("div");
    cartContainerTwo.classList.add("product-info");

    const title = document.createElement("h2");
    title.innerText = product.name;
    cartContainerTwo.append(title);

    const console = document.createElement("p");
    console.innerText = product.attributes[0].terms[0].name;
    cartContainerTwo.append(console);

    const price = document.createElement("p");
    price.innerText = product.prices.price/100;
    cartContainerTwo.append(price);

    const qty = document.createElement("p");
    qty.innerText = `Qty: 1`;
    cartContainerTwo.append(qty);

    const subTotal = document.createElement("p");
    subTotal.innerText = `Subtotal:` + product.prices.price/100;
    subTotal.innerText = `Shipping: Free`;
    cartContainerTwo.append(subTotal);

    const total = document.createElement("h2");
    total.innerText = `Total:` + product.prices.price/100;
    cartContainerTwo.append(total);


    const linkButton = document.createElement("a");
    linkButton.innerText = `Continue to checkout`;
    linkButton.classList.add("secondary_cta_large", "checkout");
    linkButton.href = `checkout_one.html`;
    cartContainerTwo.append(linkButton);

    container.append(cartContainer, cartContainerTwo);
}

async function mainCart() {
    const products = await getSingleProduct();
    createCartProductHTML(products);
}

mainCart()