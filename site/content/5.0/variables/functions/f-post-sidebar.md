---
title: f.postSidebar
weight: 2
---

Habilita una barra lateral exclusiva para las **entradas**, con widgets y configuraciones propias.

```html
<Variable name="f.postSidebar" description="Custom post sidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el sidebar exclusivo de entradas
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el sidebar exclusivo de entradas
{{< /table >}}


## true

La barra lateral **exclusiva de entradas** estará disponible.

![f-post-sidebar](/images/variables/functions/f-post-sidebar.png)


## false

La barra lateral **exclusiva de entradas** no estará disponible en el blog.
