const baseURL = "https://cragunbc.github.io/wdd230/";
const linksURL = "https://cragunbc.github.io/wdd230/data/links.json";
const assignments = document.querySelector(".numbered-list");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let list = document.createElement("li");
        let lessonWeek = document.createElement("p");
        
        lessonWeek.textContent = `Week ${week.lesson}: `;
        week.links.forEach((link) => {
            let assignmentLink = document.createElement("a");
            assignmentLink.setAttribute("href", link.url);
            assignmentLink.textContent = `${link.title} | `;
            lessonWeek.appendChild(assignmentLink);
            list.appendChild(lessonWeek);
            console.log(link);
        });

        assignments.appendChild(list);
    });
}