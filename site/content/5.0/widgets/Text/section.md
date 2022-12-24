---
title: Section
---

Inserta entradas por etiquetas. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget Text** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "section" }
```

## Vista previa

![widget-section](/images/widgets/section.png)

## Entradas externas

Para cargar entradas provenientes de otro blog, ingresa en el campo "Contenido" la dirección del blog externo, el cual deberá contar con los [feeds habilitados]({{< ref "config.md#habilitar-los-feeds" >}}) y ser **público**.

![widget-section-url](/images/widgets/section-url.png)

## Disponibilidad

Este widget solo esta disponible en la sección **After-Content** y **Before-Content**.

## Opciones

{{< table >}}
| Key       | Descripción       | Tipo                   | Valores
| --------- | ----------------- | ---------------------- | ------------- |
| `title`   | Título            | {{< data "string" >}}  | Titulo del widget
| `icon`    | Icono             | {{< data "string" >}}  | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`       | Icono de tercero  | {{< data "string" >}}  | Etiqueta `<i>` usando el valor como clase
| `label`   | Etiqueta          | {{< data "string" >}}  | Nombre de la etiqueta
| `type`    | Tipo de entrada   | {{< data "string" >}}  | Un valor de la variable [e.type]({{< ref "e-type.md" >}})
| `max`     | Máximo            | {{< data "number" >}}  | Cantidad de entradas a extraer
{{< /table >}}

## Ejemplos

{{< code lang="js" >}}
{ content: "section", label: "travel" }
<---->
Se mostrarán las 4 ultimas entradas del blog con la etiqueta "**travel**"
{{< /code >}}

{{< code lang="js" >}}
{ content: "section", label: "food", max: 8 }
<---->
Se mostrarán las 8 ultimas entradas del blog con la etiqueta "**food**"
{{< /code >}}

{{< code lang="js" >}}
{ content: "section", label: "airplane", type: "gallery"  }
<---->
Se mostrarán las 4 ultimas entradas del blog con la etiqueta "**airplane**" utilizando el [estilo gallery]({{< ref "e-type.md#gallery" >}})
{{< /code >}}


## Clases CSS

```css
.widget.Section  {
  /*widget*/
}
```
