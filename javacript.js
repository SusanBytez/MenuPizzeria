

function includiHTML() {
    
    fetch("./menudigitale.html")
        .then(response => {
            return response.ok ? response.text() : "";
        })
        .then(data => {
            document.getElementById("menuDigitale").innerHTML = data;

            
            const hamburger = document.querySelector('.hamburger');
            const menu = document.querySelector('.menu');
            if (hamburger && menu) {
                hamburger.addEventListener('click', function () {
                    menu.classList.toggle('active');
                    if (menu.classList.contains('active')) { 
                        document.getElementById("menuDigitale").style.opacity = 0.3;
                    } else {
                        document.getElementById("menuDigitale").style.opacity = 1;
                    }
                });

                
                const menuItems = menu.querySelectorAll('li'); 
                menuItems.forEach(item => {
                    item.addEventListener('click', function () {
                        menu.classList.remove('active'); 
                        hamburger.classList.remove('active');
                        document.getElementById("menuDigitale").style.opacity = 1; 
                    });
                });
            }

           
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                const btn = dropdown.querySelector('.dropbtn');
                if (btn) {
                    btn.addEventListener('click', function () {
                        
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('open'); 
                            }
                        });
                        
                        // Attiva/disattiva il dropdown cliccato
                        dropdown.classList.toggle('open');
                    });
                }
            });

            
            const backToTop = document.querySelector('.back-to-top');
            if (backToTop) {
                window.onscroll = function () {
                    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                        backToTop.style.display = "block";
                    } else {
                        backToTop.style.display = "none";
                    }
                };

                backToTop.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        })
        .catch(error => {
            console.error("Errore durante il caricamento del menu:", error);
        });
}


function opacityFunction() {
    const menuDigitale = document.getElementById("menuDigitale");
    const menu = document.querySelector('.menu');
    
    if (!window.matchMedia("(max-width: 818px)").matches) {
        menuDigitale.style.opacity = 1;
    } else if (menu && menu.classList.contains('active')) { 
        menuDigitale.style.opacity = 0.3;
    }
}

document.addEventListener('DOMContentLoaded', includiHTML);
window.addEventListener('resize', opacityFunction);
