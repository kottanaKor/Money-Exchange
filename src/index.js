// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const COINS = [
        { name: 'H', value: 50 },
        { name: 'Q', value: 25 },
        { name: 'D', value: 10 },
        { name: 'N', value: 5 },
        { name: 'P', value: 1 },
    ]

    const change = {};
    if (currency <= 0) return change;
    if (currency > 10000) {
        change.error = "You are rich, my friend! We don't have so much coins for exchange";
        return change;
    }

    for (let i = 0; i < COINS.length; i++) {
        COINS[i].n = Math.trunc(currency / COINS[i].value);
        currency = currency % COINS[i].value;
        if (COINS[i].n !== 0) {
            change[COINS[i].name] = COINS[i].n;
        }
    }

    return change;
}
