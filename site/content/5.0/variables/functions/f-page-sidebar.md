---
title: f.pageSidebar
weight: 3
---

Habilita una barra lateral exclusiva para las **páginas estáticas**, con widgets y configuraciones propias.

```html
<Variable name="f.pageSidebar" description="Custom page sidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el sidebar exclusivo de páginas
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el sidebar exclusivo de páginas
{{< /table >}}


## true

La barra lateral **exclusiva de páginas** estará disponible.

![f-post-sidebar](/images/variables/functions/f-page-sidebar.png)

## false

La barra lateral **exclusiva de páginas** no estará disponible en el blog.