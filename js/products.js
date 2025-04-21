document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các sản phẩm
    const products = document.querySelectorAll('.product-card');
    const productsPerPage = 8;
    let currentPage = 1;
    let currentCategory = 'all';
    let currentSearch = '';

    // Hàm đếm số sản phẩm theo danh mục và từ khóa tìm kiếm
    function countProductsByCategoryAndSearch(category, search) {
        return Array.from(products).filter(product => {
            const matchesCategory = category === 'all' || product.getAttribute('data-category') === category;
            const matchesSearch = !search || 
                product.querySelector('h3').textContent.toLowerCase().includes(search) ||
                product.querySelector('.product-description').textContent.toLowerCase().includes(search);
            return matchesCategory && matchesSearch;
        }).length;
    }

    // Hàm hiển thị sản phẩm theo trang, danh mục và từ khóa tìm kiếm
    function showProducts(page, category, search) {
        const filteredProducts = Array.from(products).filter(product => {
            const matchesCategory = category === 'all' || product.getAttribute('data-category') === category;
            const matchesSearch = !search || 
                product.querySelector('h3').textContent.toLowerCase().includes(search) ||
                product.querySelector('.product-description').textContent.toLowerCase().includes(search);
            return matchesCategory && matchesSearch;
        });
        
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        
        products.forEach(product => {
            product.style.display = 'none';
        });
        
        filteredProducts.slice(start, end).forEach(product => {
            product.style.display = 'block';
        });
    }

    // Xử lý pagination
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageNumbers = document.querySelectorAll('.pagination-numbers .pagination-btn');

    function updatePagination() {
        const totalProducts = countProductsByCategoryAndSearch(currentCategory, currentSearch);
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        
        // Cập nhật trạng thái nút prev/next
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        
        // Cập nhật trạng thái số trang
        pageNumbers.forEach((btn, index) => {
            btn.classList.toggle('active', index + 1 === currentPage);
            btn.style.display = index < totalPages ? 'flex' : 'none';
        });
    }

    // Xử lý sự kiện click nút pagination
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('prev')) {
                if (currentPage > 1) currentPage--;
            } else if (this.classList.contains('next')) {
                const totalProducts = countProductsByCategoryAndSearch(currentCategory, currentSearch);
                const totalPages = Math.ceil(totalProducts / productsPerPage);
                if (currentPage < totalPages) currentPage++;
            } else {
                currentPage = parseInt(this.textContent);
            }
            
            showProducts(currentPage, currentCategory, currentSearch);
            updatePagination();
        });
    });

    // Xử lý filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Cập nhật trạng thái active
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Cập nhật danh mục hiện tại
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            
            showProducts(currentPage, currentCategory, currentSearch);
            updatePagination();
        });
    });

    // Xử lý tìm kiếm
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery) {
        currentSearch = searchQuery.toLowerCase();
        // Cập nhật giá trị ô tìm kiếm
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchQuery;
        }
    }

    // Khởi tạo
    showProducts(currentPage, currentCategory, currentSearch);
    updatePagination();
}); 