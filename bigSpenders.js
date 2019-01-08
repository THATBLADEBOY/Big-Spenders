

const bigSpenders = businesses.filter(business => {
    let bigSpender = false

    business.orders.forEach(order => {
        if (order >= 9000)
        bigSpender = true
    })
    return bigSpender
})

console.log(bigSpenders)

