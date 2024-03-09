const url = "https://cragunbc.github.io/wdd230/chamber/data/members.json"
const cards = document.querySelector("#members");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}

getMemberData();

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let websiteurl = document.createElement("a");
        let membership = document.createElement("p");
        let add_info = document.createElement("p");

        name.textContent = company.name;
        image.setAttribute("src", company.image);
        image.setAttribute("alt", `Logo for ${company.name}`);
        image.setAttribute("loading", "lazy");
        address.textContent = company.address;
        phone.textContent = company.phone;
        websiteurl.setAttribute("href", company.website);
        membership.textContent = `Membership Level: ${company.membership_level}`;
        add_info.textContent = `Additional Info: ${company.additional_info}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(websiteurl);
        card.appendChild(membership);
        card.appendChild(add_info);

        cards.appendChild(card);
    });
}