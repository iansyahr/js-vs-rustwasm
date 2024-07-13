function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateExponential(x, terms) {
    let sum = 1; // Start with the 0th term
    for (let i = 1; i < terms; i++) {
        sum += Math.pow(x, i) / factorial(i);
    }
    return sum;
}

async function heavyComputation(x, terms) {
    console.time("Heavy Computation");

    for (let i = 0; i < 1000; i++) {
        let result = calculateExponential(x, terms);
        // Simulate asynchronous computation
        await new Promise(resolve => setTimeout(resolve, 0));
    }

    console.timeEnd("Heavy Computation");
    return "Computation completed!";
}

document.getElementById("startButton").addEventListener("click", async () => {
    const x = parseFloat(document.getElementById("xValue").value);
    const terms = parseInt(document.getElementById("termsValue").value);

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Computing...";
    const result = await heavyComputation(x, terms);
    resultDiv.textContent = result;
});
