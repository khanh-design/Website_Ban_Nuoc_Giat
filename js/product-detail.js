// Danh sách sản phẩm
const products = {
    1: {
        name: "Nước giặt huơg hoa Asahi",
        price: "150.000đ",
        description: "Nước giặt đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/Comfor.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_5L/HuongHoa.jpg.JPG"
        ]
    },
    2: {
        name: "Nước Lau Sàn Hương Hoa Ly 10L Asahi",
        price: "100.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG",
            "./Images/NuocLauSan/Loai_1L/HoaLy_1L.JPG",
            "./Images/NuocLauSan/HuongQue.jpg.JPG"
        ]
    },
    3: {
        name: "Nước rửa chén Hương Chanh 10L Asahi",
        price: "200.000đ",
        description: "Nước rửa chén đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocRuaChen/HuongChanh.jpg.JPG",
            "./Images/NuocRuaChen/RuaChen_800L/HuongChanh.jpg.JPG",
            "./Images/NuocRuaChen/HuongQue.jpg.JPG"
        ]
    },
    4: {
        name: "Nước Lau Sàn Hương Hoa Ly 1L Asahi",
        price: "50.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/Loai_1L/HoaLy_1L.JPG",
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG",
            "./Images/NuocLauSan/HuongQue.jpg.JPG"
        ]
    },
    5: {
        name: "Nước giặt huơg hoa Asahi",
        price: "150.000đ",
        description: "Nước giặt đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/Comfor.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_5L/HuongHoa.jpg.JPG"
        ]
    },
    6: {
        name: "Nước Giặt Comfor 10L Asahi",
        price: "150.000đ",
        description: "Nước giặt đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/Comfor.jpg.JPG",
            "./Images/NuocGiat/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_5L/Comfor.jpg.JPG"
        ]
    },
    7: {
        name: "Nước giặt Hương hoa 5L Asahi",
        price: "100.000đ",
        description: "Nước giặt đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/NuocGiat_5L/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_1L/HuongHoa.jpg.JPG"
        ]
    },
    8: {
        name: "Nước giặt comfort 5L Asahi",
        price: "100.000đ",
        description: "Nước giặt đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/NuocGiat_5L/Comfor.jpg.JPG",
            "./Images/NuocGiat/Comfor.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_1L/Comforf.jpg.JPG"
        ]
    },
    9: {
        name: "Nước giặt hương hoa 1L Asahi",
        price: "50.000đ",
        description: "Nước giặt đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/NuocGiat_1L/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/HuongHoa.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_5L/HuongHoa.jpg.JPG"
        ]
    },
    10: {
        name: "Nước giặt Comfort 1L Asahi",
        price: "50.000đ",
        description: "Nước giặt Comfort đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocGiat/NuocGiat_1L/Comforf.jpg.JPG",
            "./Images/NuocGiat/Comfor.jpg.JPG",
            "./Images/NuocGiat/NuocGiat_5L/Comfor.jpg.JPG"
        ]
    },
    11: {
        name: "Nước rửa chén Hương Chanh 10L Asahi",
        price: "200.000đ",
        description: "Nước rửa chén đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocRuaChen/HuongChanh.jpg.JPG",
            "./Images/NuocRuaChen/RuaChen_800L/HuongChanh.jpg.JPG",
            "./Images/NuocRuaChen/HuongQue.jpg.JPG"
        ]
    },
    12: {
        name: "Nước rửa chén Hương Quế 10L Asahi",
        price: "200.000đ",
        description: "Nước rửa chén đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocRuaChen/HuongQue.jpg.JPG",
            "./Images/NuocRuaChen/RuaChen_800L/HuongQue.jpg.JPG",
            "./Images/NuocRuaChen/HuongChanh.jpg.JPG"
        ]
    },
    13: {
        name: "Nước rửa chén Hương Chanh 800mL Asahi",
        price: "28.000đ",
        description: "Nước rửa chén đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocRuaChen/RuaChen_800L/HuongChanh.jpg.JPG",
            "./Images/NuocRuaChen/HuongChanh.jpg.JPG",
            "./Images/NuocRuaChen/HuongQue.jpg.JPG"
        ]
    },
    14: {
        name: "Nước rửa chén Hương Quế 800mL Asahi",
        price: "28.000đ",
        description: "Nước rửa chén đậm đặc, làm sạch hiệu quả",
        images: [
            "./Images/NuocRuaChen/RuaChen_800L/HuongQue.jpg.JPG",
            "./Images/NuocRuaChen/HuongQue.jpg.JPG",
            "./Images/NuocRuaChen/HuongChanh.jpg.JPG"
        ]
    },
    15: {
        name: "Nước Lau Sàn Hương Hoa Ly 10L Asahi",
        price: "100.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG",
            "./Images/NuocLauSan/Loai_1L/HoaLy_1L.JPG",
            "./Images/NuocLauSan/HuongQue.jpg.JPG"
        ]
    },
    16: {
        name: "Nước Lau Sàn Hương Quế 10L Asahi",
        price: "100.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/HuongQue.jpg.JPG",
            "./Images/NuocLauSan/Loai_1L/HuongQue_1L.JPG",
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG"
        ]
    },
    17: {
        name: "Nước Lau Sàn Hương Chanh Sả 10L Asahi",
        price: "100.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/TranhSa.jpg.JPG",
            "./Images/NuocLauSan/Loai_1L/ChanhSa_1L.JPG",
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG"
        ]
    },
    18: {
        name: "Nước Lau Sàn Hương Hoa Ly 1L Asahi",
        price: "50.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/Loai_1L/HoaLy_1L.JPG",
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG",
            "./Images/NuocLauSan/HuongQue.jpg.JPG"
        ]
    },
    19: {
        name: "Nước Lau Sàn Hương Quế 1L Asahi",
        price: "50.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/Loai_1L/HuongQue_1L.JPG",
            "./Images/NuocLauSan/HuongQue.jpg.JPG",
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG"
        ]
    },
    20: {
        name: "Nước Lau Sàn Hương Chanh Sả 1L Asahi",
        price: "50.000đ",
        description: "Nước lau sàn đậm đặc, làm sạch hiệu quả, mang lại hương thơm cho khắp căn phòng",
        images: [
            "./Images/NuocLauSan/Loai_1L/ChanhSa_1L.JPG",
            "./Images/NuocLauSan/TranhSa.jpg.JPG",
            "./Images/NuocLauSan/HuongHoaLy.jpg.JPG"
        ]
    }
};

// Khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Lấy ID sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && products[productId]) {
        loadProductDetails(productId);
    }

    // Elements
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const quantityInput = document.querySelector('.quantity-input');
    const decreaseBtn = document.querySelector('.decrease-quantity');
    const increaseBtn = document.querySelector('.increase-quantity');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');

    // Product data (to be replaced with actual data)
    const product = {
        id: productId,
        name: products[productId].name,
        price: products[productId].price,
        images: products[productId].images,
        description: products[productId].description,
        stock: 50
    };

    // Initialize thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            // Change main image with fade effect
            changeMainImage(thumbnail.querySelector('img').src);
        });
    });

    // Change main image with fade effect
    function changeMainImage(newSrc) {
        mainImage.classList.add('fade');
        setTimeout(() => {
            mainImage.src = newSrc;
            mainImage.classList.remove('fade');
        }, 300);
    }

    // Quantity controls
    function updateQuantity(newValue) {
        const value = parseInt(newValue);
        if (isNaN(value)) return;
        
        // Ensure quantity is between 1 and stock
        if (value < 1) {
            quantityInput.value = 1;
        } else if (value > product.stock) {
            quantityInput.value = product.stock;
        } else {
            quantityInput.value = value;
        }
    }

    decreaseBtn.addEventListener('click', () => {
        updateQuantity(parseInt(quantityInput.value) - 1);
    });

    increaseBtn.addEventListener('click', () => {
        updateQuantity(parseInt(quantityInput.value) + 1);
    });

    quantityInput.addEventListener('change', (e) => {
        updateQuantity(e.target.value);
    });

    // Cart functionality
    function addToCart() {
        const quantity = parseInt(quantityInput.value);
        const cartItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.images[0]
        };

        // Get existing cart or initialize empty array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if product already exists in cart
        const existingItemIndex = cart.findIndex(item => item.productId === product.id);
        
        if (existingItemIndex !== -1) {
            // Update quantity if product exists
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item if product doesn't exist
            cart.push(cartItem);
        }

        // Save updated cart
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Show success message
        showNotification('Đã thêm sản phẩm vào giỏ hàng!');
        
        // Update cart count in header
        updateCartCount();
    }

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Update cart count in header
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    // Add event listeners for cart actions
    addToCartBtn.addEventListener('click', addToCart);
    
    buyNowBtn.addEventListener('click', () => {
        addToCart();
        window.location.href = 'gio-hang.html';
    });

    // Initialize cart count on page load
    updateCartCount();
});

// Hàm load chi tiết sản phẩm
function loadProductDetails(productId) {
    const product = products[productId];
    if (!product) return;

    // Cập nhật thông tin sản phẩm
    document.querySelector('.product-title').textContent = product.name;
    document.querySelector('.current-price').textContent = product.price;
    
    // Cập nhật mô tả sản phẩm
    const descriptionElement = document.querySelector('.product-description');
    if (descriptionElement) {
        // Kiểm tra xem có phần tử p bên trong không
        const descriptionParagraph = descriptionElement.querySelector('p');
        if (descriptionParagraph) {
            descriptionParagraph.textContent = product.description;
        } else {
            // Nếu không có phần tử p, thêm trực tiếp vào descriptionElement
            descriptionElement.textContent = product.description;
        }
    }

    // Cập nhật ảnh chính
    const mainImage = document.getElementById('main-product-image');
    if (mainImage && product.images.length > 0) {
        mainImage.src = product.images[0];
    }

    // Cập nhật thumbnails
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = '';
        product.images.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img;
            thumbnail.alt = `${product.name} - Ảnh ${index + 1}`;
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.addEventListener('click', function() {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                mainImage.src = this.src;
            });
            thumbnailContainer.appendChild(thumbnail);
        });
    }
} 