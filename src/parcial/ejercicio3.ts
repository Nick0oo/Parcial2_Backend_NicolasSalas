// crea una interfaz llamada ContactInfo que defina los atributos de un contacto: id,name y phoneNumber
interface ContactInfo {
    id: number;
    name: string;
    phoneNumber: number;
}
//la funcion validatePhoneNumber debe validar el numero de telefono
function validatePhoneNumber(phoneNumber: number): boolean {
    // Simple validation: phone number should be 10 digits long
    return /^\d{10}$/.test(phoneNumber.toString());
}


/*crea una clase llamada Contact que implemente la interfaz ContactInfo.
Esta clase debe tener unos metodos necesarios para interacturar con los datos*/
class Contact {
    public id:number;
    public name:string;
    public  phoneNumber:number;
    //constructor


}
/*si el numero de telefono no es valido el constructor de la calse debe lanzar un error*/

/*el metodo getPhoneNumber debe devolver el Numero de telefono almacenado*/

