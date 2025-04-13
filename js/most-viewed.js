// Lấy dữ liệu sản phẩm được xem nhiều nhất
async function loadMostViewedProducts() {
    try {
        const response = await fetch('data/products.json');
        const products = await response.json();
        
        // Sắp xếp sản phẩm theo số lượt xem (giảm dần)
        const mostViewedProducts = products
            .sort((a, b) => b.views - a.views)
            .slice(0, 4); // Lấy 4 sản phẩm được xem nhiều nhất

        displayMostViewedProducts(mostViewedProducts);
    } catch (error) {
        console.error('Error loading most viewed products:', error);
    }
}

// Hiển thị sản phẩm được xem nhiều nhất
function displayMostViewedProducts(products) {
    const productsGrid = document.querySelector('.most-viewed-products .products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <a href="chi-tiet-san-pham.html?id=${product.id}">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${product.price.toLocaleString('vi-VN')}đ</div>
                </div>
            </a>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Gọi hàm khi trang được tải
document.addEventListener('DOMContentLoaded', loadMostViewedProducts); 