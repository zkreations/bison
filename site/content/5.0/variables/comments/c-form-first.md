---
title: c.formFirst
weight: 3
---

Inserta el formulario de comentarios en la parte superior, antes de mostrar la lista de comentarios.

```html
<Variable name="c.formFirst" description="Form first" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Formulario de comentarios **primero**
| `false` `no`   | Falso     | {{< data boolean >}}    | Formulario de comentarios al **final**
{{< /table >}}


## true

El formulario de comentarios será insertado **antes de la lista de comentarios**. Si las respuestas están habilitadas, el botón para restaurar las respuestas también se situará primero.

![c-newer-true](/images/variables/comments/c-form-first-true.png)


## false

El formulario se insertará después de la lista de comentarios.

![c-newer-false](/images/variables/comments/c-form-first-false.png)