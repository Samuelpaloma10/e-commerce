function cards(){
    let main = Document.querySelector("main");

    class Productos{
      constructor(nombre,precio,imagen,descripcion){
          this.nombre = nombre;
          this.precio = precio;
          this.imagen = imagen;
          this.descripcion = descripcion;
      }
  
  }
  
  const producto = new Productos(
      "mercedes",
       1000,
        "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
        "carro buenooo"
  
  )
  
  const contenidos = `
      <div class="productos">
      <h1>${producto.nombre}</h1>
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <h1>${producto.precio}</h1>
      <p ${producto.descripcion}</p>
      `
  
  document.querySelector("main").innerHTML = contenidos;
}
cards()

    
