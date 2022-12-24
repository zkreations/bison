---
title: PopularPosts
---

Muestra las entradas mas vistas en el periodo y cantidad especificadas.

## Vista previa

![widget-popularposts](/images/widgets/popularposts.png)


## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible. Si la sección es **Header** se convierte en el [widget Breaking news]({{< ref "breaking-news.md" >}})

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
| `type`    | Tipo de entrada      | {{< data "string" >}} | Un valor de la variable [e.type]({{< ref "e-type.md" >}})
| `content` | Contenido            | {{< data "string" >}} | Permite cambiar a otro tipo de widget
{{< /table >}}

```js
{ title: "Populares", type: "grid" }
```

{{< hint "warning" >}}
La opción "type" solo tendrá efecto si el widget de Entradas Populares se encuentra en la sección **Upper**, **After-Content**, **Before-Content** o **Content**.
{{< /hint >}}


## Clases CSS

```css
.widget.PopularPosts {
  /*widget*/
}

.populars {
  /*contenedor de populares*/
}

.populars-item {
  /*elementos de populares*/
}

.populars-body  {
  /*cuerpo de populares*/
}

.populars-name  {
  /*titulo de la entrada*/
}

.populars-meta {
  /*datos de la entrada*/
}

.populars-snippet {
  /*resumen de la entrada*/
}

.populars-image {
  /*imagen de perfil*/
}
```