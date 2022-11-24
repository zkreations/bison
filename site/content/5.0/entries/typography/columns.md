---
title: Columnas
---

Crea columnas que pueden contener cualquier elemento. Solo debes utilizar la clase `columns`, el contenido se organizará en la misma fila siempre:

{{< code >}}
<div class="columns">
  <p>Párrafo columna 1</p>
  <p>Párrafo columna 2</p>
  <p>etc...</p>
</div>
<---->
Sección con 3 columnas
{{< /code >}}

## Columnas anidadas

Es perfectamente posible crear columnas dentro de otras:

{{< code >}}
<div class="columns">
  <div class="columns">
    <p>Columna interna 1</p>
    <p>Columna interna 2</p>
  </div>
  <p>Párrafo columna 2</p>
</div>
<---->
Sección con 2 columnas, en donde la primera columnas contiene 2 columnas.
{{< /code >}}

## Columnas multimedia

Las columnas pueden estar compuestas por cualquier elemento, en este caso se utiliza la etiqueta `<div>` que servirá de contenedor para las imágenes y párrafos:

{{< code >}}
<div class="columns">
  <div>
    <img src="example.jpg" width="400" height="225" loading="lazy"/>
    <p>Columna multimedia 1</p>
  </div>
  <div>
    <img src="example.jpg" width="400" height="225" loading="lazy"/>
    <p>Columna multimedia 2</p>
  </div>
</div>
<---->
Sección con 2 columnas basadas en la etiqueta `<div>`
{{< /code >}}
