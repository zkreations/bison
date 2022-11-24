---
title: Carousel
---

Crea un carrusel con las entradas mas populares. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget PopularPosts** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "carousel" }
```

## Vista previa

![widget-carousel](/images/widgets/carousel.png)


## Disponibilidad

Este widget solo esta disponible en la sección **Upper**, **After-Content**, **Before-Content** o **Content**.

## Opciones

{{< table >}}
| Key         | Descripción         | Tipo                            | Valores
| ----------- | ------------------- | ------------------------------- | ------------------
| `title`     | Título              | {{< data "string" >}}           | Titulo del widget
| `icon`      | Icono               | {{< data "string" >}}           | El nombre de un [icono de zkreations](#icons)
| `top`       | Destacados          | {{< data "number" >}}           | `0` `1` `2`  `3`
| `ratio`     | Ratio (Carrusel)    | {{< nodata "{aspect_ratio}" >}} | Un valor de la variable [e.ratio]({{< ref "e-ratio.md" >}})
| `topRatio`  | Ratio (Destacados)  | {{< nodata "{aspect_ratio}" >}} | Un valor de la variable [e.ratio]({{< ref "e-ratio.md" >}})
| `auto`      | Autoplay            | {{< data "number" >}}           | Tiempo en segundos
| `free`      | Scroll desbloqueado | {{< data "boolean" >}}          | `true` `false`
{{< /table >}}

## Ejemplos

{{< code lang="js" >}}
{ content: "carousel", top: 2 }
<---->
Carrusel con 2 elementos destacados
{{< /code >}}

{{< code lang="js" >}}
{ content: "carousel", top: 2, free: true }
<---->
Carrusel con 2 elementos destacados y el desplazamiento será libre con físicas.
{{< /code >}}

{{< code lang="js" >}}
{ content: "carousel", auto: 5 }
<---->
Carrusel con desplazamiento automático cada 5 segundos
{{< /code >}}

{{< code lang="js" >}}
{ content: "carousel", ratio: "5:7" }
<---->
Celdas del carrusel con relación de aspecto `5:7`
{{< /code >}}

## Clases CSS

```css
.carousel {
  --carousel-items: 1; /*Cantidad de celdas por defecto*/
  --carousel-items-xs: 1; /*Cantidad de celdas por debajo de 576px*/
  --carousel-items-s: 2; /*Cantidad de celdas hasta 576px*/
  --carousel-items-m: 3; /*Cantidad de celdas hasta 768px*/
  --carousel-items-l: 4; /*Cantidad de celdas hasta 992px*/
  --carousel-items-xl: 4; /*Cantidad de celdas hasta 1200px*/
  --carousel-items-xxl: 4; /*Cantidad de celdas hasta 1400px*/
  --carousel-gap: /*Separación de celdas*/
}

.carousel-cell {
  /*Celdas del carrusel*/
}

.carousel-top {
  /*Destacados del carrusel*/
}
```
