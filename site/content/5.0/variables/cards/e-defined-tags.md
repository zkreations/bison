---
title: e.definedTags
weight: 13
---

Destaca la primera etiqueta de un articulo o las etiquetas que coincidan con una lista especificada. Las **etiquetas reservadas** nunca se tomarán en cuenta. 

```html
<Variable name="e.definedTags" description="Feature Tags" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value                     | Nombre    | Tipo                    | Descripción   
| ------------------------- | ----------| ------------------------| --------------
| {{< nodata "{labels}" >}} | Etiquetas | {{< data string >}}     | Lista de etiquetas separadas por comas
| `true` `yes`              | Verdadero | {{< data boolean >}}    | Destacará la primera etiqueta 
| `false` `no`              | Falso     | {{< data boolean >}}    | Deshabilita las etiquetas destacadas
{{< /table >}}


## labels

Lista de etiquetas separadas por comas. Los nombres deben **escribirse igual** a los ingresados en tus artículos. Si el valor ingresado es una **lista vacía**, se usará la primera etiqueta disponible.

![e-defined-tags-labels](/images/variables/cards/e-defined-tags-labels.png)


## true

Muestra la primera etiqueta disponible entre la lista de etiquetas.

![e-defined-tags-true](/images/variables/cards/e-defined-tags-true.png)


## false

Las etiquetas destacadas no estarán disponibles.