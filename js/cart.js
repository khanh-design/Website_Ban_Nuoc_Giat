// Lưu trữ giỏ hàng trong localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Ẩn số lượng nếu không có sản phẩm
        if (totalItems === 0) {
            cartCount.style.display = 'none';
        } else {
            cartCount.style.display = 'flex';
        }
    }
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    // Lấy thông tin sản phẩm từ trang sản phẩm
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    if (!productCard) return;

    const productName = productCard.closest('.product-card').querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.closest('.product-card').querySelector('.product-price').textContent.replace('đ', '').replace('.', ''));
    const productImage = productCard.closest('.product-card').querySelector('img').src;

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Cập nhật số lượng sản phẩm
    updateCartCount();
    
    // Hiển thị thông báo
    showNotification('Thêm sản phẩm thành công!');
    
    // Chuyển hướng sang trang giỏ hàng sau 1 giây
    setTimeout(() => {
        window.location.href = 'gio-hang.html';
    }, 1000);
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showNotification('Đã xóa sản phẩm khỏi giỏ hàng');
}

// Cập nhật số lượng sản phẩm
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Tính tổng tiền
function calculateTotal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 30000; // Phí vận chuyển cố định
    const total = subtotal + shipping;

    return {
        subtotal,
        shipping,
        total
    };
}

// Hiển thị giỏ hàng
function renderCart() {
    const cartItems = document.querySelector('.cart-items');
    if (!cartItems) return;

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="item-price">${item.price.toLocaleString()}đ</p>
                <div class="quantity-control">
                    <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                           onchange="updateQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn plus" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div class="item-total">
                <p>${(item.price * item.quantity).toLocaleString()}đ</p>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Cập nhật tổng tiền
    const totals = calculateTotal();
    const summaryDetails = document.querySelector('.summary-details');
    if (summaryDetails) {
        summaryDetails.innerHTML = `
            <div class="summary-row">
                <span>Tạm tính:</span>
                <span>${totals.subtotal.toLocaleString()}đ</span>
            </div>
            <div class="summary-row">
                <span>Phí vận chuyển:</span>
                <span>${totals.shipping.toLocaleString()}đ</span>
            </div>
            <div class="summary-row total">
                <span>Tổng tiền:</span>
                <span>${totals.total.toLocaleString()}đ</span>
            </div>
        `;
    }
}

// Hiển thị thông báo
function showNotification(message) {
    // Tạo thẻ div cho thông báo
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Thêm thông báo vào body
    document.body.appendChild(notification);
    
    // Hiệu ứng hiện lên
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Tự động ẩn sau 3 giây
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Xử lý nút thanh toán
function handleCheckout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống');
        return;
    }
    // Thêm logic thanh toán ở đây
    showNotification('Chức năng thanh toán đang được phát triển');
}

// Khởi tạo giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();

    // Thêm event listener cho nút thanh toán
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
}); 