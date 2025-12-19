// Load navbar
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            initDropdownHover();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Load footer (not needed as footer is already in HTML, but keeping for compatibility)
function loadFooter() {
    // Footer is already in the HTML, so this function is not needed
    // But keeping it for compatibility if needed in future
}

// Initialize dropdown hover functionality
function initDropdownHover() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    
    dropdownItems.forEach(item => {
        const dropdownToggle = item.querySelector('.dropdown-toggle');
        const dropdownMenu = item.querySelector('.dropdown-menu');
        
        if (dropdownToggle && dropdownMenu) {
            // Show on hover (desktop only)
            if (window.innerWidth >= 992) {
                item.addEventListener('mouseenter', function() {
                    dropdownMenu.classList.add('show');
                    dropdownToggle.setAttribute('aria-expanded', 'true');
                });
                
                item.addEventListener('mouseleave', function() {
                    dropdownMenu.classList.remove('show');
                    dropdownToggle.setAttribute('aria-expanded', 'false');
                });
            }
        }
    });
}

// Re-initialize on window resize
window.addEventListener('resize', function() {
    initDropdownHover();
});

// Initialize Hero Swiper Slider
function initHeroSwiper() {
    const heroSwiper = new Swiper('.hero-swiper', {
        // Auto slide
        autoplay: {
            delay: 5000, // 5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Loop
        loop: true,
        
        // Effect
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // Speed
        speed: 1000,
        
        // Navigation arrows
        navigation: {
            nextEl: '.hero-nav-next',
            prevEl: '.hero-nav-prev',
        },
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    // Footer is already in HTML, no need to load it
    
    // Also initialize if navbar is already loaded
    if (document.querySelector('.nav-item.dropdown')) {
        initDropdownHover();
    }
    
    // Initialize Swipers after ensuring library is loaded
    function initializeSwipers() {
        if (typeof Swiper === 'undefined') {
            // Retry if Swiper is not loaded yet
            setTimeout(initializeSwipers, 100);
            return;
        }
        
        // Initialize Hero Swiper
        initHeroSwiper();
        
        // Initialize Achievements Swiper
        initAchievementsSwiper();
    }
    
    // Wait for window to fully load before initializing swipers
    if (document.readyState === 'complete') {
        setTimeout(initializeSwipers, 200);
    } else {
        window.addEventListener('load', function() {
            setTimeout(initializeSwipers, 200);
        });
        // Also try on DOMContentLoaded as fallback
        setTimeout(initializeSwipers, 300);
    }
});

// Initialize Achievements Swiper Slider
function initAchievementsSwiper() {
    const swiperElement = document.querySelector('.achievements-swiper');
    if (!swiperElement) {
        console.log('Achievements Swiper element not found');
        return;
    }
    
    const achievementsSwiper = new Swiper('.achievements-swiper', {
        // Auto slide
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },
        
        // Loop
        loop: true,
        loopAdditionalSlides: 2,
        
        // Speed
        speed: 800,
        
        // Slides per view
        slidesPerView: 4,
        spaceBetween: 30,
        
        // Allow touch move
        allowTouchMove: true,
        
        // Prevent overflow
        watchOverflow: true,
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3.5,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 4.5,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
        
        // Callback when swiper is initialized
        on: {
            init: function() {
                console.log('Achievements Swiper initialized');
                this.update();
                
                // Ensure autoplay starts
                var swiperInstance = this;
                setTimeout(function() {
                    if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
                        swiperInstance.autoplay.start();
                        console.log('Achievements autoplay started');
                    }
                }, 200);
            },
        }
    });
    
    // Ensure autoplay starts
    setTimeout(function() {
        if (achievementsSwiper && achievementsSwiper.autoplay) {
            if (!achievementsSwiper.autoplay.running) {
                achievementsSwiper.autoplay.start();
            }
        }
    }, 500);
}
document.addEventListener('DOMContentLoaded', function() {
            const prevButton = document.querySelector('.swiper-button-prev-custom');
            const nextButton = document.querySelector('.swiper-button-next-custom');
            const pauseButton = document.querySelector('.swiper-button-pause');
            const playButton = document.querySelector('.swiper-button-play');

            // Initialize Swiper
            let isAutoplayRunning = true;

            const swiper = new Swiper('.tileSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                grabCursor: true,
                loop: false,
                navigation: {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                speed: 800,
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 15
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 20
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                },
                on: {
                    init: function() {
                        console.log('[v0] Swiper initialized');
                    },
                    slideChange: function() {
                        console.log('[v0] Slide changed to:', this.activeIndex);
                    }
                }
            });

            // Pause/Play functionality
            pauseButton.addEventListener('click', () => {
                swiper.autoplay.stop();
                pauseButton.style.display = 'none';
                playButton.style.display = 'flex';
                isAutoplayRunning = false;
            });

            playButton.addEventListener('click', () => {
                swiper.autoplay.start();
                playButton.style.display = 'none';
                pauseButton.style.display = 'flex';
                isAutoplayRunning = true;
            });

            // Add smooth scroll behavior
            document.querySelectorAll('.add-basket-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
            const prevButton = document.querySelector('.swiper-button-prev-custom');
            const nextButton = document.querySelector('.swiper-button-next-custom');
            const pauseButton = document.querySelector('.swiper-button-pause');
            const playButton = document.querySelector('.swiper-button-play');

            // Initialize Swiper
            let isAutoplayRunning = true;

            const swiper = new Swiper('.tileSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                grabCursor: true,
                loop: false,
                navigation: {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                speed: 800,
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 15
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 20
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                },
                on: {
                    init: function() {
                        console.log('[v0] Swiper initialized');
                    },
                    slideChange: function() {
                        console.log('[v0] Slide changed to:', this.activeIndex);
                    }
                }
            });

            // Pause/Play functionality
            pauseButton.addEventListener('click', () => {
                swiper.autoplay.stop();
                pauseButton.style.display = 'none';
                playButton.style.display = 'flex';
                isAutoplayRunning = false;
            });

            playButton.addEventListener('click', () => {
                swiper.autoplay.start();
                playButton.style.display = 'none';
                pauseButton.style.display = 'flex';
                isAutoplayRunning = true;
            });

            // Add smooth scroll behavior
            document.querySelectorAll('.add-basket-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });
        });

// Marquee Auto Scroll - CSS animation handles the scrolling automatically
// No JavaScript needed for marquee effect

