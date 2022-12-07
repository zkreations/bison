---
title: f.more
weight: 7
---

Oculta la paginación de la página principal y en su lugar muestra el botón "Más →" en el título del widget Blog, lo que ayuda a **mantener la simetría**.

```html
<Variable name="f.more" description="Show more button" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el botón "Más →" del widget Blog
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el botón "Más →" del widget Blog
{{< /table >}}


## true

El botón "Más →" estará disponible al otro extremo del titulo del widget Blog. Su función es llevar al usuario a la **paginación configurada** en la variable [f.pagination]({{< ref "f-pagination.md" >}}).


## false

El botón "Más →" no estará disponible en el blog.

