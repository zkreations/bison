---
title: PageList
---

Crea una lista de enlaces utilizando las páginas del blog. También se aceptan enlaces externos.

## Vista previa

![widget-link-list](/images/widgets/pagelist.png)


## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible. Si la sección es **Header** se convierte en el 
[widget Navbar]({{< ref "navbar.md" >}})

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
{{< /table >}}

```js
{ title: "Lista de páginas" }
```

## Clases CSS

```css
.widget.PageList {
  /*widget*/
}

.pagelist {
  /*contenedor de páginas*/
}

.pagelist-link {
  /*enlace*/
}
```