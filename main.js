async function showUsers() {
  const response = await fetch(
    "https://course-api.com/javascript-store-products"
  );
  const results = await response.json();
  let str = "";
  results.map((product) => {
    str += `
    <div class="card">
    <div class="card-img">
      <img src="${product.fields.image[0].url}" alt="" height="200" width="350">
    </div>
    <div class="card-text">        
          <p class="p1" >${product.fields.name}</p>
    </div>
  </div>
    `;
  });

  parentCard.innerHTML = str;
}
let parentCard = document.querySelector(".cards");
showUsers();
