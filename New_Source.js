window.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0)

    //header hambar click
    const hambar = document.querySelector(".ham");
    const hamMenu = document.querySelector(".h_menu");
    const overlay = document.querySelector(".menu_overlay");

    hambar.addEventListener("click", () => {
        hamMenu.classList.add("active");
        overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
    
    // header search click
    const search = document.querySelector(".search");
    const search_i = document.querySelector(".search_i");
    search.addEventListener("click", () => {
        search_i.classList.add("active");
    })
    
    // header search X click
    const X = document.querySelector(".fa-x");

    X.addEventListener("click", () => {
        search_i.classList.remove("active");
    })
    
    // m_first main bg slide
    const mainbg = document.querySelector(".m_imgbox");
    mainbg.style.opacity = "1";
    mainbg.style.top = "0";

    // m_second text slide
    const textBox = document.querySelector(".t_box");

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textBox.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(textBox);

    // m_second banner slide
    const bnrChange = document.querySelector(".banner_box");

    const bnrSlide = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bnrChange.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    bnrSlide.observe(bnrChange);


    // m_second banner change event
    const bnr1 = document.querySelector(".banner_box img:first-of-type");
    const bnr2 = document.querySelector(".banner_box img:nth-of-type(2)");

    bnrChange.addEventListener("mouseover", () => {
        bnr1.style.opacity = "0";
        bnr2.style.opacity = "1";
    });

    bnrChange.addEventListener("mouseout", () => {
        bnr1.style.opacity = "1";
        bnr2.style.opacity = "0";
    });

    // movetop : scroll to top
    const m_top = document.querySelectorAll(".movetop");

    m_top.forEach(button => {
        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    // more btn slide
    const more = document.querySelector(".more button");

    const options1 = {
        threshold: 0.8
    };

    const moreslide = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                more.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options1);

    moreslide.observe(more);

    // m_fifth li slide
    const a = document.querySelectorAll(".m_fifth ul li a p");

    const aSlide = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    a.forEach(item => aSlide.observe(item));

    // m_fifth h3 slide
    const category = document.querySelector(".m_fifth h3");

    const categorySlide = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    categorySlide.observe(category);
});