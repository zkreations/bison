---
title: e.truncate
weight: 6
---

Cantidad máxima de caracteres para los resúmenes de entradas. Solo afecta a las entradas tipo `grid`, `row` y `classic`.

```html
<Variable name="e.truncate" description="Amount of text" type="string" value="100"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `100`.

{{< table >}}
| Value          | Nombre              | Tipo                 | Descripción
| -------------- | ------------------- | -------------------- | --------------
| `50-1000`      | Cantidad de dígitos | {{< data number >}}  | Establece la cantidad máxima de caracteres
{{< /table >}}


## 50-1000

La cantidad de dígitos ingresada limitará la salida de caracteres que se extrae en el resumen del articulo. El valor mínimo aceptable es `50` y el máximo `1000`, cualquier valor superior o inferior a los limites serán ignorados.