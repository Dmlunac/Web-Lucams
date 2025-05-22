document.addEventListener('DOMContentLoaded', function() {

    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.image-slider .slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        if (slides.length === 0) return;
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    window.changeSlide = function(direction) {
        if (slides.length === 0) return;
        currentSlideIndex += direction;
        if (currentSlideIndex >= totalSlides) {
            currentSlideIndex = 0;
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = totalSlides - 1;
        }
        showSlide(currentSlideIndex);
    }

    if (totalSlides > 0) {
        showSlide(currentSlideIndex);
    }

    const messages = {
        es: {
            pageTitle: "lucams",
            langLabel: "Idioma: ",
            navArreglos: "Arreglos",
            navUniformes: "Uniformes",
            contactLink: "Contacto",
            welcomeMessage: "Bienvenidos",
            headerSubtitle: "Confecciones Lucams les ofrece",
            sliderTitle: "Nuestros Productos Destacados",
            captionProduct1: "Producto 1",
            captionProduct2: "Producto 2",
            captionProduct3: "Producto 3",
            service1Title: "Arreglos",
            service1Desc: "Se hacen y se arreglan cualquier tipo de prendas",
            serviceBtnText: "Ver más",
            service2Title: "Uniformes",
            service2Desc: "Les ofrecemos uniformes de distintas instituciones por tallaje o a la medida",
            service3Title: "Contacto",
            service3Desc: "Puedes contactarnos",
            infoSectionTitle: "Información",
            portfolio1Title: "Arreglos",
            portfolio1Desc: "Realizamos todo tipo de arreglos en prendas de vestir, ajustes de talla, cambios de cierre y más. Trae tus prendas y les daremos una nueva vida.",
            portfolioBtnText: "Volver",
            portfolio2Title: "Uniformes",
            portfolio2Desc: "Les ofrecemos chaquetas, blazers, jardineras, busos, camisas, camisetas, pantalones, pantalonetas, medias, calzado de cualquier talla. Confección a medida y por tallaje industrial.",
            portfolio3Title: "Contáctenos",
            portfolio3PhoneLabel: "Teléfono:",
            portfolio3EmailLabel: "Correo:",
            portfolio3AddressLabel: "Dirección:",
            footerNavArreglos: "Arreglos",
            footerNavUniformes: "Uniformes",
            footerNavContacto: "Contacto",
            altLogoLucams: "Logo de Lucams",
            altMenuIcon: "Icono del menú",
            altSliderProd1: "Producto destacado 1",
            altSliderProd2: "Producto destacado 2",
            altSliderProd3: "Producto destacado 3",
            altIconoArreglos: "Icono de arreglos",
            altIconoUniformes: "Icono de uniformes",
            altIconoContacto: "Icono de contacto",
            altPersonaArreglos: "Persona trabajando en arreglos de ropa",
            altUniformesEscolares: "Uniformes escolares exhibidos",
            altImagenContacto: "Imagen ilustrativa de contacto"
        },
        en: {
            pageTitle: "lucams",
            langLabel: "Language: ",
            navArreglos: "Alterations",
            navUniformes: "Uniforms",
            contactLink: "Contact Us",
            welcomeMessage: "Welcome",
            headerSubtitle: "Lucams Clothing offers you",
            sliderTitle: "Our Featured Products",
            captionProduct1: "Product 1",
            captionProduct2: "Product 2",
            captionProduct3: "Product 3",
            service1Title: "Alterations",
            service1Desc: "All types of garments are made and repaired",
            serviceBtnText: "View more",
            service2Title: "Uniforms",
            service2Desc: "We offer uniforms from different institutions by size or custom-made",
            service3Title: "Contact",
            service3Desc: "You can contact us",
            infoSectionTitle: "Information",
            portfolio1Title: "Alterations",
            portfolio1Desc: "We perform all kinds of clothing alterations, size adjustments, zipper changes, and more. Bring your clothes and we will give them a new life.",
            portfolioBtnText: "Back",
            portfolio2Title: "Uniforms",
            portfolio2Desc: "We offer jackets, blazers, pinafores, sweaters, shirts, t-shirts, pants, shorts, socks, footwear of any size. Custom-made and industrial sizing.",
            portfolio3Title: "Contact Us",
            portfolio3PhoneLabel: "Phone:",
            portfolio3EmailLabel: "Email:",
            portfolio3AddressLabel: "Address:",
            footerNavArreglos: "Alterations",
            footerNavUniformes: "Uniforms",
            footerNavContacto: "Contact Us",
            altLogoLucams: "Lucams Logo",
            altMenuIcon: "Menu Icon",
            altSliderProd1: "Featured Product 1",
            altSliderProd2: "Featured Product 2",
            altSliderProd3: "Featured Product 3",
            altIconoArreglos: "Alterations Icon",
            altIconoUniformes: "Uniforms Icon",
            altIconoContacto: "Contact Icon",
            altPersonaArreglos: "Person working on clothing alterations",
            altUniformesEscolares: "School uniforms displayed",
            altImagenContacto: "Illustrative contact image"
        },
        fr: {
            pageTitle: "lucams",
            langLabel: "Langue : ",
            navArreglos: "Retouches",
            navUniformes: "Uniformes",
            contactLink: "Contactez-nous",
            welcomeMessage: "Bienvenue",
            headerSubtitle: "Confections Lucams vous propose",
            sliderTitle: "Nos Produits en Vedette",
            captionProduct1: "Produit 1",
            captionProduct2: "Produit 2",
            captionProduct3: "Produit 3",
            service1Title: "Retouches",
            service1Desc: "Tous types de vêtements sont confectionnés et réparés",
            serviceBtnText: "Voir plus",
            service2Title: "Uniformes",
            service2Desc: "Nous proposons des uniformes de différentes institutions par taille ou sur mesure",
            service3Title: "Contact",
            service3Desc: "Vous pouvez nous contacter",
            infoSectionTitle: "Informations",
            portfolio1Title: "Retouches",
            portfolio1Desc: "Nous effectuons toutes sortes de retouches de vêtements, ajustements de taille, changements de fermetures éclair, et plus encore. Apportez vos vêtements et nous leur donnerons une nouvelle vie.",
            portfolioBtnText: "Retour",
            portfolio2Title: "Uniformes",
            portfolio2Desc: "Nous proposons des vestes, blazers, chasubles, pulls, chemises, t-shirts, pantalons, shorts, chaussettes, chaussures de toutes tailles. Confection sur mesure et tailles industrielles.",
            portfolio3Title: "Contactez-nous",
            portfolio3PhoneLabel: "Téléphone :",
            portfolio3EmailLabel: "Courriel :",
            portfolio3AddressLabel: "Adresse :",
            footerNavArreglos: "Retouches",
            footerNavUniformes: "Uniformes",
            footerNavContacto: "Contactez-nous",
            altLogoLucams: "Logo Lucams",
            altMenuIcon: "Icône du Menu",
            altSliderProd1: "Produit en Vedette 1",
            altSliderProd2: "Produit en Vedette 2",
            altSliderProd3: "Produit en Vedette 3",
            altIconoArreglos: "Icône Retouches",
            altIconoUniformes: "Icône Uniformes",
            altIconoContacto: "Icône Contact",
            altPersonaArreglos: "Personne travaillant sur des retouches de vêtements",
            altUniformesEscolares: "Uniformes scolaires exposés",
            altImagenContacto: "Image illustrative de contact"
        }
    };

    const languageSelect = document.getElementById('lang-select');

    function updateElementText(id, textKey, currentMessages) {
        const element = document.getElementById(id);
        if (element && currentMessages[textKey]) {
            element.textContent = currentMessages[textKey];
        }
    }

    function updateElementAlt(id, altKey, currentMessages) {
        const element = document.getElementById(id);
        if (element && currentMessages[altKey]) {
            element.alt = currentMessages[altKey];
        }
    }

    function updateContent(language) {
        const currentMessages = messages[language];
        if (!currentMessages) return;

        document.title = currentMessages.pageTitle || "lucams";
        
        document.documentElement.lang = language;

        updateElementText('lang-select-label', 'langLabel', currentMessages);
        updateElementText('nav-arreglos', 'navArreglos', currentMessages);
        updateElementText('nav-uniformes', 'navUniformes', currentMessages);
        updateElementText('contact-link', 'contactLink', currentMessages);
        updateElementText('welcome-message', 'welcomeMessage', currentMessages);
        updateElementText('header-subtitle', 'headerSubtitle', currentMessages);
        updateElementText('slider-title', 'sliderTitle', currentMessages);
        updateElementText('caption-product-1', 'captionProduct1', currentMessages);
        updateElementText('caption-product-2', 'captionProduct2', currentMessages);
        updateElementText('caption-product-3', 'captionProduct3', currentMessages);
        updateElementText('service1-title', 'service1Title', currentMessages);
        updateElementText('service1-desc', 'service1Desc', currentMessages);
        updateElementText('service1-btn', 'serviceBtnText', currentMessages);
        updateElementText('service2-title', 'service2Title', currentMessages);
        updateElementText('service2-desc', 'service2Desc', currentMessages);
        updateElementText('service2-btn', 'serviceBtnText', currentMessages);
        updateElementText('service3-title', 'service3Title', currentMessages);
        updateElementText('service3-desc', 'service3Desc', currentMessages);
        updateElementText('service3-btn', 'serviceBtnText', currentMessages);
        updateElementText('info-section-title', 'infoSectionTitle', currentMessages);
        updateElementText('portfolio1-title', 'portfolio1Title', currentMessages);
        updateElementText('portfolio1-desc', 'portfolio1Desc', currentMessages);
        updateElementText('portfolio1-btn', 'portfolioBtnText', currentMessages);
        updateElementText('portfolio2-title', 'portfolio2Title', currentMessages);
        updateElementText('portfolio2-desc', 'portfolio2Desc', currentMessages);
        updateElementText('portfolio2-btn', 'portfolioBtnText', currentMessages);
        updateElementText('portfolio3-title', 'portfolio3Title', currentMessages);
        updateElementText('portfolio3-phone-label', 'portfolio3PhoneLabel', currentMessages);
        updateElementText('portfolio3-email-label', 'portfolio3EmailLabel', currentMessages);
        updateElementText('portfolio3-address-label', 'portfolio3AddressLabel', currentMessages);
        updateElementText('portfolio3-btn', 'portfolioBtnText', currentMessages);
        updateElementText('footer-nav-arreglos', 'footerNavArreglos', currentMessages);
        updateElementText('footer-nav-uniformes', 'footerNavUniformes', currentMessages);
        updateElementText('footer-nav-contacto', 'footerNavContacto', currentMessages);
        updateElementAlt('logo-img-header', 'altLogoLucams', currentMessages);
        updateElementAlt('menu-icon-img', 'altMenuIcon', currentMessages);
        updateElementAlt('slider-img-1', 'altSliderProd1', currentMessages);
        updateElementAlt('slider-img-2', 'altSliderProd2', currentMessages);
        updateElementAlt('slider-img-3', 'altSliderProd3', currentMessages);
        updateElementAlt('service1-icon-img', 'altIconoArreglos', currentMessages);
        updateElementAlt('service2-icon-img', 'altIconoUniformes', currentMessages);
        updateElementAlt('service3-icon-img', 'altIconoContacto', currentMessages);
        updateElementAlt('portfolio1-img', 'altPersonaArreglos', currentMessages);
        updateElementAlt('portfolio2-img', 'altUniformesEscolares', currentMessages);
        updateElementAlt('portfolio3-img', 'altImagenContacto', currentMessages);
        updateElementAlt('logo-img-footer', 'altLogoLucams', currentMessages);
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            updateContent(this.value);
        });
        updateContent(languageSelect.value);
    }
});