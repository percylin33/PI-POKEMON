export const validateForm = (form) => {
    const { name, imagen, vida, fuerza, defensa, velocidad, altura, peso } = form;
  
    const errors = {
      name: "",
      imagen: "",
      vida: "",
      fuerza: "",
      defensa: "",
      velocidad: "",
      altura: "",
      peso: "",
      tipos: "",
    };
  
    if (typeof name !== "string" || name.trim() === "" || !isNaN(parseFloat(name))) {
      errors.name = "Name is required as string";
    }
    if (name.length <= 3 ) {errors.name = "Campos name nesesita mas de tres caracteres " };
    if ( name.length >= 10 ) {errors.name = "Campos name nesesita mas de tres caracteres " };
    
  
    if (typeof imagen !== "string" || imagen.trim() === "" || !isNaN(parseFloat(imagen))) {
      errors.imagen = "Image is required";
    }
    
  
    const ValNume = (value, fieldName) => {
      value = Number(value);
      if (typeof value !== "number" || isNaN(value) || value <= 0) {
        errors[fieldName] = "Please enter a valid number";
      }
    };
  
    ValNume(vida, "vida");
    ValNume(fuerza, "fuerza");
    ValNume(defensa, "defensa");
    ValNume(velocidad, "velocidad");
    ValNume(altura, "altura");
    ValNume(peso, "peso");
   
    return errors;
  };