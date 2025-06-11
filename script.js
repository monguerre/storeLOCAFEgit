        // Base de datos de productos
        const products = [
            {
                id: 1,
                name: "Nike Dunk Low Retro",
                price: 1500,
                category: "tenis",
                gender: "hombre",
                image: "img/NIKE+DUNK+LOW+RETRO.jpg",
                talla: "27 28"
            },
            {
                id: 2,
                name: "Nike SB Heritage Vulc",
                price: 1700,
                category: "tenis",
                gender: "hombre",
                image: "img/NikeSB.jpg",
                talla: "27 28"
            },
            {
                id: 3,
                name: "Nike Air Max Alpha Trainer",
                price: 1400,
                category: "tenis",
                gender: "hombre",
                image: "img/nike-air-max-alpha-trainer.jpg",
                talla: "26"
            },
            {
                id: 4,
                name: "Air Jordan 1 Mid Game Royal",
                price: 2100,
                category: "tenis",
                gender: "hombre",
                image: "img/airJordan1MidGameRoyal.jpg",
                talla: "27 28"
            },
            {
                id: 5,
                name: "Air Jordan 1 Mid Legend Blue",
                price: 3200,
                category: "tenis",
                gender: "mujer",
                image: "img/airJordan1MidLegendBlue.jpg",
                talla: "27"
            },
            {
                id: 6,
                name: "New Balance 237",
                price: 1900,
                category: "tenis",
                gender: "hombre",
                image: "img/NB237.jpg",
                talla: "27"
            },
            {
                id: 7,
                name: "New Balance 997H Mujer",
                price: 1800,
                category: "tenis",
                gender: "mujer",
                image: "img/NB997hMujer.jpg",
                talla: "25"
            },
            {
                id: 8,
                name: "New Balance 997H Verde",
                price: 1850,
                category: "tenis",
                gender: "hombre",
                image: "img/NB997hverde.jpg",
                talla: "28"
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

                const sizes = product.talla
                    ? product.talla.replace(/\s*mx\s*/gi, '').trim().split(/\s+/)
                    : [];

                const sizeOptions = sizes.map(size => `
                    <label class="size-option">
                        <input type="checkbox" class="size-checkbox" name="size-${product.id}" value="${size}">
                        ${size}
                    </label>
                `).join('');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-sizes">${sizeOptions}</div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-id="${product.id}">Añadir al carrito</button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });

            // Agregar event listeners a los botones recién creados
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.dataset.id);
                    const card = e.target.closest('.product-card');
                    const selected = card.querySelector(`input[name="size-${productId}"]:checked`);
                    if (!selected) {
                        alert('Por favor selecciona una talla.');
                        return;
                    }
                    addToCart(productId, selected.value);
                });
            });
        }

        // Función para añadir al carrito
        function addToCart(productId, selectedSize) {
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);

            if (existingItem) {
                return; // No permitir más de uno del mismo producto con la misma talla
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: selectedSize,
                    quantity: 1
                });
            }

            updateCartUI();
        }

        // Función para quitar del carrito
        function removeFromCart(productId, size) {
            cart = cart.filter(item => !(item.id === productId && item.size === size));
            updateCartUI();
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
                        <div class="cart-item-size">Talla: ${item.size}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <button class="remove-item" data-id="${item.id}" data-size="${item.size}"><i class="fas fa-trash"></i></button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            // Actualizar el total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total.toFixed(2);
            
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = parseInt(e.target.closest('.remove-item').dataset.id);
                    const size = e.target.closest('.remove-item').dataset.size;
                    removeAllOfItem(productId, size);
                });
            });
        }

        // Función para eliminar todos los productos de un tipo del carrito
        function removeAllOfItem(productId, size) {
            cart = cart.filter(item => !(item.id === productId && item.size === size));
            updateCartUI();
        }
        
        // Función para generar el mensaje de WhatsApp
        function generateWhatsAppMessage() {
            if (cart.length === 0) return;
            
            let message = "¡Hola! Estoy interesado en comprar los siguientes productos:%0A%0A";
            
            cart.forEach(item => {
                message += `- ${item.name} (Talla: ${item.size}) - $${item.price.toFixed(2)}%0A`;
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

