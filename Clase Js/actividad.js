function calcularPrecio (precioBase, descuento)
{
  if (precioBase <= 0 || descuento < 0 || descuento > 100)
  {
    return "Los valores ingresados son inválidos"
  } else if (descuento == 0){

    return "El precio base sin descuento es: (precioBase)"
  }
    else if (descuento > 0 || descuento <= 100){
       const precioDescuento = precioBase - (precioBase * descuento / 100);
       return "El precio final con descuento es precioDescuento)";
     }
     
}