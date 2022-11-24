---
title: Galería
---

Agrupa multiples imágenes, lo que le da el aspecto de galería.

{{< code >}}
<div class="gallery">
  <img src="example.jpg" width="300" height="200"/>
  <img src="example.jpg" width="300" height="200"/>
  <img src="example.jpg" width="300" height="200"/>
  <img src="example.jpg" width="300" height="200"/>
</div>
<---->
Las imágenes se agrupan como galería
{{< /code >}}

## Galería con enlaces

Solo debes encerrar las imágenes con etiquetas de enlace `<a>` como se muestra a continuación:

{{< code >}}
<div class="gallery">
  <a href="#url"><img src="example.jpg" width="300" height="200"/></a>
  <a href="#url"><img src="example.jpg" width="300" height="200"/></a>
  <a href="#url"><img src="example.jpg" width="300" height="200"/></a>
  <a href="#url"><img src="example.jpg" width="300" height="200"/></a>
  <a href="#url"><img src="example.jpg" width="300" height="200"/></a>
</div>
<---->
Galería con enlaces
{{< /code >}}

## Galería con texto

Puedes agrupar imágenes con descripcion utilizando la etiqueta `<figure>` y `<figcaption>`, la galería interpretará las descripciones y se mostraran como parte de la galería.

{{< code >}}
<div class="gallery">
  <figure>
    <img src="example.jpg" width="300" height="200"/>
    <figcaption>Figure 1</figcaption>
  </figure>
  <figure>
    <img src="example.jpg" width="300" height="200"/>
    <figcaption>Figure 2</figcaption>
  </figure>
  <figure>
    <img src="example.jpg" width="300" height="200"/>
    <figcaption>Figure 3</figcaption>
  </figure>
</div>
<---->
Galería con descripcion
{{< /code >}}
