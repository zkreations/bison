---
title: TextList
---

Crea una lista de texto simple.

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
| `i`      | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
{{< /table >}}

```js
{ title: "Lista de texto" }
```

## Clases CSS

```css
.widget.TextList {
  /*widget*/
}
```