---
title: Comments
---

Crea una lista de últimos comentarios. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget Text** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "comments" }
```

## Vista previa

![widget-comments](/images/widgets/comments.png)

## Comentarios externos

Para cargar comentarios provenientes de otro blog, ingresa en el campo "Contenido" la dirección del blog externo, el cual deberá contar con los [feeds habilitados]({{< ref "config.md#habilitar-los-feeds" >}}) y ser **público**.

![widget-comments-url](/images/widgets/comments-url.png)

## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible. Tampoco esta disponible para **comentarios de Disqus**.

## Opciones

{{< table >}}
| Key       | Descripción       | Tipo                   | Valores
| --------- | ----------------- | ---------------------- | ------------- |
| `title`   | Título            | {{< data "string" >}}  | Titulo del widget
| `icon`    | Icono             | {{< data "string" >}}  | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero  | {{< data "string" >}}  | Etiqueta `<i>` usando el valor como clase
| `max`     | Máximo            | {{< data "number" >}}  | Número máximo de comentarios a mostrar
| `snippet` | Resumen           | {{< data "number" >}}  | Número máximo caracteres a mostrar
{{< /table >}}

## Ejemplos

{{< code lang="js" >}}
{ content: "comments", title: "Comentarios recientes", max: 8 }
<---->
Se mostrarán los 8 comentarios mas recientes del blog
{{< /code >}}

{{< code lang="js" >}}
{ content: "comments", title: "Comentarios recientes", max: 3, snippet: 100 }
<---->
Se mostrarán los 3 comentarios mas recientes con un límite en el resumen de 100 caracteres.
{{< /code >}}


## Clases CSS

```css
.latest  {
  /*contenedor de comentarios*/
}

.latest-item {
  /*elemento de la lista*/
}

.latest-thumbnail {
  /*contenedor de avatar*/
}

.latest-image {
  /*avatar*/
}

.latest-body {
  /*contenedor de texto*/
}

.latest-snippet {
  /*texto*/
}

.latest-name {
  /*nombre de usuario*/
}
```
