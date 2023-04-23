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
const featuredURL = `https://cms.onibodesign.no/products/${id}?&featured=true`;

export {
    apiBase,
    woocommerceBase,
    productBase,
    featuredBase,
    pagesBase,
    fullPagesURL,
    fullProductURL,
    fullFeaturedURL,
    queryString,
    params,
    id,
    url,
    featuredURL
}