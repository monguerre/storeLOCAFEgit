        // Base de datos de productos
        const products = [
            {
                id: 1,
                name: "Tenis Running UltraBoost",
                price: 1299,
                category: "tenis",
                gender: "hombre",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "Tenis Basketball AirMax",
                price: 1599,
                category: "tenis",
                gender: "hombre",
                image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Tenis Casual Urban",
                price: 899,
                category: "tenis",
                gender: "mujer",
                image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Playera Deportiva DryFit",
                price: 349,
                category: "playeras",
                gender: "mujer",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                name: "Playera Basketball Elite",
                price: 429,
                category: "playeras",
                gender: "hombre",
                image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                name: "Playera Running Aeroready",
                price: 299,
                category: "playeras",
                gender: "mujer",
                image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                name: "Short Deportivo Flex",
                price: 399,
                category: "shorts",
                gender: "hombre",
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                name: "Short Basketball Pro",
                price: 459,
                category: "shorts",
                gender: "hombre",
                image: "https://images.unsplash.com/photo-1590239926049-9b5b4d1e2d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 9,
                name: "Short Running Aerodynamic",
                price: 379,
                category: "shorts",
                gender: "mujer",
                image: "https://images.unsplash.com/photo-1520256862855-398aa710b1a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 10,
                name: "Mochila Deportiva",
                price: 599,
                category: "accesorios",
                gender: "hombre",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 11,
                name: "Gorra Deportiva",
                price: 249,
                category: "accesorios",
                gender: "mujer",
                image: "https://images.unsplash.com/photo-1575428652377-a2d80dfd5cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 12,
                name: "Medias Deportivas",
                price: 99,
                category: "accesorios",
                gender: "mujer",
                image: "https://images.unsplash.com/photo-1598908314732-537173e305d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
        ];
        
        // Variables globales
        let cart = [];
        const cartIcon = document.getElementById('cartIcon');
        const cartContainer = document.getElementById('cartContainer');
        const closeCart = document.getElementById('closeCart');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const productsGrid = document.getElementById('productsGrid');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const genderButtons = document.querySelectorAll('.gender-btn');
        let currentCategory = 'all';
        let currentGender = 'all';
        const cartOverlay = document.getElementById('cartOverlay');
        
        // Función para alternar el carrito
        function toggleCart() {
            cartContainer.classList.toggle('open');
            cartOverlay.classList.toggle('active');
            
            // Deshabilitar scroll del body cuando el carrito está abierto
            if (cartContainer.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
        
        // Mostrar productos en la página
        function displayProducts() {
            productsGrid.innerHTML = '';

            const filteredProducts = products.filter(product => {
                const categoryMatch = currentCategory === 'all' || product.category === currentCategory;
                const genderMatch = currentGender === 'all' || product.gender === currentGender;
                return categoryMatch && genderMatch;
            });
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn minus" data-id="${product.id}">-</button>
                            <span class="quantity" data-id="${product.id}">0</span>
                            <button class="quantity-btn plus" data-id="${product.id}">+</button>
                        </div>
                        <button class="add-to-cart" data-id="${product.id}">Añadir al carrito</button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
            
            // Agregar event listeners a los botones recién creados
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    removeFromCart(productId);
                });
            });
        }
        
        // Función para añadir al carrito
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCartUI();
            updateQuantityDisplay(productId, existingItem ? existingItem.quantity : 1);
        }
        
        // Función para quitar del carrito
        function removeFromCart(productId) {
            const existingItemIndex = cart.findIndex(item => item.id === productId);
            
            if (existingItemIndex !== -1) {
                const existingItem = cart[existingItemIndex];
                
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    cart.splice(existingItemIndex, 1);
                }
                
                updateCartUI();
                updateQuantityDisplay(productId, existingItem.quantity > 1 ? existingItem.quantity : 0);
            }
        }
        
        // Actualizar la visualización de cantidad en la tarjeta de producto
        function updateQuantityDisplay(productId, quantity) {
            const quantityElement = document.querySelector(`.quantity[data-id="${productId}"]`);
            if (quantityElement) {
                quantityElement.textContent = quantity;
            }
        }
        
        // Actualizar la UI del carrito
        function updateCartUI() {
            // Actualizar contador del carrito
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Actualizar lista de productos en el carrito
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Tu carrito está vacío</p>';
                cartTotal.textContent = '0.00';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="cart-quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="cart-quantity">${item.quantity}</span>
                            <button class="cart-quantity-btn plus" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            // Actualizar el total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total.toFixed(2);
            
            // Agregar event listeners a los botones del carrito
            document.querySelectorAll('.cart-quantity-btn.minus').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    removeFromCart(productId);
                });
            });
            
            document.querySelectorAll('.cart-quantity-btn.plus').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.remove-item').dataset.id);
                    removeAllOfItem(productId);
                });
            });
        }
        
        // Función para eliminar todos los productos de un tipo del carrito
        function removeAllOfItem(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
            updateQuantityDisplay(productId, 0);
        }
        
        // Función para generar el mensaje de WhatsApp
        function generateWhatsAppMessage() {
            if (cart.length === 0) return;
            
            let message = "¡Hola! Estoy interesado en comprar los siguientes productos:%0A%0A";
            
            cart.forEach(item => {
                message += `- ${item.name} (${item.quantity} unidad${item.quantity > 1 ? 'es' : ''}) - $${(item.price * item.quantity).toFixed(2)}%0A`;
            });
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            message += `%0ATotal: $${total.toFixed(2)}%0A%0A`;
            message += "Por favor, confírmame disponibilidad y forma de pago. ¡Gracias!";
            
            return message;
        }
        
        // Event Listeners
        cartIcon.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
        cartOverlay.addEventListener('click', toggleCart);
        
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Tu carrito está vacío. Agrega productos antes de comprar.');
                return;
            }
            
            const message = generateWhatsAppMessage();
            const phoneNumber = "521234567890"; // Reemplaza con tu número real
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            
            window.open(whatsappUrl, '_blank');
        });
        
        // Filtrado por categorías
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                currentCategory = button.dataset.category;
                displayProducts();
            });
        });

        // Filtrado por género
        genderButtons.forEach(button => {
            button.addEventListener('click', () => {
                genderButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                currentGender = button.dataset.gender;
                displayProducts();
            });
        });

        // Inicializar la página
        displayProducts();

