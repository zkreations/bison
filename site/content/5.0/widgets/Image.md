---
title: Image
---

Inserta una imagen que puede contener un enlace y descripción.

## Vista previa

![widget-image](/images/widgets/image.png)

## Reducir hasta ajustar

Al marcar esta opción la imagen reducirá su ancho a `500` pixeles. Esta opción es ideal si se pretende utilizar este widget como un anuncio o banner en el **Sidebar**.

## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible.

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
{{< /table >}}

```js
{ title: "Imagen" }
```

## Clases CSS

```css
.widget.Image {
  /*widget*/
}

.media {
  /*contenedor de imagen*/
}

.media-caption {
  /*texto de la imagen*/
}
```