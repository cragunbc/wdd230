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
        let assignmentName = document.createElement("p");
        let lessonWeek = document.createElement("p");
        
        lessonWeek.textContent = `${week.lesson}`;
        week.links.forEach((link) => {
            let assignmentLink = document.createElement("a");
            assignmentLink.setAttribute("url", link.url);
            assignmentLink.setAttribute("title", link.title);
            list.appendChild(assignmentLink);
            console.log(link);
        });
        // assignmentName.textContent = `${week.links.title}`;
        // assignmentLink.setAttribute = ("name", `${week.links.title}`);
        // assignmentLink.setAttribute = ("url", `${week.links.url}`);
        // assignmentLink.textContent = `${week.links.title}`;
        // let completeLink = `${lessonWeek}: ${assignmentName}`;

        list.innerHTML = `Week ${week.lesson}:`;

        // list.appendChild(lessonWeek);
        // list.appendChild(assignmentName);
        // list.appendChild(assignmentLink);
        assignments.appendChild(list);
    });
}