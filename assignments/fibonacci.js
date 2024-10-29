const express = require('express');
const app = express();
const PORT = 9090;

const fibonacci = (req, res) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: "Invalid input. Please provide a non-negative integer." });
    }

    const sequence = calculateFibonacci(n);
    res.json({ sequence });
};

const calculateFibonacci = (n) => {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
};

app.get('/assignments/fibonacci/:n', fibonacci);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
