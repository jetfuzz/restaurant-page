export {displayHomepage};

function displayHomepage() {
    let contentDiv = document.getElementById("content");
    let homepageDiv = document.createElement("div");
    
    let namu = document.createElement("span");
    let cafe = document.createElement("span");
    
    let namuH1 = document.createElement("h1");
    let cafeH1 = document.createElement("h1");
    
    let homePara = document.createElement("p");
    let viewMenuBtn = document.createElement("button");

    namu.className = "namu";
    namuH1.className = "homeHeader";
    namu.textContent = "Namu";
    namuH1.appendChild(namu);

    cafe.className = "cafe";
    cafeH1.className = "homeHeader";
    cafe.textContent = "Café";
    cafeH1.appendChild(cafe);

    homePara.className = "homePara";
    homePara.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quis!"

    viewMenuBtn.className = "viewMenuBtn";
    viewMenuBtn.setAttribute("id", "viewMenuBtn")
    viewMenuBtn.textContent = "View Menu"

    homepageDiv.className = "homepage";
    homepageDiv.appendChild(namuH1);
    homepageDiv.appendChild(cafeH1);
    homepageDiv.appendChild(homePara);
    homepageDiv.appendChild(viewMenuBtn);
    contentDiv.appendChild(homepageDiv);
}
