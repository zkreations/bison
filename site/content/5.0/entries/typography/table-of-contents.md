---
title: Tabla de contenido
---

Este tema genera identificadores únicos basado en el contenido de los encabezados existentes. La tabla de contenido recupera todos los identificadores y genera un árbol de contenido.

{{< code >}}
<div class="toc"></div>
<---->
Genera una tabla de contenido
{{< /code >}}


## Encabezados ignorados

Por defecto todos los encabezados especificados en [p.tocHeading]({{< ref "p-toc-heading.md" >}}) se listan en la tabla. Si deseas que un encabezado no se tome en cuenta, agrega la clase `toc-ignore` como se muestra a continuación:


{{< code >}}
<h2 class="toc-ignore">Este encabezado sera ignorado</h2>
<---->
Al generar la tabla de contenido, **no se incluirá** este encabezado
{{< /code >}}
