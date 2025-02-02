document.getElementById("convertir").addEventListener("click", function () {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const medida = document.getElementById("medida").value;

  // Ocultar el elemento correspondiente a la medida seleccionada
  document.querySelectorAll(".conversion").forEach((conversion) => {
    conversion.style.display = "block"; // Mostrar todos los elementos primero
  });

  if (medida === "galones") {
    document.querySelector(".conversion:nth-child(2)").style.display = "none"; // Ocultar Galones
  } else if (medida === "litros") {
    document.querySelector(".conversion:nth-child(1)").style.display = "none"; // Ocultar Litros
  } else if (medida === "botellas") {
    document.querySelector(".conversion:nth-child(3)").style.display = "none"; // Ocultar Botellas
  }

  // Realizar las conversiones
  let litros, galones, botellas;

  if (medida === "galones") {
    litros = cantidad * 3.78541;
    botellas = litros / 0.75; // Suponiendo que una botella es de 750 ml
    galones = cantidad;
  } else if (medida === "litros") {
    galones = cantidad / 3.78541;
    botellas = cantidad / 0.75; // Suponiendo que una botella es de 750 ml
    litros = cantidad;
  } else if (medida === "botellas") {
    litros = cantidad * 0.75; // Suponiendo que una botella es de 750 ml
    galones = litros / 3.78541;
    botellas = cantidad;
  }

  // Actualizar los textos
  document.getElementById("litros").textContent = `${litros.toFixed(2)} Litros`;
  document.getElementById("galones").textContent = `${galones.toFixed(
    2
  )} Galones`;
  document.getElementById("botellas").textContent = `${botellas.toFixed(
    2
  )} Botellas`;
});
