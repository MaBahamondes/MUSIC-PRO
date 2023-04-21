// FILTRAR POR CATEGORIA
const selectCategoria = document.querySelector('filtro_categoria');

selectCategoria.addEventListener('change', () => {
	const categoriaSeleccionada = selectCategoria.value;
	const tarjetas = document.querySelectorAll('.card');

	// Si se selecciona la opción "Todas", mostrar todas las tarjetas
	if (categoriaSeleccionada === '') {
		tarjetas.forEach((tarjeta) => {
			tarjeta.style.display = 'block';
		});
	} else {
		// Ocultar las tarjetas que no corresponden a la categoría seleccionada
		tarjetas.forEach((tarjeta) => {
			if (tarjeta.classList.contains(categoriaSeleccionada)) {
				tarjeta.style.display = 'block';
			} else {
				tarjeta.style.display = 'none';
			}
		});
	}
});
