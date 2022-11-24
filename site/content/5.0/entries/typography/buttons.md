---
title: Botones
---

Los botones se escriben utilizando la etiqueta de enlace `<a>` y la clase `btn` como se muestra a continuación:

{{< code >}}
<a class="btn" href="#link">Default</a>
<---->
Botón por defecto
{{< /code >}}


## Estilos de botones

Puedes obtener distintos estilos de botón utilizando las clases `btn-primary` y `btn-outline` como se muestra a continuación:

{{< code >}}
<a class="btn btn-primary" href="#link">Primary</a>
<---->
Botón de color de acento configurado en el tema
{{< /code >}}

{{< code >}}
<a class="btn btn-outline" href="#link">Outline</a>
<---->
Botón diseñado con bordes
{{< /code >}}

{{< code >}}
<a class="btn btn-primary btn-outline" href="#link">Primary Outline</a>
<---->
Botón diseñado con bordes y acento del tema
{{< /code >}}


## Contenedor de botones

Puedes agrupar multiples botones en una misma linea utilizando el un contenedor con la clase `buttons` como se muestra a continuación:

{{< code >}}
<div class="buttons">
  <a class="btn" href="#link">Default</a>
  <a class="btn" href="#link">Default</a>
  <a class="btn" href="#link">Default</a>
</div>
<---->
Grupo de botones
{{< /code >}}