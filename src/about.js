export {displayAbout};

function displayAbout() {
    let contentDiv = document.getElementById("content");
    let sectionWrapper = document.createElement("div");
    let sectionDiv = document.createElement("div");
    let sectionHeader = document.createElement("h1");
    let sectionHr = document.createElement("hr");
    let para = document.createElement("p");

    sectionWrapper.className = "sectionWrapper";
    sectionDiv.className = "sectionDiv";
    sectionDiv.setAttribute("id", "aboutDiv");
    sectionHeader.className = "sectionHeader";
    sectionHr.className = "sectionHr";

    sectionHeader.textContent = "ABOUT";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque totam amet ipsum rerum officia, facere maiores. Earum eum sint laboriosam, libero iusto quo ab totam? Eum facere blanditiis dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, labore ab eius quibusdam at provident asperiores dolorum debitis sed facilis, vero incidunt sunt numquam similique odit harum quo. Id, aperiam.";


    sectionDiv.appendChild(sectionHeader);
    sectionDiv.appendChild(sectionHr);
    sectionDiv.appendChild(para);

    sectionWrapper.appendChild(sectionDiv);
    contentDiv.appendChild(sectionWrapper);
}