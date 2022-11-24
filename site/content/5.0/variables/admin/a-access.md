---
title: a.access
weight: 2
---

Cambia el diseño del panel de administración a una version más accesible en donde el botón "Editar" esta presente.

```html
<Variable name="a.access" description="Accessibility mode" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el modo accesible
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el modo accesible
{{< /table >}}


## true

Los widgets en la sección "Diseño" volverán a contar con el lápiz clásico para modificar sus opciones.

![a-access-true](/images/variables/admin/a-access-true.png)

## false

Se elimina el lápiz y en su lugar al pulsar sobre cualquier zona del widget despliega las opciones.

![a-access-false](/images/variables/admin/a-access-false.png)
