const express = require('express');
const app = express();
const PORT = 9090;

const isPrime = (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number) || number < 1) {
        return res.status(400).json({ error: "Invalid input. Please provide a positive integer." });
    }

    const result = checkPrime(number);
    res.json({ isPrime: result });
};

const checkPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
};

app.get('/assignments/prime/:number', isPrime);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});