const farmToCupData = [
  {
    image: "image/coffee-farmToCup/coffee-sack.jpg",
    title: "Cultivating Quality",
    description: "We begin with scrupulously selected coffee beans, grown by environmentally-conscious local communities."
  },
  {
    image: "image/coffee-farmToCup/coffeebean-modified.jpg",
    title: "Mastering the Roast",
    description: "We carefully roast our beans in our local roastery, revealing their distinct flavor and delicate aroma."
  },
  {
    image: "image/coffee-farmToCup/brooke-cagle-9fHMo1-5Io8-unsplash-modified.jpg",
    title: "Packaging with Purpose",
    description: "We meticulously wrap our coffee in sustainable and compostable materials, ensuring freshness and quality."
  },
  {
    image: "image/coffee-farmToCup/coffee-shop.jpg",
    title: "Fostering Transparency",
    description: "Creating a bridge of transparency, social responsibility, and shared appreciation for the journey."
  },
  {
    image: "image/coffee-farmToCup/coffee-black&white.jpg",
    title: "Handcrafted for Perfection",
    description: "Every cup we serve is thoughtfully crafted, offering an unmatched coffee experience."
  },
  {
    image: "image/coffee-farmToCup/coffeeMap.jpg",
    title: "Brewing the Perfect Cup",
    description: "From precise grinding to expert brewing techniques, we ensure every cup delivers an exceptional coffee experience with rich flavors and aromas."
  }
];

// Kartların eklenmesini sağlayan fonksiyon
const contentSlider = document.querySelector('.content-slider'); // Sadece burada tanımlanıyor

farmToCupData.forEach(item => {
  const contentBox = document.createElement('div');
  contentBox.classList.add('content-box');

  let paragraphClass = "";
  if (item.title === "Mastering the Roast") {
    paragraphClass = "thin-text";
  }

  contentBox.innerHTML = `
    <div class="image-wrapper">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <h3>${item.title}</h3>
    <p class="${paragraphClass}">${item.description}</p>
  `;

  contentSlider.appendChild(contentBox);
});

// 🎯 Burada sadece var olan contentSlider'ı kullanıyoruz, tekrar tanımlamıyoruz!
if (contentSlider) {
  contentSlider.addEventListener("mouseenter", () => {
    contentSlider.style.animationPlayState = "paused";
  });

  contentSlider.addEventListener("mouseleave", () => {
    contentSlider.style.animationPlayState = "running";
  });
} else {
  console.warn("Element '.content-slider' bulunamadı!");
}
