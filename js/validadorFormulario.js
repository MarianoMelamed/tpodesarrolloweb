function valida_enviar(){
    
    //valido que el nombre sólo contenga letras
    const nombre=document.formContacto.nombre
    if (Number(nombre.value)) {
        alert("Error, el nombre sólo puede contener letras!")
        document.formContacto.nombre.focus()
        return 0;
    }

    //Valido formato de email
    const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = document.formContacto.email.value;
	if (!emailRegex.test(email)) {
        alert("Error, el formato del e-mail ingresado es incorrecto!")
        document.formContacto.email.focus()
        return 0;
    }

   	//Valido que coincidan los emails
   	if (document.formContacto.email.value != document.formContacto.confEmail.value){
      		alert("Error, las direcciones de e-mail ingresadas no coinciden")
      		document.formContacto.confEmail.focus()
      		return 0;
   	}
}