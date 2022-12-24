---
title: Hybrid
pro: true
---

La lista de entradas populares tendrá un **articulo de las entradas** más vistas. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget PopularPosts** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "hybrid" }
```

## Vista previa

![widget-hybrid](/images/widgets/hybrid.png)


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
{ content: "hybrid", title: "Tops" }
<---->
Populares con una entrada más vista, el título del widget sera "Tops".
{{< /code >}}

{{< code lang="js" >}}
{ content: "hybrid", ratio: "1:1" }
<---->
La relación de aspecto de la entrada mas vista será `1:1`
{{< /code >}}


## Clases CSS

```css
.items-hybrid {
  /*contenedor de hybrid*/
}
```
