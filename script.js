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
    const startTime = performance.now();

    for (let i = 0; i < 1000; i++) {
        let result = calculateExponential(x, terms);
        // Simulate asynchronous computation
        await new Promise(resolve => setTimeout(resolve, 0));
    }

    const endTime = performance.now();
    console.timeEnd("Heavy Computation");
    const timeElapsed = endTime - startTime;
    console.log(timeElapsed)
    return timeElapsed;
}

document.getElementById("startButton").addEventListener("click", async () => {
    const x = parseFloat(document.getElementById("xValue").value);
    const terms = parseInt(document.getElementById("termsValue").value);

    const resultDiv = document.getElementById("result");
    const timeElapsedDiv = document.getElementById("timeElapsed");
    resultDiv.textContent = "Computing...";
    timeElapsedDiv.textContent = "";

    const timeElapsed = await heavyComputation(x, terms);
    resultDiv.textContent = "Computation completed!";
    timeElapsedDiv.textContent = `Time elapsed: ${timeElapsed.toFixed(2)} milliseconds`;
});