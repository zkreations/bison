---
title: Imágenes
---

La etiqueta de imagen `<img>`, es recomendable especificar el ancho y alto de cada imagen. También especificar un titulo alternativo para mayor accesibilidad.


{{< code >}}
<img src="example.jpg" width="400" height="300" alt="texto alt"/>
<---->
Imagen HTML con titulo alternativo y dimensiones especificadas
{{< /code >}}


## Carga diferida

Puedes diferir la carga de las imágenes utilizando el atributo `loading`, de esta manera, las imágenes solo cargaran cuando estén próximas a ser vistas. No utilices la carga diferida si la imagen está muy arriba en el contenido.

{{< code >}}
<img loading="lazy" src="example.jpg"/>
<---->
Imagen que cargará solo si está próxima a ser vista.
{{< /code >}}


## Imagen con descripcion

Puedes especificar una descripcion a las imágenes utilizando las etiquetas `<figure>` y `<figcaption>` como se muestra a continuación:

{{< code >}}
<figure>
  <img src="example.jpg"/>
  <figcaption>Name or text of the photo</figcaption>
</figure>
<---->
Imagen con una descripcion que es visible para el usuario
{{< /code >}}


## Alinear imágenes

Puedes alinear imagines hacia la derecha, izquierda o centro utilizando las clases  `alignleft`, `alignright` y `aligncenter` como se muestra a continuación:

{{< code >}}
<img class="alignleft" src="example.jpg"/>
<---->
Imagen alineada a la izquierda
{{< /code >}}


{{< code >}}
<img class="alignright" src="example.jpg"/>
<---->
Imagen alineada a la derecha
{{< /code >}}


{{< code >}}
<img class="aligncenter" src="example.jpg"/>
<---->
Imagen alineada al centro
{{< /code >}}

{{< code >}}
<figure class="aligncenter">
  <img src="example.jpg"/>
  <figcaption>Name or text of the photo</figcaption>
</figure>
<---->
Alineación aplicada a la etiqueta `<figure>`
{{< /code >}}


## Imágenes de ancho completo

Puedes forzar el tamaño a la imagen a ocupar todo el ancho disponible utilizando la clase `alignfull` como se muestra a continuación:

{{< code >}}
<img class="alignfull" src="example.jpg"/>
<---->
Imagen de ancho completo
{{< /code >}}


## Imágenes estilo cover

Puedes convertir una imagen con descripcion en un fondo con texto, para ello se emplea la clase `has-cover` como se muestra a continuación:

{{< code >}}
<figure class="has-cover">
  <img src="example.jpg"/>
  <figcaption>Name or text of the photo</figcaption>
</figure>
<---->
Texto con imagen de fondo
{{< /code >}}
