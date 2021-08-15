/* =============== SCROLL UP =============== */
const scroll = document.getElementById("scroll-up");

const showScrollBtn = () => {
    if (pageYOffset > 500) {
        scroll.classList.add("show-scrollup");
    } else {
        scroll.classList.remove("show-scrollup");
    }
};

window.addEventListener("scroll", showScrollBtn);

const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

scroll.addEventListener("click", scrollTop);

/* ============= Header COLOR CHANGE ============= */
const header = document.getElementById("header");

const headerColor = () => {
    if (pageYOffset > 200) {
        header.classList.add("bg-success");
    } else {
        header.classList.remove("bg-success");
    }
};
window.addEventListener("scroll", headerColor);

/* =============== ACTIVE LINK =============== */
const onScroll = () => {
    const linkItem = document.querySelectorAll("#nav-menu a");
    const scrollPosition = window.pageYOffset;

    linkItem.forEach((el) => {
        let attr = el.getAttribute("href");
        let section = document.querySelector(attr);
        let top = section.offsetTop - 80;
        let topHeight = section.offsetHeight + top;
        if (scrollPosition >= top && scrollPosition < topHeight) {
            el.classList.add("active__nav-link");
        } else {
            el.classList.remove("active__nav-link");
        }

        console.log(topHeight);
    });
};

window.addEventListener("scroll", onScroll);
