---
title: a.jumpLink
weight: 4
---

Muestra un aviso en las entradas cuando falta la etiqueta `<!--more -->` o salto de línea.

```html
<Variable name="a.jumpLink" description="JumpLink alert" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita la alerta del saldo de línea
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita la alerta del saldo de línea
{{< /table >}}

## true

La alerta aparecerá en todos los artículos en donde el salto de línea o etiqueta `<!--more -->` este ausente. Requiere iniciar sesión en Blogger ya que **solo es visible para administradores**. 

![a-jumpLink-true](/images/variables/admin/a-jumpLink-true.png)

## false

La alerta no se mostrará en los artículos bajo ningún caso.