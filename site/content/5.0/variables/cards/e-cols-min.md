---
title: e.colsMin
weight: 4
---

Ancho mínimo para las columnas de artículos. El valor esperado deberá ser una [unidad de medida](https://lenguajecss.com/css/modelo-de-cajas/unidades-css/) válida (rem, px, em, etc). Solo afecta a las entradas tipo `grid`, `portfolio` y `gallery`.

```html
<Variable name="e.colsMin" description="Min column width" type="string" value="16rem"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value     | Nombre           | Tipo                    | Descripción   
| --------- | ---------------- | ------------------------| --------------
| `unit`    | Unidad de medida | {{< nodata "{unit}" >}} | Ancho mínimo de columnas
{{< /table >}}

## unit

La unidad de medida especificada servirá para indicarle a las columnas **hasta cuanto pueden reducir su ancho**. Cuando el ancho mínimo es alcanzado, las columnas continuarán en la siguiente fila, lo que favorece al diseño responsive.

![e-cols-min](/images/variables/cards/e-cols-min.png)
