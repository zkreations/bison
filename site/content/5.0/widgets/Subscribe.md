---
title: Subscribe
---

Genera el formulario de suscripción. Requiere configurar el nombre de usuario de Revue en la variable [g.revue]({{< ref "g-revue.md" >}}). También requiere que el Blog sea público.

## Vista previa

![widget-subscribe](/images/widgets/subscribe.png)

## Disponibilidad

Este widget esta disponible en todas las secciones menos en **Filters** y **Header**.

## Super widget

{{< table >}}
| Key      | Nombre               | Tipo                  | Descripción 
| -------- | -------------------- | --------------------- | --------------
| `title`  | Título               | {{< data "string" >}} | Titulo del widget
| `icon`   | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](#icons)
{{< /table >}}

```js
{ title: "Suscríbete" }
```

## Clases CSS

```css
.widget.Subscribe {
  /*widget*/
}

.subscribe-form {
  /*formulario*/
}

.subscribe-input {
  /*Campos de datos*/
}

.subscribe-button {
  /*Botón enviar*/
}
```

