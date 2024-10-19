let h1 = document.querySelector("h1").innerText = "Productos";


  let data = [
    {
      category: "Moderno",
      id: 1,
      nombre: "Lotus",
      descripcion: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      precio: 4,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
      modelo: 2011
    }, {
      category: "Moderno",
      id: 2,
      nombre: "Suzuki",
      descripcion: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      precio: 49,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
      modelo: 2007
    }, {
      category: "Moderno",
      id: 3,
      nombre: "Dodge",
      descripcion: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      precio: 34,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
      modelo: 1998
    }, {
      category: "Moderno",
      id: 4,
      nombre: "Chevrolet",
      descripcion: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      precio: 41,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
      modelo: 1984
    }, {
      category: "viejo",
      id: 5,
      nombre: "Saab",
      descripcion: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      precio: 48,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
      modelo: 2011
    }, {
      category: "Moderno",
      id: 6,
      nombre: "Honda",
      descripcion: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      precio: 15,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
      modelo: 1985
    }, {
      category: "Moderno",
      id: 7,
      nombre: "Dodge",
      descripcion: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      precio: 64,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
      modelo: 1998
    }, {
      category: "Moderno",
      id: 8,
      nombre: "Suzuki",
      descripcion: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      precio: 33,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
      modelo: 2008
    }, {
      category: "Moderno",
      id: 9,
      nombre: "Pontiac",
      descripcion: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      precio: 24,
      imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
      modelo: 1998
    }
  ]

  function mostrarCards(productos) {
    const cards = productos.map((producto) => `
      <div class="card" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top imagen" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">Precio: $${producto.precio}</p>
          <p class="card-text">Modelo: ${producto.modelo}</p>
          <button type="button" class="btn btn-primary" onclick="mostrarProducto(${producto.id})">Ver más</button>
        </div>
      </div>
    `);
    document.querySelector("section.container").innerHTML = cards.join("");
    document.getElementById("detalle-producto").innerHTML = "";
}

function mostrarProducto(id) {
    const producto = data.find(item => item.id === id);
    
    if (producto) {
        const detalleProductoHTML = `
          <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top imagen" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-text">Precio: $${producto.precio}</p>
              <p class="card-text">Modelo: ${producto.modelo}</p>
              <button type="button" class="btn btn-secondary" onclick="volverACards()">Volver a la lista</button>
            </div>
          </div>
        ` 
        document.querySelector("section.container").innerHTML = "";
        document.getElementById("detalle-producto").innerHTML = detalleProductoHTML; 
        window.history.pushState({}, '', `?prod=${producto.id}`);
    }
}

function volverACards() {
    mostrarCards(data); // Muestra todas las tarjetas de productos
}

// Llama a mostrarCards al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarCards(data);
});
  
  
 
  
  // Función para filtrar productos por categoría
  function filtrar(categoria) {
    if (categoria === 'todos') {
      mostrarCards(data);
    } else {
      let productosFiltrados = data.filter(producto => producto.category.toLowerCase() === categoria.toLowerCase());
      mostrarCards(productosFiltrados);
    }
  }
  
  // Función para buscar productos por nombre
  document.querySelector('#buscar').addEventListener('click', function() {
    let searchTerm = document.querySelector('#searchInput').value.toLowerCase();
  
    let productosFiltrados = data.filter(producto => producto.nombre.toLowerCase().includes(searchTerm));
    
    if (productosFiltrados.length > 0) {
      mostrarCards(productosFiltrados);
    } else {
      document.querySelector('section.container').innerHTML = "<p>No se encontraron productos</p>";
    }
  });
  
  // Función para eliminar el contenido (limpia la búsqueda y muestra todos los productos)
  document.querySelector('#eliminar').addEventListener('click', function() {
    document.querySelector('#searchInput').value = '';
    mostrarCards(data);
  });