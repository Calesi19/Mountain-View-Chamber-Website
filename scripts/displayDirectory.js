
const url = 'https://raw.githubusercontent.com/Calesi19/MountainViewChamber/main/json/data.json'



const displayCompanies = (companies) => {
    const cards = document.querySelector('#display'); // select the output container element
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h3 = document.createElement('h3');
      let info = document.createElement('p');
      let logo = document.createElement('img');
      let website = document.createElement('a');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h3.textContent = `${company.name}`;
      
      info.textContent = `${company.address}`

      website.textContent = `${company.website}`

      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', company.imageurl);
      logo.setAttribute('alt', `Logo of ${company.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '340');
  
      // Append the section(card) with the created elements
      card.appendChild(h3);
      card.appendChild(logo);
      card.appendChild(info);
      card.appendChild(website);
      
  
      cards.appendChild(card);
    } )// end of forEach loop
  } // end of function expression




async function getChamberCompanies() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.companies)
  displayCompanies(data.companies);
}
  
getChamberCompanies();
//getProphetData();





const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#display");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
  gridbutton.style.backgroundColor = 'white';
  listbutton.style.backgroundColor = 'rgb(219, 219, 187)';
});

listbutton.addEventListener("click", () => {

	display.classList.add("list");
	display.classList.remove("grid");
  listbutton.style.backgroundColor = 'white';
  gridbutton.style.backgroundColor = 'rgb(219, 219, 187)';
  
});



