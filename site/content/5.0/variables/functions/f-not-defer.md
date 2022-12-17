---
title: f.notDefer
weight: 12
---

Excluye imágenes de la carga diferida basado en el identificador único. Esta característica solo esta disponible para entradas recientes y el [widget FeaturedPost]({{< ref "FeaturedPost.md" >}}). Puede resultar util para **mejorar la optimización**.

Para conocer el identificador único de la imagen deseada, utiliza el **inspector de elementos del navegador** y selecciona la imagen de la cual se desea saber su ID.

```html
<Variable name="f.notDefer" description="Exclude from Lazy Loading" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| {{< nodata "{image_ids}" >}} | Identificadores | {{< data string >}} | Lista de identificadores a excluir
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Crea identificadores en las imágenes
| `false` `no`   | Falso     | {{< data boolean >}}    | No se crean identificadores
{{< /table >}}


## image_ids

Lista de identificadores de imágenes que se usa de referencia para excluirlas de la carga diferida, por ejemplo, la siguiente lista **ignorará la carga diferida** en las 4 primeras entradas:

```text
post0, post1, post2, post3
```

#### Significado

{{< table >}}
| Tipo           | Significado
| -------------- | ---------------
| `post#`        | ID de imágenes de entradas, en donde `#` es un número empezando del `0`
| `featured0`    | ID de la imagen del [widget FeaturedPost]({{< ref "FeaturedPost.md" >}})
{{< /table >}}

## true

Las imágenes tendrás un identificador único que puedes conocer utilizando el inspector de elementos del navegador.


## false

Las imágenes no tendrán un identificador único, por lo tanto **ninguna se excluirá de la carga diferida**.