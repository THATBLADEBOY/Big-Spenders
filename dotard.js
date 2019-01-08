const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"


businesses.forEach(business => {
    let someVariableThatMeansZip = "addressZipCode";

  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
        ${business.addressCity}
        ${business["addressStateCode"]}
        ${business[someVariableThatMeansZip]}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});

// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })


// Simplified Filter Array Method
const newYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY");


// Array Filter Method to Filter only the Manufacturing Businesses
const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing");