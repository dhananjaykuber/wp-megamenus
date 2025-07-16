/**
 * Styles
 */
import './index.scss';

// Desktop mega menu script
document.addEventListener('DOMContentLoaded', () => {
    const productsMenu = document.querySelector('.product-menu-item a');
    const productsMegaMenu = document.querySelector('.practice-products');

    const resourceMenu = document.querySelector('.resource-menu-item a');
    const resourceMegaMenu = document.querySelector('.practice-resources');

    if (
        !productsMenu ||
        !productsMegaMenu ||
        !resourceMenu ||
        !resourceMegaMenu
    ) {
        return;
    }

    // Handle products mega menu
    const handleProductsMegaMenu = (e) => {
        e.stopPropagation();

        productsMegaMenu.classList.toggle('open');
        resourceMegaMenu.classList.remove('open');
    };

    // Handle resources mega menu
    const handleResourceMegaMenu = (e) => {
        e.stopPropagation();

        resourceMegaMenu.classList.toggle('open');
        productsMegaMenu.classList.remove('open');
    };

    productsMenu.addEventListener('click', handleProductsMegaMenu);
    resourceMenu.addEventListener('click', handleResourceMegaMenu);

    // Close mega menus when clicking outside
    document.addEventListener('click', () => {
        if (productsMegaMenu.classList.contains('open')) {
            productsMegaMenu.classList.remove('open');
        }
        if (resourceMegaMenu.classList.contains('open')) {
            resourceMegaMenu.classList.remove('open');
        }
    });
});

// Mobile mega menu script
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.practice-hamburger');
    const mobileMenusLinks = document.querySelectorAll('.menu-link-mobile');
    const mobileMegaMenu = document.querySelector('.practice-menu-mobile');

    if (!hamburgerMenu || !mobileMenusLinks.length || !mobileMegaMenu) {
        return;
    }

    hamburgerMenu.addEventListener('click', () => {
        mobileMegaMenu.classList.toggle('open');
    });

    // Handle opening sub-menus in mobile view
    mobileMenusLinks.forEach((menu) => {
        menu.addEventListener('click', () => {
            const nextMenu = menu.nextElementSibling;

            if (
                nextMenu &&
                nextMenu.classList.contains('practice-mega-menu-mobile')
            ) {
                nextMenu.classList.toggle('open');
            }
        });
    });
});
