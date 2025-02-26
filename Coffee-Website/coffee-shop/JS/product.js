const products = [
  {
      name: "Golden Crisp Wafers",
      description: "Espresso/Moka - 84.5pts",
      price: "$10.99",
      image: "image/products/Ziva-AlabamaJack-2.jpg"
  },
  {
      name: "Ruby Delight Truffles",
      description: "Espresso/Moka - 84.5pts",
      price: "$12.90",
      image: "image/products/Ziva-Cioccolatini-16.jpg"
  },
  {
      name: "Gourmet Artisan Pralines",
      description: "Espresso/Moka - 84.5pts",
      price: "$14.50",
      image: "image/products/Ziva-Cioccolatini-2.jpg"
  },
  {
      name: "Dark Cocoa Nut Bar",
      description: "Espresso/Moka - 84.5pts",
      price: "$8.99",
      image: "image/products/Ziva-CioccolatoNoci.jpg"
  },
  {
      name: "Cinnamon Crunch Cookies",
      description: "Espresso/Moka - 84.5pts",
      price: "$6.99",
      image: "image/products/Ziva-Cioccosalt-2.jpg"
  }
];

// Ürünleri HTML'e ekleyelim
document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.querySelector(".featured-collection-slider-products");

  if (!productContainer) {
      console.error("Hata: .featured-collection-slider-products bulunamadı!");
      return;
  }

  products.forEach(product => {
      const productHTML = `
          <div class="featured-collection-slider-product-active">
              <a href="#" class="product-link">
                  <div class="product-item__inner">
                      <div class="product-item__media">
                          <img src="${product.image}" alt="${product.name}">
                          <span class="btn--quickview">Quick View</span>
                      </div>
                      <div class="product-item__meta">
                          <h3>${product.name}</h3>
                          <p>${product.description}</p>
                          <span>${product.price}</span>
                      </div>
                  </div>
              </a>
          </div>
      `;

      productContainer.innerHTML += productHTML;
  });
});
