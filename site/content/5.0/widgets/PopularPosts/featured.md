---
title: Featured
pro: true
---

La lista de entradas populares tendrá un **elemento destacado**. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget PopularPosts** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "featured" }
```

## Vista previa

![widget-featured](/images/widgets/featured.png)


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
{ content: "featured", title: "Más vistos" }
<---->
Populares con un elemento destacado, el título del widget sera "Más vistos".
{{< /code >}}

{{< code lang="js" >}}
{ content: "featured", ratio: "1:1" }
<---->
La relación de aspecto del elemento destacado sera `1:1`
{{< /code >}}


## Clases CSS

```css
.populars-featured {
  /*entrada destacada del resto*/
}
```
