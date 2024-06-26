const url = "https://cragunbc.github.io/wdd230/scoots/data/rentalvechicles.json"
const table = document.querySelector("#body");

async function getRentalData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.rentals);
    displayRentals(data.rentals);
}

getRentalData();

const displayRentals = (rentals) => {
    rentals.forEach(rental => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${rental.name}</td>
        <td>${rental.price_halfday_res}</td>
        <td>${rental.price_fullday_res}</td>
        <td>${rental.price_halfday_walk}</td>
        <td>${rental.price_fullday_walk}</td>`;
        // row.innerHTML = `${rental.max}`;
        // row.innerHTML = `<td>${rental.price_halfday_res}</td>`;
        // row.innerHTML = `<td>${rental.price_fullday_res}</td>`;
        // row.innerHTML = `<td>${rental.price_halfday_walk}</td>`;
        // row.innerHTML = `<td>${rental.price_fullday_walk}</td>`;
        table.appendChild(row);      
    });
}