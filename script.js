function calculateFuel() {
  let distance = parseFloat(document.getElementById("distance").value);
  let efficiency = parseFloat(document.getElementById("efficiency").value);
  let price = parseFloat(document.getElementById("price").value);

  let distanceUnit = document.getElementById("distanceUnit").value;
  let effUnit = document.getElementById("effUnit").value;

  if (!distance || !efficiency || !price) {
    alert("Please fill all fields");
    return;
  }

  // Convert miles to km
  if (distanceUnit === "miles") {
    distance *= 1.60934;
  }

  // Convert MPG to KM/L
  if (effUnit === "mpg") {
    efficiency *= 0.425144;
  }

  let fuelNeeded = distance / efficiency;
  let totalCost = fuelNeeded * price;

  document.getElementById("fuelNeeded").innerText =
    `Fuel Needed: ${fuelNeeded.toFixed(2)} litres`;

  document.getElementById("totalCost").innerText =
    `Total Cost: ₹${totalCost.toFixed(2)}`;
}