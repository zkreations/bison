---
title: a.tools
weight: 1
---

Muestra la barra de herramientas en la sección "**Diseño**" del panel de administración de Blogger.

```html
<Variable name="a.tools" description="Admin tools" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita la barra de herramientas
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita la barra de herramientas
{{< /table >}}


## true

La barra de herramientas estará disponible en la sección "**Diseño**" del panel de Blogger.

![a-tools-true](/images/variables/admin/a-tools-true.png)

## false

La barra de herramientas se deshabilitará y no estará disponible.

![a-tools-false](/images/variables/admin/a-tools-false.png)


