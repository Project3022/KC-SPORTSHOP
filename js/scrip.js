
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-producto");
  const modalTitulo = document.getElementById("modal-titulo");
  const opcionesColor = document.getElementById("opciones-color");
  const cerrarModal = document.querySelector(".cerrar-modal");

  const productos = {
    top: {
      nombre: "Top Deportivo",
      precio: "850",
      colores: [
        { nombre: "Rojo", img: "imagen/superior/1.jpeg" },
        { nombre: "Negro", img: "imagen/superior/2.jpeg" },
        { nombre: "Azul", img: "imagen/superior/3.jpeg" },
        { nombre: "Rojo", img: "imagen/superior/4.jpeg" },
        { nombre: "Negro", img: "imagen/superior/5.jpeg" },
        { nombre: "Azul", img: "imagen/superior/6.jpeg" }
      ]
    },

    conjunto: {
      nombre: "conjunto",
      precio: "850",
      colores: [
        { nombre: "Rojo", img: "imagen//1.jpeg" },
        { nombre: "Negro", img: "imagen/2.jpeg" },
        { nombre: "Azul", img: "imagen/3.jpeg" }
]
    }
    // Puedes agregar más productos aquí
  };
  

  // Mostrar modal
  document.querySelectorAll(".ver-colores").forEach(btn => {
    btn.addEventListener("click", () => {
      const productoKey = btn.dataset.producto;
      const producto = productos[productoKey];

      modalTitulo.textContent = `Selecciona un color de ${producto.nombre}`;
      opcionesColor.innerHTML = "";

      producto.colores.forEach(color => {
        const div = document.createElement("div");
        div.classList.add("color-opcion");
        div.innerHTML = `
          <img src="${color.img}" alt="${color.nombre}">
          <button onclick="comprarProducto('${producto.nombre}', '${color.nombre}', '${producto.precio}')">
            Comprar ${color.nombre}
          </button>
        `;
        opcionesColor.appendChild(div);
      });

      modal.style.display = "block";
    });
  });

  // Cerrar modal
  cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.comprarProducto = function(nombre, color, precio) {
    const mensaje = `Hola, quiero comprar el ${nombre} en color ${color} por RD$${precio}`;
    const telefono = "18091234567"; // tu número con código de país
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const cerrar = document.querySelector(".cerrar");

  // Selecciona todas las imágenes con clase img-zoom
  const imagenes = document.querySelectorAll(".img-zoom");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  cerrar.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  // También cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
});
