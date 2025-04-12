document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các sản phẩm
    const products = document.querySelectorAll('.product-card');
    const productsPerPage = 4;
    let currentPage = 1;
    let currentCategory = 'all';

    // Hàm hiển thị sản phẩm theo trang và danh mục
    function showProducts(page, category) {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        
        products.forEach((product, index) => {
            const productCategory = product.getAttribute('data-category');
            const isVisible = (category === 'all' || productCategory === category) && 
                            index >= start && index < end;
            
            product.style.display = isVisible ? 'block' : 'none';
        });
    }

    // Xử lý pagination
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageNumbers = document.querySelectorAll('.pagination-numbers .pagination-btn');

    function updatePagination() {
        const totalPages = Math.ceil(products.length / productsPerPage);
        
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
                if (currentPage < Math.ceil(products.length / productsPerPage)) currentPage++;
            } else {
                currentPage = parseInt(this.textContent);
            }
            
            showProducts(currentPage, currentCategory);
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
            
            showProducts(currentPage, currentCategory);
            updatePagination();
        });
    });

    // Khởi tạo
    showProducts(currentPage, currentCategory);
    updatePagination();
}); 