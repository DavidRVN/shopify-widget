
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("mi-widget-shopify");
  if (!container) return;

  const productos = [
    {
      id: 1,
      nombre: "Producto Demo 1",
      precio: 19.99,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Producto Demo 2",
      precio: 9.99,
      cantidad: 1,
    },
    {
      id: 3,
      nombre: "Producto Demo 3",
      precio: 59.99,
      cantidad: 2,
    },
  ];
  

  let carrito = {};

  function renderWidget() {
    container.innerHTML = `
      <div class="mi-widget">
        <h3>Carrito rápido 🛒</h3>
        <ul id="lista-productos"></ul>
        <p>Total: <span id="total-carrito">$0.00</span></p>
        <button id="finalizar-compra">Finalizar compra</button>
      </div>
    `;

    const lista = container.querySelector("#lista-productos");
    productos.forEach((prod) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${prod.nombre} - $${prod.precio.toFixed(2)}</span>
        <div class="controles">
          <button data-id="${prod.id}" class="restar">-</button>
          <span id="cantidad-${prod.id}">0</span>
          <button data-id="${prod.id}" class="sumar">+</button>
        </div>
      `;
      lista.appendChild(li);
    });

    container.querySelectorAll(".sumar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        carrito[id] = (carrito[id] || 0) + 1;
        actualizarUI();
      });
    });

    container.querySelectorAll(".restar").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (carrito[id]) {
          carrito[id]--;
          if (carrito[id] <= 0) delete carrito[id];
          actualizarUI();
        }
      });
    });

    container.querySelector("#finalizar-compra").addEventListener("click", () => {
      alert("Gracias por tu compra 🛒✅ (simulado)");
      carrito = {};
      actualizarUI();
    });
  }

  function actualizarUI() {
    let total = 0;
    productos.forEach((prod) => {
      const cant = carrito[prod.id] || 0;
      const cantSpan = document.getElementById(`cantidad-${prod.id}`);
      if (cantSpan) cantSpan.textContent = cant;
      total += prod.precio * cant;
    });
    const totalSpan = document.getElementById("total-carrito");
    if (totalSpan) totalSpan.textContent = `$${total.toFixed(2)}`;
  }

  renderWidget();
});
