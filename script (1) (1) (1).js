// Peta gambar kategori (file SVG asli di folder images/)
const categoryImageMap = {
  "Cat Air": "images/kategori-cat-air.svg",
  "Kertas": "images/kategori-kertas.svg",
  "Kuas": "images/kategori-kuas.svg",
  "Pensil": "images/kategori-pensil.svg",
  "Pena": "images/kategori-pena.svg"
};

// Database Perlengkapan Lukis Premium Artisuria
const defaultProducts = [
  { id: 101, name: "Schmincke Horadam Set", category: "Cat Air", price: 850000, stock: 8, desc: "Cat air kelas profesional impor Jerman dengan pigmen murni kualitas tertinggi.", icon: "🎨" },
  { id: 102, name: "Winsor & Newton Pan Set", category: "Cat Air", price: 345000, stock: 15, desc: "Set cat air compact ideal untuk ilustrator studio luar ruangan.", icon: "🎨" },
  { id: 103, name: "Canson Heritage Rag A4", category: "Kertas", price: 290000, stock: 12, desc: "Kertas lukis 100% katun cold pressed bertekstur mewah.", icon: "📄" },
  { id: 104, name: "Arches Watercolor Pad", category: "Kertas", price: 420000, stock: 5, desc: "Kertas katun murni buatan pabrik Prancis legendaris.", icon: "📄" },
  { id: 105, name: "Raphael Kolinsky Brush No.6", category: "Kuas", price: 310000, stock: 4, desc: "Kuas bulu alami pilihan dengan daya serap air luar biasa.", icon: "🖌️" },
  { id: 106, name: "Princeton Neptune Brush Set", category: "Kuas", price: 275000, stock: 10, desc: "Set kuas sintetis premium bertekstur lembut, ramah lingkungan (cruelty-free).", icon: "🖌️" },
  { id: 107, name: "Faber-Castell Polychromos", category: "Pensil", price: 950000, stock: 6, desc: "Pensil warna berbasis minyak premium tahan luntur cahaya jangka panjang.", icon: "✏️" },
  { id: 108, name: "Prismacolor Premier 72 Set", category: "Pensil", price: 680000, stock: 9, desc: "Set 72 warna pensil lunak dengan blending sangat halus untuk ilustrasi detail.", icon: "✏️" },
  { id: 109, name: "Sakura Pigma Micron Set", category: "Pena", price: 135000, stock: 25, desc: "Pena arsiran presisi dengan tinta pigmen arsiran waterproof.", icon: "🖋️" },
  { id: 110, name: "Copic Multiliner SP Set", category: "Pena", price: 210000, stock: 14, desc: "Pena liner tinta pigment tahan air dengan ujung refillable presisi tinggi.", icon: "🖋️" }
];

// Lengkapi setiap produk dengan gambar uniknya sendiri (fallback ke gambar kategori bila tidak tersedia)
defaultProducts.forEach(p => { p.image = `images/products/product-${p.id}.svg`; });

let products = JSON.parse(localStorage.getItem("art_products")) || defaultProducts;
// Migrasi data lama: pastikan setiap produk (termasuk yang tersimpan di localStorage versi sebelumnya) punya field image
products.forEach(p => { if (!p.image) p.image = `images/products/product-${p.id}.svg`; });
let cart = JSON.parse(localStorage.getItem("art_cart")) || [];
let salesHistory = JSON.parse(localStorage.getItem("art_sales")) || [];
let currentUser = JSON.parse(localStorage.getItem("art_session")) || null;
let currentCategory = "Semua";

document.addEventListener("DOMContentLoaded", () => {
  saveData();
  populateCategorySelects();
  renderWidgets();
  renderProducts();
  updateCartBadge();
  updateAuthUI();
  setupEventListeners();
});

function saveData() {
  localStorage.setItem("art_products", JSON.stringify(products));
  localStorage.setItem("art_cart", JSON.stringify(cart));
  localStorage.setItem("art_sales", JSON.stringify(salesHistory));
  localStorage.setItem("art_session", JSON.stringify(currentUser));
}

function switchView(viewId) {
  document.querySelectorAll(".view-section").forEach(sec => sec.style.display = "none");
  document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
  
  document.getElementById(`view-${viewId}`).style.display = "block";
  const targetNav = document.getElementById(`nav-${viewId}`);
  if(targetNav) targetNav.classList.add("active");

  if(viewId === 'admin') {
    renderAdminDashboard();
  } else if (viewId === 'overview') {
    let totalRev = salesHistory.reduce((sum, h) => sum + h.amount, 0);
    document.getElementById("an-revenue").innerText = `Rp ${totalRev.toLocaleString('id-ID')}`;
  }
}

function updateAuthUI() {
  const statusLabel = document.getElementById("authStatusLabel");
  const authLogBtn = document.getElementById("authLogBtn");

  if (currentUser) {
    statusLabel.innerText = `${currentUser.role.toUpperCase()} (${currentUser.email})`;
    authLogBtn.innerText = "Logout";
    authLogBtn.onclick = logoutAction;
  } else {
    statusLabel.innerText = "GUEST";
    authLogBtn.innerText = "Login / Register";
    authLogBtn.onclick = () => openLoginModal('customer');
  }

  const deniedDiv = document.getElementById("adminAccessDenied");
  const grantedDiv = document.getElementById("adminAccessGranted");
  if(currentUser && currentUser.role === 'admin') {
    if(deniedDiv) deniedDiv.style.display = "none";
    if(grantedDiv) grantedDiv.style.display = "block";
  } else {
    if(deniedDiv) deniedDiv.style.display = "block";
    if(grantedDiv) grantedDiv.style.display = "none";
  }
}

function openLoginModal(defaultRole) {
  document.getElementById("loginRoleTarget").value = defaultRole;
  document.getElementById("loginModalTitle").innerText = `${defaultRole.toUpperCase()} Gate Node`;
  document.getElementById("loginOverlay").classList.add("open");
}

function logoutAction() {
  currentUser = null;
  saveData();
  updateAuthUI();
  showToast("Session disconnected successfully.");
  switchView('katalog');
}

function populateCategorySelects() {
  const categories = ["Semua", ...new Set(products.map(p => p.category))];
  const selectHead = document.getElementById("headerCategorySelect");
  selectHead.innerHTML = categories.map(cat => `<option value="${cat}">${cat === 'Semua' ? 'All Categories' : cat}</option>`).join('');
}

function renderWidgets() {
  const categories = ["Semua", ...new Set(products.map(p => p.category))];
  const listWidget = document.getElementById("categoryWidgetList");
  
  listWidget.innerHTML = categories.map(cat => {
    let count = cat === "Semua" ? products.length : products.filter(p => p.category === cat).length;
    return `<li class="category-item ${cat === currentCategory ? 'active' : ''}" onclick="filterCat('${cat}')">
      <span>${cat === 'Semua' ? 'All Mediums' : cat}</span> <span>(${count})</span>
    </li>`;
  }).join('');

  const topRatedContainer = document.getElementById("topRatedWidgetContainer");
  const randomThree = products.slice(0, 3);
  topRatedContainer.innerHTML = randomThree.map(p => `
    <div class="widget-product-item">
      <div class="wp-img"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${categoryImageMap[p.category] || 'images/hero-banner.svg'}';"></div>
      <div class="wp-details">
        <h5>${p.name}</h5>
        <p>Rp ${p.price.toLocaleString('id-ID')}</p>
      </div>
    </div>
  `).join('');
}

function filterCat(cat) {
  currentCategory = cat;
  document.getElementById("headerCategorySelect").value = cat;
  renderWidgets();
  renderProducts();
}

function syncSearchCategory(cat) {
  currentCategory = cat;
  renderWidgets();
  renderProducts();
}

function syncSearchText(val) {
  document.getElementById("headerSearchInput").value = val;
  document.getElementById("sidebarSearchInput").value = val;
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const searchVal = document.getElementById("headerSearchInput").value.toLowerCase();
  const sortVal = document.getElementById("sortSelect").value;

  let filtered = products.filter(p => {
    return (currentCategory === "Semua" || p.category === currentCategory) &&
           (p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal));
  });

  if (sortVal === "price-asc") filtered.sort((a,b) => a.price - b.price);
  if (sortVal === "price-desc") filtered.sort((a,b) => b.price - a.price);
  if (sortVal === "name-asc") filtered.sort((a,b) => a.name.localeCompare(b.name));

  document.getElementById("resultCount").innerText = `Showing 1–${filtered.length} of ${filtered.length} results`;
  document.getElementById("emptyState").hidden = filtered.length > 0;

  grid.innerHTML = filtered.map(p => {
    return `
      <div class="product-card">
        <div class="pc-image-box"><img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${categoryImageMap[p.category] || 'images/hero-banner.svg'}';"></div>
        <div class="pc-info">
          <div>
            <div class="pc-category">${p.category}</div>
            <h4 class="pc-title">${p.name}</h4>
          </div>
          <div>
            <div class="pc-price">Rp ${p.price.toLocaleString('id-ID')}</div>
            <button class="btn-cart-add" ${p.stock === 0 ? 'disabled' : ''} onclick="addToCart(${p.id})">
              🛒 ${p.stock === 0 ? 'Out of Stock' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function addToCart(id) {
  if(!currentUser || currentUser.role !== 'customer') {
    showToast("Please login as Customer first!");
    openLoginModal('customer');
    return;
  }

  const prod = products.find(p => p.id === id);
  if(!prod || prod.stock <= 0) return;

  const inCart = cart.find(item => item.id === id);
  if(inCart) {
    if(inCart.qty < prod.stock) inCart.qty++;
    else return showToast("Available stock baseline hit.");
  } else {
    cart.push({ id: prod.id, name: prod.name, price: prod.price, icon: prod.icon, image: prod.image, qty: 1 });
  }
  updateCartBadge();
  saveData();
  showToast(`Item successfully queued in bag!`);
}

function updateCartBadge() {
  document.getElementById("cartCount").innerText = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCartItems() {
  const container = document.getElementById("cartItems");
  if(cart.length === 0) {
    container.innerHTML = "<p style='text-align:center; color:var(--text-muted); padding:3rem 0;'>Shopping bag workspace is empty.</p>";
    document.getElementById("cartTotal").innerText = "Rp 0";
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <div class="cr-img">${item.image ? `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='images/hero-banner.svg';">` : item.icon}</div>
      <div class="cr-info">
        <h5>${item.name}</h5>
        <div style="font-size:0.8rem; color:var(--primary); font-weight:bold; margin-top:2px;">Rp ${item.price.toLocaleString('id-ID')}</div>
        <div style="margin-top:0.4rem; display:flex; align-items:center; gap:5px;">
          <button class="cr-qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span><b>${item.qty}</b></span>
          <button class="cr-qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="auth-link" style="color:var(--primary); font-size:0.75rem;" onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `).join('');
  let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById("cartTotal").innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  const prod = products.find(p => p.id === id);
  if(delta > 0 && item.qty >= prod.stock) return showToast("Stock threshold reached.");
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartBadge();
  renderCartItems();
  saveData();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartBadge();
  renderCartItems();
  saveData();
}

function setupEventListeners() {
  document.getElementById("sortSelect").addEventListener("change", renderProducts);

  document.getElementById("cartBtn").addEventListener("click", () => {
    if(!currentUser || currentUser.role !== 'customer') {
      return showToast("Please authenticating as customer first.");
    }
    document.getElementById("cartOverlay").classList.add("open");
    renderCartItems();
  });

  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => document.getElementById(btn.dataset.close).classList.remove("open"));
  });

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if(cart.length === 0) return showToast("No ledger items to purchase.");
    document.getElementById("cartOverlay").classList.remove("open");
    document.getElementById("checkoutOverlay").classList.add("open");
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById("ckTotal").innerText = `Rp ${total.toLocaleString('id-ID')}`;
  });

  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();
    const roleTarget = document.getElementById("loginRoleTarget").value;

    if(!email || !pass) return showToast("Parameters field incomplete.");

    if (roleTarget === 'customer' && email === 'user@artisuria.com' && pass === 'user123') {
      currentUser = { email: email, role: 'customer' };
    } else if (roleTarget === 'admin' && email === 'admin@artisuria.com' && pass === 'admin123') {
      currentUser = { email: email, role: 'admin' };
    } else if (email === 'admin@artisuria.com' && pass === 'admin123') {
      currentUser = { email: email, role: 'admin' };
    } else if (email === 'user@artisuria.com' && pass === 'user123') {
      currentUser = { email: email, role: 'customer' };
    } else {
      return showToast("Credentials validation mismatch.");
    }

    saveData();
    updateAuthUI();
    document.getElementById("loginOverlay").classList.remove("open");
    document.getElementById("loginForm").reset();
    showToast(`Welcome Authorized ${currentUser.role.toUpperCase()}`);
    
    if(currentUser.role === 'admin') switchView('admin');
  });

  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("ckName").value.trim();
    const address = document.getElementById("ckAddress").value.trim();
    const paymentMethod = document.getElementById("ckPayment").value;

    if(!name || !address) return showToast("Delivery nodes parameter missing.");

    // Potong Stok
    cart.forEach(item => {
      const p = products.find(prod => prod.id === item.id);
      if(p) p.stock = Math.max(0, p.stock - item.qty);
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const invoiceId = "INV-" + Math.floor(10000 + Math.random() * 90000);
    
    // Simpan data transaksi baru ke salesHistory
    const transactionData = {
      id: invoiceId,
      customer: name,
      items: cart.map(i => `${i.name} (x${i.qty})`).join(', '),
      gateway: paymentMethod,
      amount: total
    };
    salesHistory.push(transactionData);

    // KEMBANGKAN FITUR BARU: GENERATE STRUK NOTA UNTUK POP-UP INVOICE SUCCESS
    const receiptContent = document.getElementById("receiptContent");
    let itemsHTML = cart.map(i => `
      <div class="receipt-row">
        <span>${i.name} x${i.qty}</span>
        <span>Rp ${(i.price * i.qty).toLocaleString('id-ID')}</span>
      </div>
    `).join('');

    receiptContent.innerHTML = `
      <div class="receipt-header">
        <h4>ARTISURIA LEDGER NOTA</h4>
        <small>Lembang, West Java</small>
      </div>
      <div class="receipt-row"><strong>Invoice ID:</strong> <span>${invoiceId}</span></div>
      <div class="receipt-row"><strong>Customer:</strong> <span>${name}</span></div>
      <div class="receipt-row"><strong>Gateway:</strong> <span>${paymentMethod}</span></div>
      <hr style="border: 0; border-top: 1px dashed #999; margin: 0.5rem 0;">
      ${itemsHTML}
      <hr style="border: 0; border-top: 1px dashed #999; margin: 0.5rem 0;">
      <div class="receipt-row" style="font-weight: bold; font-size: 0.95rem;">
        <span>TOTAL SETTLED:</span>
        <span style="color:#E91E63;">Rp ${total.toLocaleString('id-ID')}</span>
      </div>
      <div style="text-align: center; font-size: 0.75rem; color: #777; margin-top: 1rem; font-style: italic;">
        Thank you for purchasing premium art tools!
      </div>
    `;

    // Reset Cart & Simpan data ke localstorage
    cart = [];
    updateCartBadge();
    saveData();
    
    // Tutup modal checkout, Buka modal Tampilan Pop-up Nota Berhasil
    document.getElementById("checkoutOverlay").classList.remove("open");
    document.getElementById("checkoutForm").reset();
    document.getElementById("invoiceSuccessOverlay").classList.add("open");

    showToast("Transaction Settled successfully.");
    renderProducts();
    switchView('katalog');
  });
}

function renderAdminDashboard() {
  const invBody = document.getElementById("adminInventoryTable");
  invBody.innerHTML = products.map(p => `
    <tr>
      <td><b>${p.name}</b></td>
      <td><span style="background:var(--bg-light); padding:2px 5px; border:1px solid var(--border); font-size:0.75rem;">${p.category}</span></td>
      <td>Rp ${p.price.toLocaleString('id-ID')}</td>
      <td>
        <input type="number" class="inp-stock" value="${p.stock}" min="0" onchange="updateStockDirect(${p.id}, this.value)">
      </td>
      <td><button class="btn btn-secondary" style="padding:0.2rem 0.5rem; font-size:0.7rem;" onclick="showToast('Inventory Updated')">Sync</button></td>
    </tr>
  `).join('');

  const histBody = document.getElementById("adminHistoryTable");
  if(salesHistory.length === 0) {
    histBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:2rem;">No inbound transaction logs detected.</td></tr>`;
    return;
  }
  histBody.innerHTML = salesHistory.map(h => `
    <tr>
      <td><code>${h.id}</code></td>
      <td><b>${h.customer}</b></td>
      <td>${h.items}</td>
      <td><small style="color:var(--text-muted);">${h.gateway}</small></td>
      <td style="color:green; font-weight:bold;">Rp ${h.amount.toLocaleString('id-ID')}</td>
    </tr>
  `).join('');
}

function updateStockDirect(id, newVal) {
  const p = products.find(prod => prod.id === id);
  if(p) {
    p.stock = parseInt(newVal) || 0;
    saveData();
    renderProducts();
  }
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerText = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}