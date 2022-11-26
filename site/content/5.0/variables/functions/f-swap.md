---
title: f.swap
weight: 5
---

Intercambia de lugar el cuerpo del **blog** con el **sidebar**.

```html
<Variable name="f.swap" description="Swap blog and sidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre     | Tipo                 | Descripción   
| -------------- | ---------- | -------------------- | --------------
| `true` `yes`   | Verdadero  | {{< data boolean >}} | Intercambia la posición del blog con el sidebar
| `false` `no`   | Falso      | {{< data boolean >}} | Mantiene la posición del blog y el sidebar
{{< /table >}}


## true

El contenido del blog pasa al lado derecho. El sidebar ocupará la posición original del blog.

## false

El blog y el sidebar mantienen su posición original.
