---
title: FeaturedPost
---

El widget de post destacados interpreta todas las configuraciones del **widget Blog**. Si realizas cambios en las [variables Cards]({{< ref "e-type.md" >}}) también afectarán a este widget.

## Vista previa

![widget-featured-post](/images/widgets/featured-post.png)

## Disponibilidad

Este widget esta disponible en todas las secciones menos en **Filters** y **Header**.

## Super widget

{{< table >}}
| Key      | Nombre               | Tipo                  | Descripción 
| -------- | -------------------- | --------------------- | --------------
| `title`  | Título               | {{< data "string" >}} | Titulo del widget
| `icon`   | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`      | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
| `type`   | Tipo de entrada      | {{< data "string" >}} | Un valor de la variable [e.type]({{< ref "e-type.md" >}})
{{< /table >}}

```js
{ title: "Destacado", type: "portfolio" }
```

## Clases CSS

```css
.widget.FeaturedPost {
  /*widget*/
}
```


