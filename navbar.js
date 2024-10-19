let nav = [
  {menu: "contacto", href: "contacto.html"},
  {menu: "Inicio", href: "index.html"},
  {menu: "productos", href: "productos.html"}
]

let menu = [];

// Genera los enlaces del menú, pero sin crear múltiples <nav>
for(let cuadros of nav){
  menu.push(`<a class="nav-link active" aria-current="page" href="${cuadros.href}">${cuadros.menu}</a>`);
}

// Crea un solo <nav> y coloca todos los enlaces dentro
let navbar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        ${menu.join("")}  <!-- Aquí se añaden los enlaces generados -->
      </div>
    </div>
  </div>
</nav>
`;

// Inserta el navbar en el header
document.querySelector('header').innerHTML = navbar;
