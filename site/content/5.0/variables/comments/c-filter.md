---
title: c.filter
weight: 5
---

Habilita el filtro de enlaces, lo que **ocultará el contenido** de los comentarios que contengan enlaces externos. También puede ocultar **solo el enlace** y mostrar el resto del comentario.

```html
<Variable name="c.filter" description="Enable link filter" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `only-links`   | Solo enlaces     | {{< data string >}}    | Oculta solo los enlaces
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Oculta comentarios con enlaces
| `false` `no`   | Falso     | {{< data boolean >}}    | No se ocultan comentarios con enlaces
{{< /table >}}


## only-links

Oculta solo los enlaces del comentario, lo que dejará visible el resto del contenido. Puedes configurar el texto del enlace modificando la variable [t.hiddenLink]({{< ref "../text.md" >}}).

## true

Oculta todo el contenido de los comentarios y deja un aviso en su lugar. Puedes configurar el mensaje que quedará en su lugar modificando la variable de texto [t.filtered]({{< ref "../text.md" >}}).

## false

Los comentarios con enlaces estarán permitidos y no se tomará ninguna medida contra los enlaces.