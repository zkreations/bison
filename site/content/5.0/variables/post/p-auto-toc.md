---
title: p.autoToc
weight: 8
---

Inserta automáticamente en todos los artículos la **tabla de contenido** según los parámetros especificados. Si el shortcode [Tabla de contenido]({{< ref "table-of-contents.md" >}}) está presente, tendrá prioridad.

```html
<Variable name="p.autoToc" description="Enable ato TOC" type="string" value="false"/>
```


## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value                    | Nombre            | Tipo                 | Descripción
| ------------------------ | ----------------- | -------------------- | --------------
| `before-first-heading`   | Antes de `<h#>`   | {{< data string >}}  | Antes del primer encabezado
| `after-first-heading`    | Después de `<h#>` | {{< data string >}}  | Después del primer encabezado
| `before-first-paragraph` | Antes de `<p>`    | {{< data string >}}  | Antes del primer párrafo
| `after-first-paragraph`  | Después de `<p>`  | {{< data string >}}  | Después del primer párrafo
| `true` `yes`             | Verdadero         | {{< data boolean >}} | Inserta la tabla de contenido
| `false` `no`             | Falso             | {{< data boolean >}} | Deshabilita la tabla de contenido
{{< /table >}}


## before-first-heading

La tabla de contenido estará disponible **antes** de la primera **etiqueta de encabezado**:

![p-auto-toc-before-first-heading](/images/variables/post/p-auto-toc-before-first-heading.png)


## after-first-heading

La tabla de contenido estará disponible **después** de la primera **etiqueta de encabezado**:

![p-auto-toc-after-first-heading](/images/variables/post/p-auto-toc-after-first-heading.png)


## before-first-paragraph

La tabla de contenido estará disponible **antes** de la primera **etiqueta de párrafo**:

![p-auto-toc-before-first-paragraph](/images/variables/post/p-auto-toc-before-first-paragraph.png)


## after-first-paragraph

La tabla de contenido estará disponible **después** de la primera **etiqueta de párrafo**:

![p-auto-toc-after-first-paragraph](/images/variables/post/p-auto-toc-after-first-paragraph.png)


## true

La tabla de contenido estará disponible **antes del contenido**:

![p-auto-toc-true](/images/variables/post/p-auto-toc-true.png)


## false

La tabla de contenido no se insertará automáticamente.