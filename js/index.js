// dynamic categories button create
const lodeCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  displayCategories(data.categories);
};

const loadingShowSearch2 = () => {
  document.getElementById("loading").classList.add("hidden");
};

const loadCategoryImg = async (id) => {
  // document.getElementById("loading").classList.remove("hidden");
  // const contaner = document.getElementById("contaner");
  // contaner.classList.add("hidden");

  // setTimeout(function () {
  //   loadingShowSearch2();
  // }, 2000);

  document.getElementById("loading").classList.remove("hidden");
  setTimeout(function () {
    loadingShowSearch2();
  }, 2000);
  const contaner1 = document.getElementById("contaner");
  contaner1.innerHTML = "";

  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${id}`
  );
  const data = await res.json();
  // categoriesContaner.classList.remove("hidden");

  {
    removeActivebtn();
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add("active");
    loadAllImg(data.data);
  }
};

const removeActivebtn = () => {
  const buttons = document.getElementsByClassName("category-btn");
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};
// Creat displaycategories
const displayCategories = (data) => {
  const categoriesContaner = document.getElementById("categories-contaner");
  data.forEach((item) => {
    //  btn create

    const divContaner = document.createElement("div");
    divContaner.innerHTML = `
    
          
              <div id="btn-${item.category}"
                class="box-content h-10 w-full md:w-72 p-3 border-2 rounded-3xl flex justify-center text-center category-btn"
              >
                <div"
                  class="object-cover flex justify-center text-center font-Inter text-2xl font-extrabold gap-2"
                >
                  <img class="w-full h-full" src=${item.category_icon} alt="" />
                  <button onclick="loadCategoryImg('${item.category}')">${item.category}</button>
                 
                </div>
              </div>
            
            
    `;

    // add btn
    categoriesContaner.appendChild(divContaner);
  });
};
lodeCategories();

// loading search
const loadingShowSearch = async () => {
  document.getElementById("loading").classList.remove("hidden");
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await res.json();
  document.getElementById("loading").classList.add("hidden");
  loadAllImg(data.pets);
};

// all img show
const loadAllImg = (imges) => {
  const contaner = document.getElementById("contaner");
  contaner.innerHTML = "";
  if (imges.length === 0) {
    contaner.innerHTML = `
    <div class="bg-[#13131308] grid col-span-3 p-10 ">
    <div class="mx-auto">
     <img src="../images/error.webp"/>
     <h2 class="text-xl font-extrabold">No Information Available</h2>
    </div>
   
    </div>
    `;
  }

  const lodeDetails = (imgId) => {
    console.log(imgId);
  };

  imges.forEach((img) => {
    const div = document.createElement("div");
    div.classList =
      "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-y-3";
    div.innerHTML = `
      <div class="col-span-3">
            <div
              class="card bg-base-100 shadow-xl border-2 p-2"
            >
              <div class="card p-3">
                <figure>
                  <img
                    src=${img.image}
                    alt="Shoes"
                  />
                </figure>
                <div class="py-7 space-y-3">
                  <h2 class="text-xl font-extrabold">${img.pet_name}</h2>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-border-all"></i>
                    <p>Breed : ${img.breed}</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-calendar-days"></i>
                    <p>Birth: ${img.date_of_birth}</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-mercury"></i>
                    <p>Gender: ${img.gender}</p>
                  </div>
                  <div class="flex items-center gap-2">
                  <i class="fa-solid fa-dollar-sign"></i>
                    <p>Price : ${img.price}</p>
                  </div>
                  <div class="divider"></div>
                  <div class="space-x-3">
                    <button onclick="likeImg()"
                      class="px-4 py-2 outline outline-[#0E7A8126] rounded-lg text-sm text-[#0E7A81] font-black"
                    >
                      <i class="fa-regular fa-thumbs-up"></i>
                    </button>
                    <button
                      class="px-4 py-2 outline outline-[#0E7A8126] rounded-lg text-sm text-[#0E7A81] font-black"
                    >
                      Adopt
                    </button>
                    <button onclick="lodeDetails('${imges}')"
                      class="px-4 py-2 outline outline-[#0E7A8126] rounded-lg text-sm text-[#0E7A81] font-black"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

    `;
    contaner.append(div);
  });
};

const loadSearch = () => {
  document.getElementById("loading").classList.remove("hidden");
  setTimeout(function () {
    loadingShowSearch();
  }, 2000);
};
loadSearch();
