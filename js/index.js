document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is visible:', entry.target);
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.01 
    });
  
    const sections = document.querySelectorAll('section');
    console.log('Sections found:', sections);  // Логирование выбранных элементов
  
    sections.forEach(section => {
        observer.observe(section);
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger__menu");
    const menu = document.querySelector(".header__menu");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    });
});




// hero animations
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero__title");
    const heroSubtitle = document.querySelector(".hero__subtitle");

    
    const elements = [heroTitle, heroSubtitle];

   
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("active");
        }, index * 500); 
    });



});
document.addEventListener("DOMContentLoaded", () => {
    const cloud1 = document.querySelector(".hero__cloud-1");
    const cloud2 = document.querySelector(".hero__cloud-2");
    const star1 = document.querySelector(".hero__star-1");
    const star2 = document.querySelector(".hero__star-2");
    const star3 = document.querySelector(".hero__star-3");

    
    const elements = [cloud1, cloud2, star1, star2, star3];

   
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("active");
        }, index * 500); 
    });


    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 50; 
        const y = (event.clientY / window.innerHeight - 0.5) * 10;

        cloud1.style.transform = `translate(${x}px, ${y}px)`;
        cloud2.style.transform = `translate(${x * -1}px, ${y * -1}px)`;
    });
});






// about cards animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".about-us__product-card");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 
    };

    let animationDelay = 0; 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                setTimeout(() => {
                    entry.target.classList.add("animated");
                }, animationDelay);

                
                animationDelay += 300;

                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    
    elements.forEach((element) => observer.observe(element));
});


//our values animation
document.addEventListener("DOMContentLoaded", () => {
    const allElements = document.querySelectorAll(
        ".our-values__step, .our-values__step-divider"
    ); 
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1,
    };

    let animationDelay = 0; 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                setTimeout(() => {
                    entry.target.classList.add("animated");
                }, animationDelay);

                
                animationDelay += 300;

                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    
    allElements.forEach((element) => observer.observe(element));
});