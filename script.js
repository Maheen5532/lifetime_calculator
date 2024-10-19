function lifetimeSupply() {
    const item = document.getElementById('item').value;
    const usageRate = parseFloat(document.getElementById('usage').value);
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const lifeExpectancy = parseInt(document.getElementById('lifeExpectancy').value);

    
    const yearsRemaining = lifeExpectancy - currentAge;

    
    const totalUsage = usageRate * 365 * yearsRemaining;

   
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You will need approximately ${totalUsage} ,${item} to last you until the ripe old age of${lifeExpectancy}`;
}