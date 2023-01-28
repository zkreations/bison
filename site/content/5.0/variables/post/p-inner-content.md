---
title: p.innerContent
weight: 6
---

Inyecta contenido HTML ingresado desde el **modo Diseño** en las entradas, cada cierto número de párrafos o bloques que puedes configurar.

```html
<Variable name="p.innerContent" description="Internal content every" type="string" value="4"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `3`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `1-12`         | Bloques   | {{< data number >}}     | Inyecta HTML según la cantidad especificada
{{< /table >}}


## 1-12

Los **bloques HTML inyectables** en los artículos estarán disponibles cada cierto numero de párrafos `<p>` o bloques `<div>` configurados.
