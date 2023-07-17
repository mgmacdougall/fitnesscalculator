const fitnessButtonEl = document.getElementById("fitnessscore");
console.log(fitnessButtonEl);
let searchFormEl;

fitnessButtonEl.addEventListener("click", function(e) {
  renderSearchForm();
});

function initListener() {
  searchButtonEl.addEventListener("click", function() {});
}

function fetchFitnessScore(data) {
  const {age, gender, height, weight, activitylevel} = data;

  const url =
    "https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com"
    }
  };

  fetch(url, options)
    .then(response => response.json())
    .then(respData => console.log(respData.data))
    .catch(err => {
      console.error(err);
    });
  // const result = await response.text();
}

function handleFormSubmit(event) {
  event.preventDefault();
  const age = 25;
  const gender = "male";
  const weight = document.getElementById("weight");
  const height = document.getElementById("heightCM");
  // const heightInch = document.getElementById("height-in");
  // const neckMeasure = document.getElementById("neck");
  // const waistMeasure = document.getElementById("waist");
  // const hipMeasure = document.getElementById("hips");
  const activitylevel = "level_1";
  const fitness = {age, gender, height, weight, activitylevel};
  fetchFitnessScore(fitness);
}

function renderSearchForm() {
  const rootEl = document.getElementById("root");

  const formStr = `
  <div class="container">
    <form id="fitness-calculator">
      <label for="search">Calculate Fitness</label>
    <div class="layout-row">     
      <label for="weight">Enter Weight</label>
      <input type="text" id="weight"  class="inline-sm" placeholder="kg"></input>
      </div>
      <div class="layout-row">
        <label for="heightCM">Enter Height</label>
        <input class="inline-sm" type="text" id="heightCM" placeholder="cm"></input>
      </div>
      <div>
        <h3 style="text-align:center;">Enter measurements</h3>
        <div class="layout-col">
          <input type="submit" id="calc-btn"></input>
      </div>
    </form>
  </div>`;
  console.log(rootEl);
  rootEl.innerHTML = formStr;

  const calcFormEl = document.getElementById("fitness-calculator");

  calcFormEl.addEventListener("submit", function(e) {
    handleFormSubmit(e);
  });
}
