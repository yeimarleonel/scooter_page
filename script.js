function confirmarPago() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const identidad = document.getElementById('identidad').value;
    const celular = document.getElementById('celular').value;
    const direccion = document.getElementById('direccion').value;
    const postal = document.getElementById('postal').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;

    document.getElementById('conf-nombre').textContent = nombre;
    document.getElementById('conf-apellido').textContent = apellido;
    document.getElementById('conf-identidad').textContent = identidad;
    document.getElementById('conf-celular').textContent = celular;
    document.getElementById('conf-direccion').textContent = direccion;
    document.getElementById('conf-postal').textContent = postal;
    document.getElementById('conf-pais').textContent = pais;
    document.getElementById('conf-ciudad').textContent = ciudad;

    document.getElementById('registro-pago').style.display = 'none';
    document.getElementById('confirmacion-envio').style.display = 'block';
}

function volver() {
    document.getElementById('confirmacion-envio').style.display = 'none';
    document.getElementById('registro-pago').style.display = 'block';
}
