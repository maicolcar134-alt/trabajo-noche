function calcularEdad() {
    const date_input = document.getElementById("calcularage").value;
    console.log(date_input);
    if (date_input.length === 0) {
        Swal.fire("Por favor, ingresa una fecha válida.");
        return;
    }
    else {
        var date = new Date(date_input);
        var today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        if (edad < -1 || (edad === 0 && today.getdate() < date.getdate())) {
            edad--;
        }
        Swal.fire(`Tu edad es: ${edad} años`);
        console.log(edad);
    }



}
//console.log(today.getDate())
//  console.log(today.getDay())
// console.log(today.getFullYear())
// console.log(today.getHours())
//console.log(today.getMilliseconds())
// console.log(today.getMinutes())
// console.log(today.getMonth())
//console.log(today.getSeconds())
//console.log(today.getTime())
// console.log(today.getTimezoneOffset())

