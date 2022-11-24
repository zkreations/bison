---
title: Videos
---

Videos utilizando la etiqueta HTML `<video>`

{{< code >}}
<video controls src="example.mp4"></video>
<---->
Video HTML común
{{< /code >}}

## Videos con descripcion

Puedes especificar una descripcion a los videos utilizando las etiquetas `<figure>` y `<figcaption>` como se muestra a continuación:

{{< code >}}
<figure>
  <video controls src="example.mp4"></video>
  <figcaption>Name or text of the video</figcaption>
</figure>
<---->
Video con una descripcion que es visible para el usuario
{{< /code >}}

## Videos estilo cover

Puedes convertir un video con descripcion en un fondo con texto, para ello se emplea la clase `has-cover` sin embargo también es importante agregar los atributos `autoplay`, `muted` y `loop` como se muestra a continuación:

{{< code >}}
<figure class="has-cover">
  <video autoplay muted loop src="example.mp4"></video>
  <figcaption>Name or text of the video</figcaption>
</figure>
<---->
Texto con video de fondo
{{< /code >}}
