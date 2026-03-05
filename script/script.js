console.log("connect");
// load all button

// category_name: "Fruit Tree";
// id: 1;
// small_description: "Trees that bear edible fruits like mango, guava, and jackfruit.";

const loadAllButtons = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayAllButtons(data.categories);
    });
};
// allCards in btn
const loadAllCards = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayCard(data.plants);
    });
};

//load cards
const loadCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayCard(data.plants);
    });
};

//<-------------------display card------------------------------------->>>>>
// category: "Ornamental Plant";
// description: "An elegant indoor palm that purifies air and adds tropical charm. Low maintenance and perfect for home interiors.";
// id: 20;
// image: "https://i.ibb.co.com/Y79mHSng/areca-palm-min.jpg";
// name: "Areca Palm";
// price: 600;
const displayCard = (plants) => {
  console.log(plants);
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  plants.forEach((plant) => {
    console.log(plant);
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = ` <div class="card bg-base-100 w-60 shadow-sm">
              <figure>
                <img class="rounded-xl w-30 h-30"
                  src="${plant.image}"
                  alt="Trees"
                />
              </figure>
              <div class="card-body">
               <h2 class="card-title">
                ${plant.name}
                <div class="badge text-sm bg-green-700 text-white">$${plant.price}</div>
              </h2>
                <p>
                  ${plant.description}
                </p>
                <div class="card-actions justify-center">
                  <div class="rounded-xl badge badge-outline">${plant.category}</div>
                </div>
                <div class="flex gap-4">
                  <div class="btn-outline rounded-xl">$$</div>
                  <div class="btn btn-outline rounded-xl">Products</div>
                </div>
              </div>
            </div>`;

    cardContainer.appendChild(cardDiv);
  });
};
const displayAllButtons = (buttons) => {
  const allBtn = document.getElementById("allBtn");
  console.log(allBtn);
  const AllCategoryBtn = document.createElement("div");
  AllCategoryBtn.innerHTML = `<button onclick=loadAllCards() class="btn btn-xs w-10 h-5 md:w-50 md:h-10 text-[7px] md:text-[15px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">All Trees</button>`;
  allBtn.appendChild(AllCategoryBtn);

  buttons.forEach((btn) => {
    // console.log(btn);
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("my-2");
    btnDiv.innerHTML = `<button onclick=loadCard(${btn.id}) class="btn btn-xs w-10 h-5 md:w-50 md:h-10 text-[7px] md:text-[15px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">${btn.category_name}</button>`;

    allBtn.appendChild(btnDiv);
  });
};

loadAllButtons();
