export function loadAboutPage() {
    const content = document.querySelector("#content");
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const about = document.createElement("div")
    about.classList.add("about");

    const aboutHeader = document.createElement("h1");
    aboutHeader.innerText = "ABOUT US";
    const aboutPara_1 = document.createElement("p");
    aboutPara_1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec lectus porttitor mauris elementum semper. Donec leo lectus, semper sed metus non, vestibulum dapibus leo. Cras libero nisi, accumsan eu imperdiet sed, luctus sit amet dolor. Nunc laoreet, eros sit amet convallis rutrum, est eros convallis diam, nec tincidunt velit dui quis ligula. In laoreet magna diam, congue varius odio finibus a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc diam ex, fermentum malesuada augue ut, pretium pellentesque metus. Quisque ultricies, nulla ultricies accumsan tempus, dui tortor consectetur felis, sit amet tristique lorem felis id diam.";
    const aboutPara_2 = document.createElement("p");
    aboutPara_2.innerText = "Fusce vel rhoncus neque, nec scelerisque nisl. Aliquam erat volutpat. Curabitur feugiat justo viverra, lobortis purus aliquam, sagittis neque. Etiam ut nunc sed nisi ultrices lacinia ut a justo. In ligula ligula, vulputate eu aliquam et, commodo quis ipsum. Suspendisse in iaculis diam, non finibus purus. Vestibulum dictum dapibus elementum. Integer eleifend, erat id cursus interdum, justo tortor dictum elit, a dictum dolor massa id lectus.";
    about.appendChild(aboutHeader);
    about.appendChild(aboutPara_1);
    about.appendChild(aboutPara_2);
    aboutContainer.appendChild(about);

    const aboutImg = document.createElement("div");
    aboutImg.classList.add("about-img");
    content.appendChild(aboutContainer);
    content.appendChild(aboutImg);
}