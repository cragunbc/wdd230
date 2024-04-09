const url = "https://cragunbc.github.io/wdd230/scoots/data/rentalvechicles.json"
const table = document.querySelector("#body");

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.rentals);
    displayRentals(data.rentals);
}

getRentalData();

const displayRentals = (rentals) => {
    rentals.forEach(rental => {
        const row = document.createElement("tr");
        row.innerHTML = `${rental.name}`;
        table.appendChild(row);      
    });
}