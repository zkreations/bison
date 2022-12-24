---
title: Trending
---

La lista de entradas populares **estilo tendencias**. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget PopularPosts** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "trending" }
```

## Vista previa

![widget-trending](/images/widgets/trending.png)


## Disponibilidad

Este widget esta disponible en todas las secciones menos en **Filters** y **Header**.


## Opciones

{{< table >}}
| Key         | Descripción         | Tipo                   | Valores
| ----------- | ------------------- | ---------------------- | ------------- |
| `title`     | Título              | {{< data "string" >}}  | Titulo del widget
| `icon`      | Icono               | {{< data "string" >}}  | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`         | Icono de tercero    | {{< data "string" >}}  | Etiqueta `<i>` usando el valor como clase
| `ratio`     | Relación de aspecto | {{< nodata "{aspect_ratio}" >}} | Un valor de la variable [e.ratio]({{< ref "e-ratio.md" >}})
{{< /table >}}


## Ejemplos

{{< code lang="js" >}}
{ content: "trending", title: "Tendencias" }
<---->
El título del widget de populares sera "Tendencias".
{{< /code >}}

{{< code lang="js" >}}
{ content: "trending", ratio: "1:1" }
<---->
La relación de aspecto de las entradas en tendencia será `1:1`
{{< /code >}}


## Clases CSS

```css
.trending {
  /*contenedor de tendencias*/
}

.populars-trending {
  /*elementos en tendencia*/
}
```
