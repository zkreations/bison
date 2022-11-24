---
title: Spoiler
---

Este tema no tiene una función especifica para crear spoilers, se utiliza la etiqueta `<details>` como se muestra a continuación:

{{< code >}}
<details>
  <summary>Show and hide summary</summary>
  <p>Lorem ipsum dolor sit amet...</p>
</details>
<---->
Detalles que el usuario puede abrir y cerrar
{{< /code >}}


## Spoiler con estilos

La etiqueta `<details>` por defecto no tiene estilos, pero puedes darle un mejor aspecto utilizando clases de la plantilla, como se muestra a continuación:

{{< code >}}
<details class="spoiler">
  <summary class="btn">Show and hide summary</summary>
  <p>Lorem ipsum dolor sit amet...</p>
</details>
<---->
Detalles con estilos de componente **spoiler**
{{< /code >}}


## Spoiler acordeón

La función acordeón se construye con varias etiquetas `<details>` agrupadas. Ademas se incluyen algunas clases adicionales con el fin de lograra el efecto acordeón:

{{< code >}}
<div class="accordion">
  <details>
    <summary class="btn">Show and hide a content element</summary>
    <div class="accordion-item">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </details>
  <details>
    <summary class="btn">Show and hide a content element</summary>
    <div class="accordion-item">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </details>
</div>
<---->
Estilo **acordeón** utilizando etiquetas `<details>`
{{< /code >}}