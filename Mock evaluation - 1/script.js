// app.js

document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category-select');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const productGrid = document.getElementById('product-grid');
  
    // Fetch products from the FakeStoreAPI
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }
  
    // Populate categories dropdown
    async function populateCategories() {
      const products = await fetchProducts();
      const categories = ['All Categories', ...new Set(products.map(product => product.category))];
      categories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category;
        categorySelect.appendChild(option);
      });
    }
  
    // Render products
    async function renderProducts() {
      productGrid.innerHTML = '';
      const products = await fetchProducts();
      const selectedCategory = categorySelect.value;
      const searchTerm = searchInput.value.toLowerCase();
      const sortBy = sortSelect.value;
  
      let filteredProducts = products.filter(product => {
        if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
          return false;
        }
        if (searchTerm && !product.title.toLowerCase().includes(searchTerm)) {
          return false;
        }
        return true;
      });
  
      if (sortBy === 'asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
  
      filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>$${product.price}</p>
        `;
        productGrid.appendChild(productItem);
      });
    }
  
    // Event listeners
    categorySelect.addEventListener('change', renderProducts);
    searchInput.addEventListener('input', renderProducts);
    sortSelect.addEventListener('change', renderProducts);
  
    // Initial setup
    populateCategories();
    renderProducts();
  });
  