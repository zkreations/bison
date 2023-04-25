---
title: p.relCols
weight: 12
---

Ancho mínimo para las columnas de los artículos relacionados. El valor esperado deberá ser una [unidad de medida](https://lenguajecss.com/css/modelo-de-cajas/unidades-css/) válida (rem, px, em, etc).

```html
<Variable name="p.relCols" description="Min related width" type="string" value="18rem"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value     | Nombre           | Tipo                    | Descripción   
| --------- | ---------------- | ------------------------| --------------
| `unit`    | Unidad de medida | {{< nodata "{unit}" >}} | Ancho mínimo de columnas de relacionados
{{< /table >}}


## unit

La unidad de medida especificada servirá para indicarle a las columnas **hasta que punto pueden reducir su ancho**. Cuando el ancho mínimo es alcanzado, las columnas continuarán en la siguiente fila, lo que favorece al diseño responsive.
