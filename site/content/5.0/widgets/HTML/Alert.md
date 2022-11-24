---
title: Alert
---

Convierte el contenido en un mensaje informativo. Este widget solo es accesible como un super widget. Reemplaza el título de un **widget HTML** por el siguiente dato tipo {{< data "object" >}} de Blogger:

```js
{ content: "alert" }
```

## Vista previa

![widget-alert](/images/widgets/alert.png)


## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible.

## Opciones

{{< table >}}
| Key       | Descripción       | Tipo                   | Valores
| --------- | ----------------- | ---------------------- | ------------- |
| `type`    | Tipo de alerta    | {{< data "string" >}}  | `warning` `info` `danger` `success`
| `close`   | Alerta cerrable   | {{< data "boolean" >}} | `true` `false`
{{< /table >}}

## Ejemplos

{{< code lang="js" >}}
{ content: "alert", close: false }
<---->
La alerta **no se podrá cerrar** por el usuario
{{< /code >}}

{{< code lang="js" >}}
{ content: "alert", type: "warning" }
<---->
Los estilos de la alerta serán de advertencia
{{< /code >}}

## Clases CSS

```css
.widget.Alert {
  /*widget*/
}
```
