// Product data
const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      category: "headphones",
      price: 249.99,
      originalPrice: 299.99,
      discount: 17,
      image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "New",
      rating: 4.8,
      inStock: true,
      description: "Experience crystal-clear sound with these premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cups.",
      features: [
        "Active noise cancellation",
        "30-hour battery life",
        "Bluetooth 5.0",
        "Built-in microphone",
        "Touch controls"
      ],
      colors: ["#000000", "#FFFFFF", "#1E3A8A"],
      thumbnail: [
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 2,
      title: "Ultra-Thin Laptop Pro",
      category: "laptops",
      price: 1299.99,
      originalPrice: 1499.99,
      discount: 13,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "Bestseller",
      rating: 4.9,
      inStock: true,
      description: "The thinnest and lightest laptop we've ever made. Featuring a stunning Retina display, all-day battery life, and powerful performance for all your tasks.",
      features: [
        "13.3-inch Retina display",
        "10-core CPU",
        "16GB unified memory",
        "512GB SSD storage",
        "20-hour battery life"
      ],
      colors: ["#C0C0C0", "#696969", "#FFD700"],
      thumbnail: [
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 3,
      title: "Smart Watch Series 7",
      category: "accessories",
      price: 399.99,
      originalPrice: 449.99,
      discount: 11,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "Featured",
      rating: 4.7,
      inStock: true,
      description: "Stay connected and track your fitness with this advanced smartwatch. Features include a larger always-on display, blood oxygen sensor, and ECG app.",
      features: [
        "Always-on Retina display",
        "Blood oxygen sensor",
        "ECG app",
        "Water resistant to 50 meters",
        "18-hour battery life"
      ],
      colors: ["#000000", "#FF0000", "#1E3A8A", "#808080"],
      thumbnail: [
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2110483/pexels-photo-2110483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 4,
      title: "Pro Smartphone 13",
      category: "phones",
      price: 999.99,
      originalPrice: 1099.99,
      discount: 9,
      image: "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "Limited",
      rating: 4.9,
      inStock: true,
      description: "Our most advanced smartphone featuring a Super Retina XDR display with ProMotion, a pro camera system, and an all-day battery life.",
      features: [
        "6.1-inch Super Retina XDR display",
        "Pro camera system",
        "A15 Bionic chip",
        "5G capable",
        "Up to 28 hours of video playback"
      ],
      colors: ["#000000", "#C0C0C0", "#FFD700", "#008000"],
      thumbnail: [
        "https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 5,
      title: "Wireless Earbuds Pro",
      category: "headphones",
      price: 179.99,
      originalPrice: 199.99,
      discount: 10,
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "Popular",
      rating: 4.6,
      inStock: true,
      description: "Enjoy immersive sound with these comfortable wireless earbuds. Featuring active noise cancellation, spatial audio, and a wireless charging case.",
      features: [
        "Active noise cancellation",
        "Spatial audio",
        "Wireless charging case",
        "Sweat and water resistant",
        "24-hour battery life"
      ],
      colors: ["#000000", "#FFFFFF"],
      thumbnail: [
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 6,
      title: "4K Ultra HD Smart TV",
      category: "accessories",
      price: 1499.99,
      originalPrice: 1799.99,
      discount: 17,
      image: "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "Sale",
      rating: 4.8,
      inStock: true,
      description: "Experience stunning 4K resolution with this smart TV. Featuring HDR, Dolby Vision, and built-in streaming apps for endless entertainment.",
      features: [
        "65-inch 4K Ultra HD display",
        "HDR and Dolby Vision",
        "Smart TV with built-in apps",
        "Voice remote control",
        "Multiple HDMI and USB ports"
      ],
      colors: ["#000000"],
      thumbnail: [
        "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5552788/pexels-photo-5552788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5552791/pexels-photo-5552791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 7,
      title: "Gaming Laptop Elite",
      category: "laptops",
      price: 1999.99,
      originalPrice: 2299.99,
      discount: 13,
      image: "https://images.pexels.com/photos/4862450/pexels-photo-4862450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "Hot",
      rating: 4.7,
      inStock: true,
      description: "Dominate games with this powerful gaming laptop. Featuring a high-refresh display, advanced thermal cooling, and top-tier graphics for a smooth gaming experience.",
      features: [
        "15.6-inch 240Hz display",
        "NVIDIA RTX 3080 graphics",
        "Intel Core i9 processor",
        "32GB DDR4 RAM",
        "1TB NVMe SSD"
      ],
      colors: ["#000000", "#FF0000"],
      thumbnail: [
        "https://images.pexels.com/photos/4862450/pexels-photo-4862450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    },
    {
      id: 8,
      title: "Foldable Smartphone Z",
      category: "phones",
      price: 1399.99,
      originalPrice: 1599.99,
      discount: 13,
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      badge: "New",
      rating: 4.5,
      inStock: true,
      description: "Experience the future with this innovative foldable smartphone. Unfold to reveal a tablet-sized screen, perfect for multitasking and entertainment.",
      features: [
        "7.6-inch foldable display",
        "Cover display: 6.2 inches",
        "Triple rear camera system",
        "Under-display camera",
        "5G capable"
      ],
      colors: ["#000000", "#008000", "#800080"],
      thumbnail: [
        "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1114907/pexels-photo-1114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ]
    }
  ];
  
  // DOM elements
  document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('products-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cartBtn = document.querySelector('.cart-btn');
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total span:last-child');
    const menuToggle = document.querySelector('.menu-toggle');
    const productModal = document.getElementById('product-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    // Create mobile menu elements
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <button class="mobile-menu-close">×</button>
      <div class="mobile-menu-header">
        <div class="logo">
          <a href="index.html">Lumina</a>
        </div>
      </div>
      <nav class="mobile-nav">
        <ul class="mobile-nav-list">
          <li><a href="#" class="mobile-nav-link active">Home</a></li>
          <li><a href="#products" class="mobile-nav-link">Products</a></li>
          <li><a href="#" class="mobile-nav-link">Categories</a></li>
          <li><a href="#" class="mobile-nav-link">Deals</a></li>
          <li><a href="#" class="mobile-nav-link">About</a></li>
        </ul>
      </nav>
    `;
    
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    
    document.body.appendChild(mobileMenu);
    document.body.appendChild(mobileMenuOverlay);
    
    // Store cart data
    let cart = [];
    
    // Initialize the page
    init();
    
    // Initialize function
    function init() {
      renderProducts('all');
      setupEventListeners();
      updateCartDisplay();
      animateOnScroll();
    }
    
    // Setup event listeners
    function setupEventListeners() {
      // Filter buttons
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const category = btn.getAttribute('data-filter');
          renderProducts(category);
        });
      });
      
      // Cart button
      cartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.cart-container').classList.toggle('active');
      });
      
      // Close cart when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.cart-container')) {
          document.querySelector('.cart-container').classList.remove('active');
        }
      });
      
      // Mobile menu toggle
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      
      // Mobile menu close
      document.querySelector('.mobile-menu-close').addEventListener('click', closeMobileMenu);
      mobileMenuOverlay.addEventListener('click', closeMobileMenu);
      
      // Modal close
      modalClose.addEventListener('click', closeModal);
      productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
          closeModal();
        }
      });
      
      // Mobile nav links
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          closeMobileMenu();
        });
      });
      
      // Newsletter form
      const newsletterForm = document.querySelector('.newsletter-form');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = e.target.querySelector('input').value;
          if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            e.target.reset();
          }
        });
      }
      
      // Search functionality
      searchBtn.addEventListener('click', handleSearch);
      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      });
    }
    
    // Render products
    function renderProducts(category) {
      if (!productsGrid) return;
      
      productsGrid.innerHTML = '';
      let filteredProducts = products;
      
      if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
      }
      
      if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
      }
      
      filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.category = product.category;
        productCard.dataset.id = product.id;
        
        productCard.innerHTML = `
          <div class="product-img-container">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <button class="product-wishlist" data-id="${product.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
            </button>
          </div>
          <div class="product-content">
            <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">
              <span class="current-price">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discount-percentage">-${product.discount}%</span>
              ` : ''}
            </div>
            <div class="product-actions">
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
              <button class="quick-view" data-id="${product.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
        `;
        
        productsGrid.appendChild(productCard);
        
        // Add event listeners for product card buttons
        productCard.querySelector('.add-to-cart').addEventListener('click', () => {
          addToCart(product);
        });
        
        productCard.querySelector('.quick-view').addEventListener('click', () => {
          openProductModal(product);
        });
        
        productCard.querySelector('.product-wishlist').addEventListener('click', (e) => {
          e.currentTarget.classList.toggle('active');
        });
      });
    }
    
    // Add to cart function
    function addToCart(product) {
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }
      
      updateCartDisplay();
      showAddedToCartNotification(product.title);
    }
    
    // Remove from cart function
    function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      updateCartDisplay();
    }
    
    // Update cart quantity
    function updateCartQuantity(id, change) {
      const item = cart.find(item => item.id === id);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          removeFromCart(id);
        } else {
          updateCartDisplay();
        }
      }
    }
    
    // Update cart display
    function updateCartDisplay() {
      cartItems.innerHTML = '';
      
      if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      } else {
        cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
          cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
              <h4 class="cart-item-title">${item.title}</h4>
              <p class="cart-item-price">$${item.price.toFixed(2)}</p>
              <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
              </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">×</button>
          `;
          
          cartItems.appendChild(cartItem);
          
          // Add event listeners for cart item buttons
          cartItem.querySelector('.minus').addEventListener('click', () => {
            updateCartQuantity(item.id, -1);
          });
          
          cartItem.querySelector('.plus').addEventListener('click', () => {
            updateCartQuantity(item.id, 1);
          });
          
          cartItem.querySelector('.cart-item-remove').addEventListener('click', () => {
            removeFromCart(item.id);
          });
        });
      }
      
      // Update cart count and total
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      cartCount.textContent = totalItems;
      cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
      
      // Add event listener for checkout button
      const checkoutBtn = document.querySelector('.checkout-btn');
      checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
          alert('Proceeding to checkout...');
        } else {
          alert('Your cart is empty.');
        }
      });
    }
    
    // Open product modal
    function openProductModal(product) {
      modalBody.innerHTML = `
        <div class="product-detail">
          <div class="product-detail-gallery">
            <div class="product-detail-main-img">
              <img src="${product.image}" alt="${product.title}" id="main-product-img">
            </div>
            <div class="product-detail-thumbnails">
              ${product.thumbnail.map((img, index) => `
                <div class="product-thumbnail ${index === 0 ? 'active' : ''}" data-src="${img}">
                  <img src="${img}" alt="${product.title} thumbnail ${index + 1}">
                </div>
              `).join('')}
            </div>
          </div>
          <div class="product-detail-info">
            <h2>${product.title}</h2>
            <div class="product-detail-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
            <div class="product-detail-price">
              $${product.price.toFixed(2)}
              ${product.originalPrice ? `
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discount-percentage">-${product.discount}%</span>
              ` : ''}
            </div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-detail-meta">
              <div class="product-meta-item">
                <span class="meta-label">Availability:</span>
                <span>${product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
              <div class="product-meta-item">
                <span class="meta-label">Rating:</span>
                <span>${product.rating}/5</span>
              </div>
            </div>
            <div class="product-colors">
              ${product.colors.map((color, index) => `
                <div class="color-option ${index === 0 ? 'active' : ''}" style="background-color: ${color};" data-color="${color}"></div>
              `).join('')}
            </div>
            <div class="product-quantity">
              <span class="quantity-label">Quantity:</span>
              <button class="quantity-btn minus">-</button>
              <span class="quantity-value">1</span>
              <button class="quantity-btn plus">+</button>
            </div>
            <div class="product-detail-actions">
              <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
              <button class="wishlist-btn" data-id="${product.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
      
      productModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Set up modal event listeners
      setupModalEventListeners(product);
    }
    
    // Setup event listeners for the modal
    function setupModalEventListeners(product) {
      const thumbnails = document.querySelectorAll('.product-thumbnail');
      const mainImage = document.getElementById('main-product-img');
      const colorOptions = document.querySelectorAll('.color-option');
      const quantityValue = document.querySelector('.product-detail .quantity-value');
      const minusBtn = document.querySelector('.product-detail .minus');
      const plusBtn = document.querySelector('.product-detail .plus');
      const addToCartBtn = document.querySelector('.add-to-cart-btn');
      const wishlistBtn = document.querySelector('.wishlist-btn');
      
      let quantity = 1;
      
      // Thumbnail click
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          const src = thumbnail.getAttribute('data-src');
          mainImage.src = src;
          thumbnails.forEach(t => t.classList.remove('active'));
          thumbnail.classList.add('active');
        });
      });
      
      // Color options
      colorOptions.forEach(color => {
        color.addEventListener('click', () => {
          colorOptions.forEach(c => c.classList.remove('active'));
          color.classList.add('active');
        });
      });
      
      // Quantity buttons
      minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          quantityValue.textContent = quantity;
        }
      });
      
      plusBtn.addEventListener('click', () => {
        quantity++;
        quantityValue.textContent = quantity;
      });
      
      // Add to cart
      addToCartBtn.addEventListener('click', () => {
        for (let i = 0; i < quantity; i++) {
          addToCart(product);
        }
        closeModal();
      });
      
      // Wishlist
      wishlistBtn.addEventListener('click', () => {
        wishlistBtn.classList.toggle('active');
      });
    }
    
    // Close modal
    function closeModal() {
      productModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    // Close mobile menu
    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    // Handle search
    function handleSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      
      if (searchTerm === '') {
        renderProducts('all');
        return;
      }
      
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
      );
      
      if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found matching your search.</p>';
      } else {
        productsGrid.innerHTML = '';
        filteredProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.dataset.category = product.category;
          productCard.dataset.id = product.id;
          
          productCard.innerHTML = `
            <div class="product-img-container">
              <img src="${product.image}" alt="${product.title}" class="product-img">
              ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
              <button class="product-wishlist" data-id="${product.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>
              </button>
            </div>
            <div class="product-content">
              <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
              <h3 class="product-title">${product.title}</h3>
              <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${product.originalPrice ? `
                  <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                  <span class="discount-percentage">-${product.discount}%</span>
                ` : ''}
              </div>
              <div class="product-actions">
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="quick-view" data-id="${product.id}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </div>
            </div>
          `;
          
          productsGrid.appendChild(productCard);
          
          // Add event listeners for product card buttons
          productCard.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
          });
          
          productCard.querySelector('.quick-view').addEventListener('click', () => {
            openProductModal(product);
          });
          
          productCard.querySelector('.product-wishlist').addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('active');
          });
        });
      }
      
      // Reset filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('[data-filter="all"]').classList.add('active');
    }
    
    // Show "Added to Cart" notification
    function showAddedToCartNotification(productTitle) {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = `"${productTitle}" added to cart`;
      
      // Add styles
      notification.style.position = 'fixed';
      notification.style.bottom = '20px';
      notification.style.right = '20px';
      notification.style.backgroundColor = 'var(--color-primary)';
      notification.style.color = 'white';
      notification.style.padding = '12px 20px';
      notification.style.borderRadius = '4px';
      notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      notification.style.zIndex = '1000';
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
      notification.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      document.body.appendChild(notification);
      
      // Trigger animation
      setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
      }, 10);
      
      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
      const sections = document.querySelectorAll('section');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            
            // Animate children with delay
            const children = entry.target.querySelectorAll('.featured-card, .category-card, .product-card');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('slideInUp');
              }, 100 * index);
            });
          }
        });
      }, { threshold: 0.1 });
      
      sections.forEach(section => {
        observer.observe(section);
      });
    }
    
    // Sticky header on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
      }
      
      lastScrollTop = scrollTop;
    });
  });