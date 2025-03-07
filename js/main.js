// Datos de ejemplo para diferentes categorías de libros
const librosDestacados = [
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        precio: '$299',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una saga familiar que narra la historia de los Buendía a través de siete generaciones en el mítico pueblo de Macondo.'
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        precio: '$259',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una distopía que explora un futuro totalitario donde el gobierno controla hasta los pensamientos de sus ciudadanos.'
    },
    {
        titulo: 'El señor de los anillos',
        autor: 'J.R.R. Tolkien',
        precio: '$399',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una épica aventura de fantasía que sigue el viaje de Frodo para destruir un anillo mágico y salvar la Tierra Media.'
    },
    {
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        precio: '$349',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'La obra maestra de la literatura española que sigue las aventuras de un hidalgo que enloquece leyendo novelas de caballería.'
    }
];

const librosMasVendidos = [
    {
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        precio: '$279',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'El primer libro de la serie que introduce al joven mago Harry Potter y su entrada al mundo mágico de Hogwarts.'
    },
    {
        titulo: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        precio: '$199',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Un cuento poético que explora temas de amor, amistad y el sentido de la vida a través de los ojos de un pequeño príncipe.'
    },
    {
        titulo: 'El código Da Vinci',
        autor: 'Dan Brown',
        precio: '$329',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Un thriller que sigue a Robert Langdon en una búsqueda frenética de pistas ocultas en obras de arte del Renacimiento.'
    },
    {
        titulo: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        precio: '$289',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Un misterio ambientado en la Barcelona de posguerra que gira en torno a un libro maldito y su autor desaparecido.'
    }
];

const librosNuevos = [
    {
        titulo: 'El paciente',
        autor: 'Juan Gómez-Jurado',
        precio: '$359',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Un thriller psicológico que mantiene al lector en tensión mientras se desarrolla un peligroso juego mental.'
    },
    {
        titulo: 'La bestia',
        autor: 'Carmen Mola',
        precio: '$299',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una novela negra ambientada en el Madrid de 1834 que mezcla intriga criminal con el contexto histórico de la epidemia de cólera.'
    },
    {
        titulo: 'El italiano',
        autor: 'Arturo Pérez-Reverte',
        precio: '$379',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una historia de amor, mar y guerra ambientada en la Segunda Guerra Mundial en la bahía de Algeciras.'
    },
    {
        titulo: 'Línea de fuego',
        autor: 'Arturo Pérez-Reverte',
        precio: '$339',
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una novela que narra la batalla del Ebro durante la Guerra Civil Española a través de las historias de sus protagonistas.'
    }
];

// Función para crear tarjetas de libros
function crearTarjetaLibro(libro) {
    return `
        <div class="col-md-3 mb-4">
            <div class="card h-100 book-card">
                <img src="${libro.imagen}" class="card-img-top" alt="${libro.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-text"><strong>Autor:</strong> ${libro.autor}</p>
                    <span class="precio mb-3"><strong>Precio:</strong> ${libro.precio}</span>
                    <div class="btn-container">
                        <button class="btn btn-secondary mb-2" onclick='mostrarDetalles(${JSON.stringify(libro)})'>
                            <i class="fas fa-info-circle"></i> Detalles
                        </button>
                        <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(libro)})">
                            <i class="fas fa-shopping-cart"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function mostrarDetalles(libro) {
    const modalHTML = `
        <div class="modal fade" id="detallesModal" tabindex="-1" aria-labelledby="detallesModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="detallesModalLabel">Detalles del Libro</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${libro.imagen}" class="img-fluid" alt="${libro.titulo}">
                            </div>
                            <div class="col-md-8">
                                <h4>${libro.titulo}</h4>
                                <p><strong>Autor:</strong> ${libro.autor}</p>
                                <p><strong>Precio:</strong> ${libro.precio}</p>
                                <p><strong>Descripción:</strong></p>
                                <p>${libro.descripcion}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="addToCart(${JSON.stringify(libro)})">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('detallesModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Initialize and show the modal
    const modal = new bootstrap.Modal(document.getElementById('detallesModal'));
    modal.show();
}

// Shopping Cart functionality
let cart = [];

// Cart Modal Elements
const cartModal = document.querySelector('.cart-modal');
const cartBackdrop = document.querySelector('.cart-backdrop');
const cartCloseBtn = cartModal.querySelector('.btn-close');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const continueShopping = document.getElementById('continue-shopping');
const checkoutBtn = document.getElementById('checkout');

// Cart Modal Event Listeners
document.querySelector('.nav-link:has(.fa-shopping-cart)').addEventListener('click', function(e) {
    e.preventDefault();
    openCart();
});

cartCloseBtn.addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);
continueShopping.addEventListener('click', closeCart);

function openCart() {
    cartModal.classList.add('show');
    cartBackdrop.classList.add('show');
    updateCartDisplay();
}

function closeCart() {
    cartModal.classList.remove('show');
    cartBackdrop.classList.remove('show');
}

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        total += parseFloat(item.precio.replace('$', ''));

        row.innerHTML = `
            <td>
                <img src="${item.imagen}" alt="${item.titulo}" class="me-2">
                ${item.titulo}
            </td>
            <td>${item.precio}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        cartItemsContainer.appendChild(row);
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

function addToCart(libro) {
    const existingItem = cart.find(item => item.titulo === libro.titulo);
    
    if (!existingItem) {
        cart.push(libro);
    }
    
    openCart();
}


// Función para mostrar los libros en sus respectivas secciones
function mostrarLibros() {
    const destacadosContainer = document.getElementById('libros-destacados');
    const vendidosContainer = document.getElementById('libros-vendidos');
    const nuevosContainer = document.getElementById('libros-nuevos');

    librosDestacados.forEach(libro => {
        destacadosContainer.innerHTML += crearTarjetaLibro(libro);
    });

    librosMasVendidos.forEach(libro => {
        vendidosContainer.innerHTML += crearTarjetaLibro(libro);
    });

    librosNuevos.forEach(libro => {
        nuevosContainer.innerHTML += crearTarjetaLibro(libro);
    });
}

// Cargar los libros cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    mostrarLibros();
    
    // Agregar un libro de ejemplo al carrito
    const libroEjemplo = {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        precio: 299,
        imagen: 'img/ejemplo.jpg',
        descripcion: 'Una saga familiar que narra la historia de los Buendía a través de siete generaciones en el mítico pueblo de Macondo.'
    };
    
    // Agregar el libro al carrito
    addToCart(libroEjemplo);
});