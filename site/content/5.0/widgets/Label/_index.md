---
title: Label
---

Crea una lista de etiquetas disponibles en el Blog.

## Vista previa

![widget-label](/images/widgets/label.png)


## Disponibilidad

Este widget esta disponible en todas las secciones menos en **Header**. Si la sección es **Filters** se convierte en el 
[widget Filters]({{< ref "filters.md" >}})

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
| `max`     | Máximo               | {{< data "number" >}} | Número máximo de etiquetas a mostrar
{{< /table >}}

```js
{ title: "Etiquetas", max: 5 }
```

## Clases CSS

```css
.widget.Label {
  /*widget*/
}

.labels {
  /*contenedor de etiquetas*/
}

.labels-link {
  /*etiqueta*/
}

.labels-num {
  /*numero de entradas*/
}
```