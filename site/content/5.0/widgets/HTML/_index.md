---
title: HTML
---

Inserta un bloque de código interpretable. Aunque es posible insertar código javascript y css, el desarrollador de este tema **no lo recomienda** para conservar la **perfecta optimización**.

## Vista previa

No disponible para este widget

## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible.

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
| `content` | Contenido            | {{< data "string" >}} | Permite cambiar a otro tipo de widget
{{< /table >}}

```js
{ title: "Contacto", content: "alert" }
```

## Clases CSS

```css
.widget.HTML {
  /*widget*/
}
```