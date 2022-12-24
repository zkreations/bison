---
title: LinkList
---

Crea una lista de enlaces.

## Vista previa

![widget-link-list](/images/widgets/link-list.png)


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
{ title: "Enlaces" }
```

## Clases CSS

```css
.widget.LinkList {
  /*widget*/
}

.links {
  /*contenedor de enlaces*/
}

.links-link {
  /*enlace*/
}
```