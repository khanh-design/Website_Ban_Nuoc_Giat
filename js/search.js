// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search script loaded');
    
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.querySelector('.search-container');
    const searchButton = document.querySelector('.search-button');

    // Check if elements exist
    if (!searchForm || !searchInput || !searchToggle || !searchContainer || !searchButton) {
        console.error('Search elements not found');
        return;
    }

    // Toggle search bar visibility when clicking the search toggle
    searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Search toggle clicked');
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Handle search form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        console.log('Search submitted:', searchTerm);
        
        if (searchTerm) {
            // Redirect to products page with search query
            window.location.href = `san-pham.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });

    // Close search bar when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target) && e.target !== searchToggle) {
            searchContainer.classList.remove('active');
        }
    });

    // Add keyboard event for Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm) {
                window.location.href = `san-pham.html?search=${encodeURIComponent(searchTerm)}`;
            }
        }
    });

    // Close search bar when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
        }
    });

    // Add click event to the search icon in the header
    const searchIcon = document.querySelector('.search-button i');
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });
    }
});
