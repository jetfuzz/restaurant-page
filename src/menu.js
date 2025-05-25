export {displayMenu};

function displayMenu() {
    let contentDiv = document.getElementById("content");
    let sectionWrapper = document.createElement("div");
    let sectionDiv = document.createElement("div");
    let sectionHeader = document.createElement("h1");
    let sectionHr = document.createElement("hr");

    sectionWrapper.className = "sectionWrapper";
    sectionDiv.className = "sectionDiv";
    sectionHeader.className = "sectionHeader";
    sectionHr.className = "sectionHr";

    sectionHeader.textContent = "MENU";
    
    sectionDiv.appendChild(sectionHeader);
    sectionDiv.appendChild(sectionHr);

    const menuItems = [
        {
            name: "Matcha Latte",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.",
            price: "$6"
        },
        {
            name: "Cold Brew",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.",
            price: "$5"
        }, 
        {
            name: "Black Sesame Latte",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.",
            price: "$6"
        }
    ]

    menuItems.forEach(item => {
        const nameElement = document.createElement("h3");
        nameElement.textContent = item.name;

        const descElement = document.createElement("p");
        descElement.textContent = item.desc;

        const priceElement = document.createElement("h3");
        priceElement.textContent = item.price;

        const hrElement = document.createElement("hr");
        hrElement.className = "sectionHr";

        sectionDiv.appendChild(nameElement);
        sectionDiv.appendChild(descElement);
        sectionDiv.appendChild(priceElement);
        sectionDiv.appendChild(hrElement);
    });

    sectionWrapper.appendChild(sectionDiv);
    contentDiv.appendChild(sectionWrapper);
}