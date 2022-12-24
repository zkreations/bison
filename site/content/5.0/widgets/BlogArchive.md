---
title: BlogArchive
---

Crea una lista de entradas organizada por año, mes, semana y día. También esta disponible el modo flat, que solo muestra las fechas del archivo en una lista simple.

## Vista previa

#### Hierarchy

![widget-BlogArchive](/images/widgets/blog-archive.png)


#### Flat

![widget-BlogArchive-flat](/images/widgets/blog-archive-flat.png)


## Disponibilidad

Este widget esta disponible en todas las secciones menos en **Filters** y **Header**.

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
{{< /table >}}

```js
{ title: "Archivo" }
```

## Clases CSS

```css
.widget.BlogArchive {
  /*widget*/
}

.hierarchy {
  /*contenedor hierarchy*/
}

.hierarchy-list {
  /*contenedor de lista*/
}

.hierarchy-item {
  /*elemento de lista*/
}

.hierarchy-date {
  /*fecha de archivo*/
}

.hierarchy-name {
  /*año o mes de archivo*/
}

.hierarchy-count {
  /*contador de entradas de archivo*/
}

.hierarchy-content {
  /*contenedor de archivo*/
}

.hierarchy-posts {
  /*lista de entradas*/
}

.hierarchy-post {
  /*entrada*/
}

.hierarchy-post-link {
  /*enlace de entrada*/
}

.flat {
  /*contenedor flat*/
}

.flat-list {
  /*contenedor de lista*/
}

.flat-item {
  /*elemento de lista*/
}

.flat-link {
  /*enlace de lista*/
}

.flat-name {
  /*año o mes de archivo*/
}

.flat-count {
  /*contador de entradas de archivo*/
}
```