---
title: p.tocHeading
weight: 9
---

Lista de encabezados que serán incluidos en la **tabla de contenido**.

```html
<Variable name="p.tocHeading" description="Headings for TOC" type="string" value="h2, h3, h4"/>
```


## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value                    | Nombre            | Tipo                 | Descripción
| ------------------------ | ----------------- | -------------------- | --------------
| {{<nodata "{headings}" >}}  | Encabezados | {{<nodata "{headings}" >}}  | Lista de encabezados separados por comas
{{< /table >}}


## headings

Especifica una lista separada por comas de etiquetas `<h#>` del 1 al 6 que serán incluidos en la tabla ed contenido, las etiquetas de encabezados que no se mencionen se excluirán:

```text
h1, h2, h3, h4, h5, h6
```

