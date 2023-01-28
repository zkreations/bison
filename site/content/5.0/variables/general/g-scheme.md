---
title: g.scheme
weight: 1
---

Establece el esquema de colores predeterminados del tema.

```html
<Variable name="g.scheme" description="Scheme by default" type="string" value="system"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `system`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `system`   | Sistema | {{< data string >}}    | Establece el esquema del sistema
| `light`   | Claro | {{< data string >}}    | Establece el esquema de colores claros
| `dark`   | Oscuro | {{< data string >}}    | Establece el esquema de colores oscuros
{{< /table >}}


## system

Detecta si el usuario ha solicitado un tema de color **claro** u **oscuro**, indicando la preferencia a través de la configuración del sistema operativo o una configuración de [agente de usuario](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

## light

Establece como predeterminado el esquema de colores claros

![g-scheme-light](/images/variables/general/g-scheme-light.png)

## dark

Establece como predeterminado el esquema de colores oscuros

![g-scheme-dark](/images/variables/general/g-scheme-dark.png)
