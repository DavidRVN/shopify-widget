/**
 * Consulta productos desde la API Storefront de Shopify
 * @param {string} storeDomain - Tienda de Shopify (sin https://)
 * @param {string} accessToken - Token público de Storefront API
 * @param {function} callback - Función que recibe el array de productos
 */
function obtenerProductosDesdeShopify(storeDomain, accessToken, callback) {
    const url = `https://${storeDomain}/api/2023-07/graphql.json`;
  
    const query = `
      {
        products(first: 5) {
          edges {
            node {
              id
              title
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": accessToken,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const productos = data.data.products.edges.map((edge, index) => {
          const nodo = edge.node;
          const precio = parseFloat(nodo.variants.edges[0].node.price.amount);
          return {
            id: index + 1, 
            nombre: nodo.title,
            precio: precio,
            cantidad: 1,
          };
        });
  
        callback(productos);
      })
      .catch((error) => {
        console.error("Error al obtener productos desde Shopify:", error);
        callback([]);
      });
  }