// Product Detail Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail Image Click Handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImage.src = this.src;
            
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Quantity Control
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');

    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    // Add to Cart Button Handler
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        const product = {
            name: document.querySelector('.product-title').textContent,
            price: document.querySelector('.current-price').textContent,
            quantity: parseInt(quantityInput.value),
            image: mainImage.src
        };

        // Get existing cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        // Check if product already exists in cart
        const existingProductIndex = cartItems.findIndex(item => item.name === product.name);
        
        if (existingProductIndex !== -1) {
            // Update quantity if product exists
            cartItems[existingProductIndex].quantity += product.quantity;
        } else {
            // Add new product if it doesn't exist
            cartItems.push(product);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Show success message
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    });

    // Buy Now Button Handler
    const buyNowBtn = document.querySelector('.buy-now-btn');
    buyNowBtn.addEventListener('click', function() {
        const product = {
            name: document.querySelector('.product-title').textContent,
            price: document.querySelector('.current-price').textContent,
            quantity: parseInt(quantityInput.value),
            image: mainImage.src
        };

        // Save product to localStorage for immediate checkout
        localStorage.setItem('checkoutProduct', JSON.stringify(product));
        
        // Redirect to checkout page
        window.location.href = 'gio-hang.html';
    });
}); 