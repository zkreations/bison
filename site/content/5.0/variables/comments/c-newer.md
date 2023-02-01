---
title: c.newer
weight: 2
---

Establece por defecto el orden de los comentarios desde el más reciente al más antiguo.

```html
<Variable name="c.newer" description="New comments first" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `false`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Ordena comentarios del **más nuevo** al más antiguo
| `false` `no`   | Falso     | {{< data boolean >}}    | Ordena comentarios del **más antiguo** al más nuevo
{{< /table >}}


## true

Los comentarios y las respuestas de los comentarios se ordenaran desde el **más nuevo** al más antiguo.

## false

Los comentarios y las respuestas de los comentarios se ordenaran desde el **más antiguo** al más reciente.


