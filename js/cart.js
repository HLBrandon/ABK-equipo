document.addEventListener('DOMContentLoaded', function() {
    // Código del carrito aquí
    const cartModal = document.querySelector('.cart-modal');
    const cartBackdrop = document.querySelector('.cart-backdrop');
    const cartBtn = document.querySelector('.cart-btn');
    
    if (cartBtn) { // Solo ejecutar si existe el botón del carrito
        cartBtn.addEventListener('click', function() {
            cartModal.classList.add('show');
            cartBackdrop.classList.add('show');
        });
    }

    // Cerrar el carrito cuando se hace clic en el backdrop
    if (cartBackdrop) {
        cartBackdrop.addEventListener('click', function() {
            cartModal.classList.remove('show');
            cartBackdrop.classList.remove('show');
        });
    }
}); 