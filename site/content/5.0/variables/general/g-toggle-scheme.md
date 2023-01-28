---
title: g.toggleScheme
weight: 2
---

Habilita el botón que permite a los usuarios cambiar y guardar la paleta de colores predeterminada del tema.

```html
<Variable name="g.toggleScheme" description="Show toggle scheme" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita alternador de esquema de color
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita alternador de esquema de color
{{< /table >}}


## true

El botón para alternar entre los valores Sistema, Claro y Oscuro será visible en la sección secundaria del menú principal y estará disponible en cualquier página del blog.

## false

El botón para alternar el esquema de color no estará disponible en el blog.
