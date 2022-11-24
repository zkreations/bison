---
title: p.related
weight: 10
---

Habilita los artículos relacionados en las entradas. Esta característica requiere que el blog sea **público**, que la entrada contenga al menos **una etiqueta** y que los [feeds completos estén habilitados]({{< ref "config.md#habilitar-los-feeds" >}}). También se usan los valores de [e.gaRatio]({{< ref "e-ga-ratio.md" >}}) y [e.ytThumbnail]({{< ref "e-youtube-thumbnail.md" >}})

```html
<Variable name="p.related" description="Enable related post" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `2`.

{{< table >}}
| Value          | Nombre       | Tipo                    | Descripción   
| -------------- | ------------ | ------------------------| --------------
| `1-12`         | Relacionados | {{< data number >}}     | Cantidad de elementos relacionados a mostrar
| `true` `yes`   | Verdadero    | {{< data boolean >}}    | Habilita las entradas relacionadas
| `false` `no`   | Falso        | {{< data boolean >}}    | Deshabilita las entradas relacionadas
{{< /table >}}

## 1-12

Los artículos relacionados estarán disponibles justo antes de los comentarios, y la cantidad a mostrar será la misma que el valor numérico ingresado, por ejemplo, si el valor es `4` la cantidad será:

![p-related-4](/images/variables/post/p-related-4.png)


## true

Los artículos relacionados estarán disponibles. Se mostrarán `2` ya que es la cantidad predeterminada.

![p-related](/images/variables/post/p-related.png)


## false

Los artículos relacionados no estarán disponibles.

