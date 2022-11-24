---
title: e.snippet
weight: 2
---

Habilita el pequeño fragmento de texto de las entradas de la lista de artículos. El valor ingresado también afectará al [widget FeaturedPost]({{< ref "FeaturedPost.md" >}}) y al modo **hybrid** del [widget PopularPosts]({{< ref "popularposts" >}}). Solo afecta a las entradas tipo `grid`, `row` y `classic`.

```html
<Variable name="e.snippet" description="Show Snippet" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el fragmento de texto
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el fragmento de texto
{{< /table >}}


## true

El resumen o fragmento de texto **se extrae del contenido** del articulo. Puedes configurar la cantidad de caracteres a mostrar mediante la variable [e.truncate]({{< ref "e-truncate.md" >}}). También puedes limitar el número de líneas del resumen con la variable [e.lineClamp]({{< ref "e-line-clamp.md" >}})

![e-snippet](/images/variables/cards/e-snippet.png)


## false

El resumen o fragmento no estará disponible. Esto también deshabilita el funcionamiento de las variables [e.truncate]({{< ref "e-truncate.md" >}}) y [e.lineClamp]({{< ref "e-line-clamp.md" >}}).