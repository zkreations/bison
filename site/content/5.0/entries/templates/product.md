---
title: Product
weight: 3
pro: true
---

Convierte el articulo en una presentación de producto. Configura la variable [p.template]({{< ref "p-template.md" >}}) para mostrar esta plantilla en todos los artículos, o agrega a la primera imagen el comando [usando uno de los 3 métodos]({{< ref "/5.0/entries/templates/" >}}):

{{< code >}}
qTemp_product
{{< /code >}}

Puedes ver una vista previa de el modo hero en la página de demostración.

{{< pagelink title="Demostración Product" name="Bison" href="https://bison.zkreations.com/2022/05/black-aperture-blur.html" >}}


## Agregar el precio

Agrega una etiqueta usando el prefijo configurado en la variable [p.symbol]({{< ref "p-symbol.md" >}}), por defecto el prefijo es `$`, por lo tanto, la etiqueta a agregar seria:

{{< code >}}
$70.00
{{< /code >}}

Si el producto es gratuito escribe el prefijo mas el valor 0, por ejemplo `$0`, de esta forma el producto se tratará como un archivo digital de descarga o gratuito. Ocurre algo similar cuando el precio no se especifica.


## Agregar descripción

Puedes describir el producto con un resumen de 150 caracteres, para ello deberás habilitar la [descripcion de búsqueda]({{< ref "config.md#habilitar-descripcion-de-búsqueda" >}}) y luego usar el campo "Descripción" que encontrarás en el menu derecho del editor de artículos.


## Agregar opciones de compra

Para agregar las opciones de compra debes habilitar los [enlaces de adjuntos]({{< ref "config.md#habilitar-enlaces-de-adjuntos" >}}) en tu blog, luego ingresa enlaces en donde tus usuarios podrán comprar ese producto. La plantilla agregará automáticamente un [icono de zkreations](https://icons.zkreations.com/) según corresponda.


## Habilitar reseñas

Por defecto los comentarios se moverán a una sección independiente pero vinculada al mismo producto, con esto tus usuarios podran usarlos para dejar comentarios a modo de reseña. Si no deseas esto solo debes **deshabilitar los comentarios** en la entrada.


