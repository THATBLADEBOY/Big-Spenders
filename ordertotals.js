businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    let totalOrders = business.orders.reduce(
        (currentTotal, nextValue) => currentTotal += nextValue,
        0
    )


    outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders.toFixed(2)})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outEl.innerHTML += "<hr/>";
});

// Lightning Excercise 1
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
)

console.log(totalRainfall)

// Lightning Exercise 2
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce(
    (currentSentence, nextWord) => currentSentence += ` ${nextWord}`,
   
)

console.log(sentence)