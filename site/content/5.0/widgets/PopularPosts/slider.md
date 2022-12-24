---
title: Slider
pro: true
---

La lista de entradas populares se convertirá en **slider**. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget PopularPosts** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "slider" }
```

## Vista previa

![widget-slider](/images/widgets/slider.png)


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
| `auto`      | Autoplay            | {{< data "number" >}}           | Tiempo en segundos
{{< /table >}}


## Ejemplos

{{< code lang="js" >}}
{ content: "slider", auto: 5 }
<---->
Slider con desplazamiento automático cada 5 segundos
{{< /code >}}

{{< code lang="js" >}}
{ content: "slider", ratio: "5:7" }
<---->
Celdas del slider con relación de aspecto `5:7`
{{< /code >}}


## Clases CSS

```css
.slider {
  /*contenedor del slider*/
}
```
