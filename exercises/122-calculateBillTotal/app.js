function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tip = preTaxAndTipAmount * .15;
    let tax = preTaxAndTipAmount * .095;
    let billTotal = preTaxAndTipAmount + tip + tax;
    return billTotal;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9