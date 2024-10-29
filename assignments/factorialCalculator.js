const express = require('express');
const app = express();
const PORT = 9090;

const calculateFactorial = (req, res) => {
    const number = parseInt(req.params.number, 10);
    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: "Invalid input. Please provide a non-negative integer." });
    }

    const result = factorial(number);
    res.json({ factorial: result });
};

const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};

app.get('/assignments/factorial/:number', calculateFactorial);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
