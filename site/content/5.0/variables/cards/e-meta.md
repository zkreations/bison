---
title: e.meta
weight: 3
---

Habilita los datos de la lista de entradas, como el perfil del autor, cantidad de comentarios y fecha de publicación. El valor ingresado también afectará al [widget FeaturedPost]({{< ref "FeaturedPost.md" >}}) y al modo **hybrid** del [widget PopularPosts]({{< ref "popularposts" >}}). 

```html
<Variable name="e.meta" description="Show Meta" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita los datos del articulo
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita los datos del articulo
{{< /table >}}


## true

Muestra la fecha de publicación, la cantidad de comentarios y el perfil del autor. También puedes configurar en el **widget Blog**, individualmente que valores deseas mostrar. 

![e-meta](/images/variables/cards/e-meta.png)


## false

Los datos del articulo no estarán disponibles.

