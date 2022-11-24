---
title: p.pagination
weight: 4
---

Habilita la paginación en los artículos publicados, justo después de los botones de compartir.

```html
<Variable name="p.pagination" description="Pagination in post" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita la paginación de entradas
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita la paginación de entradas
{{< /table >}}


## true

La paginación estará disponible en todas las entradas del blog.

![p-share-on](/images/variables/post/p-pagination.png)


## false

La paginación no estará disponible en las entradas.
