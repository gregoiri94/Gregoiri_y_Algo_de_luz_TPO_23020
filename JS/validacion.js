function check(){
    let logica=true
    let nombre=document.getElementById("nombre").value 
    let apellido=document.getElementById("apellido").value 
    
    if (nombre.length === 0) {
      alert("Campo Nombre es Obligatorio")
      logica=false
    }
    if (apellido.length === 0) {
        alert("Campo Apellido es Obligatorio")
        logica=false
      }
      if (telefono.length===0){
        alert("Campo Telefono Obligatorio")
      }
    if (logica) {
        grabar()
        

    }
    
}

function grabar(){
    alert("Comprobando ....")
    document.getElementById("nombre").value=""
    document.getElementById("apellido").value=""
}