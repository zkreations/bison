---
title: ContactForm
---

Genera el formulario de contacto. Requiere configurar el identificador único de un formulario creado en [formspree.io](https://formspree.io/) en la variable [g.formspree]({{< ref "g-formspree.md" >}})

## Vista previa

![widget-contactform](/images/widgets/contactform.png)

## Disponibilidad

Este widget esta disponible en todas las secciones menos en **Filters** y **Header**.

## Super widget

{{< table >}}
| Key      | Nombre               | Tipo                  | Descripción 
| -------- | -------------------- | --------------------- | --------------
| `title`  | Título               | {{< data "string" >}} | Titulo del widget
| `icon`   | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`      | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
{{< /table >}}

```js
{ title: "Contacto" }
```

## Clases CSS

```css
.widget.ContactForm {
  /*widget*/
}

.contact-form {
  /*formulario*/
}

.contact-input {
  /*Campos de datos*/
}

.contact-textarea {
  /*Contenido del mensaje*/
}

.contact-button {
  /*Botón enviar*/
}
```

