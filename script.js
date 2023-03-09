const Persona = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    foto.src = datos.picture.large;
    titulo.textContent = datos.name.title+" "+datos.name.first+ " "+datos.name.last;
    nombreapellido.textContent = datos.name.first+ " "+datos.name.last;
    edad.textContent = datos.dob.age;
    email.textContent = datos.email;
    telefono.textContent = datos.phone;
    movil.textContent = datos.cell;
    direccion.textContent = datos.location.street.name+" "+datos.location.street.number+", "+datos.location.city+", "+datos.location.state+", "+datos.location.country;
}
document.addEventListener('DOMContentLoaded', Persona);
