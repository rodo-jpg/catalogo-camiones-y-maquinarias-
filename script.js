// Función para mostrar una sección específica
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Función para mostrar una categoría específica
function showCategory(categoryId) {
    const categories = document.querySelectorAll('.category-products');
    categories.forEach(category => {
        category.style.display = category.id === categoryId ? 'block' : 'none';
    });
    document.getElementById('categories').style.display = 'none';
}

// Función para regresar a la vista de categorías
function goBack() {
    const categories = document.querySelectorAll('.category-products');
    categories.forEach(category => {
        category.style.display = 'none';
    });
    document.getElementById('categories').style.display = 'block';
}

// Función para mostrar imágenes adicionales del producto
function showProductImages(productId) {
    const productImages = {
        'volvo-fh-440': [
            'img/tracto1/tracto..jpeg',
            'img/tracto1/tracto...jpeg',
            'img/tracto1/tracto..jpeg'
        ],
        'mercedes-2644': [
            'img/tracto2/tracto22.jpeg',
            'img/tracto2/tracto222.jpeg',
            'img/tracto2/tracto2222.jpeg',
            'img/tracto2/tracto22222.jpeg'
        ],
        'mercedes-2645': [
            'img/tracto3/2.jpeg',
            'img/tracto3/3.jpeg',
            'img/tracto3/4.jpeg',
            'img/tracto3/5.jpeg',
            'img/tracto3/6.jpeg',
            'img/tracto3/7.jpeg',
            'img/tracto3/8.jpeg'
        ],
        'scania-r460': [
            'img/tracto4/2.jpeg',
            'img/tracto4/3.jpeg',
            'img/tracto4/4.jpeg',
            'img/tracto4/5.jpeg',
            'img/tracto4/6.jpeg',
            'img/tracto4/7.jpeg',
            'img/tracto4/8.jpeg',
            'img/tracto4/8.jpeg'
        ],
    'excavadora1': [
        'img/excavadora/2.jpeg',
        'img/excavadora/3.jpeg',
        'img/excavadora/4.jpeg',
        'img/excavadora/5.jpeg',
        'img/excavadora/6.jpeg',
        'img/excavadora/7.jpeg',
        'img/excavadora/8.jpeg',
        
    ],
        'excavadora2': [
            'img/excavadora1/1.jpeg',
            'img/excavadora1/2.jpeg',
            'img/excavadora1/3.jpeg',
            'img/excavadora1/4.jpeg',
            'img/excavadora1/5.jpeg',
            'img/excavadora1/6.jpeg'
        ],
        'tracto': [
            'img/tracto5/2.jpeg',
            'img/tracto5/3.jpeg',
            'img/tracto5/4.jpeg',
            'img/tracto5/5.jpeg',
            'img/tracto5/6.jpeg'
        ],
        'volquete1': [
            'img/volquete/1.jpeg',
            'img/volquete/2.jpeg',
            'img/volquete/3.jpeg',
            'img/volquete/4.jpeg',
            'img/volquete/5.jpeg',
        ],
        'tracto1': [
            'img/tracto6/2.jpeg',
            'img/tracto6/3.jpeg',
            'img/tracto6/4.jpeg',
            'img/tracto6/5.jpeg',
            'img/tracto6/6.jpeg',
            'img/tracto6/7.jpeg'
        ],
        'volquete2': [
            'img/volquete1/2.jpeg',
            'img/volquete1/3.jpeg',
            'img/volquete1/4.jpeg',
            'img/volquete1/5.jpeg',
            'img/volquete1/6.jpeg',
            'img/volquete1/7.jpeg',
            'img/volquete1/8.jpeg',
            'img/volquete1/9.jpeg'
        ],
        'tracto2': [
            'img/tracto7/2.jpeg',
            'img/tracto7/3.jpeg',
            'img/tracto7/4.jpeg',
            'img/tracto7/5.jpeg',
            'img/tracto7/6.jpeg',
            'img/tracto7/7.jpeg',
        ]
    };

    const gallery = document.getElementById('product-image-gallery');
    gallery.innerHTML = '';

    if (productImages[productId]) {
        productImages[productId].forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Imagen de ${productId}`;
            gallery.appendChild(img);
        });
    }

    document.getElementById('product-images').style.display = 'block';

    // Hide all products except the selected one
    hideAllProducts();
}

// Function to hide all product items
function hideAllProducts() {
    const products = document.querySelectorAll('.category-products .product-item');
    products.forEach(product => {
        product.style.display = 'none';
    });
}

// Función para cerrar la vista de imágenes adicionales
function closeProductImages() {
    document.getElementById('product-images').style.display = 'none';

    // Show all products again
    showAllProducts();
}

// Function to show all product items
function showAllProducts() {
    const products = document.querySelectorAll('.category-products .product-item');
    products.forEach(product => {
        product.style.display = 'inline-block';
    });
}
