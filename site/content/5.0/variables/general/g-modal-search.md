---
title: g.modalSearch
weight: 3
---

Habilita el botón que muestra el buscador en una ventana modal, visible en todos los tipos de página.

```html
<Variable name="g.modalSearch" description="Enable modal search" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el botón que muestra la búsqueda en modal
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el botón de búsqueda modal
{{< /table >}}


## true

El botón que muestra el formulario de búsqueda en un modal será visible en la sección secundaria del menú principal y estará disponible en cualquier página del blog.


![g-modal-search](/images/variables/general/g-modal-search.png)


## false

El botón y el formulario de búsqueda en modal no estará disponible en el blog.
