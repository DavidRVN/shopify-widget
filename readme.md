# 🌽 Shopify Widget - Carrito Rápido

Este es un **widget de carrito de compras rápido y liviano** hecho en JavaScript puro y CSS, listo para integrarse fácilmente en una tienda Shopify usando snippets en Liquid o como script externo.

## 🚀 Características

- Añadir productos al carrito de forma dinámica
- Controles de suma/resta por producto
- Cálculo de total en tiempo real
- Botón de finalizar compra (simulado)
- Diseño limpio, responsive y estilo iOS
- Fácil de insertar en Shopify o cualquier sitio

## 🧹 Estructura del Proyecto

```
shopify-widget/
├── index.html         # Archivo de prueba local
├── widget.js          # Lógica del widget
├── widget.css         # Estilos del widget
├── snippet.liquid     # Código para insertar en Shopify
└── assets/            # (Opcional) Imágenes o fuentes
```

---

## 🧪 Prueba Local

Puedes abrir `index.html` directamente en tu navegador para probar el widget sin subirlo a Shopify.

```bash
open index.html  # Mac
start index.html # Windows
```

---

## 🛒 Uso en Shopify

1. **Copia el contenido de `snippet.liquid`** en un snippet de Shopify, por ejemplo:  
   `snippets/widget-carrito.liquid`

2. **Incluye el snippet en una plantilla:**

```liquid
{% render 'widget-carrito' %}
```

3. (Opcional) Si usas un `div` específico:

```html
<div id="mi-widget-shopify"></div>
```

---

## 📦 Instalar en Producción

Puedes subir los archivos a tu tienda usando el editor de temas, o alojarlos externamente y vincular:

```html
<link rel="stylesheet" href="https://tu-cdn.com/widget.css">
<script src="https://tu-cdn.com/widget.js"></script>
```

---

## 📚 Variables que puedes pasar

Puedes usar atributos `data-*` en el contenedor `#mi-widget-shopify` para personalizar el widget:

```html
<div
  id="mi-widget-shopify"
  data-nombre-producto="Gorra Clásica"
  data-precio="12.99">
</div>
```

---

## 🧑‍💻 Desarrollo

### Ramas

- `dev`: Desarrollo activo
- `test`: Pruebas intermedias
- `main`: Producción estable

### Comandos útiles

```bash
git checkout dev
git add .
git commit -m "Tu cambio"
git push origin dev
```

---

## ✨ Créditos

Hecho con ❤️ por [@DavidRVN](https://github.com/DavidRVN)

---

## 📄 Licencia

MIT License
