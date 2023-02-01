---
title: e.colsMinList
weight: 5
pro: true
---

Ancho mínimo para las columnas de entradas tipo `list`. El valor esperado deberá ser una [unidad de medida](https://lenguajecss.com/css/modelo-de-cajas/unidades-css/) válida (rem, px, em, etc).

```html
<Variable name="e.colsMinList" description="Min column width of list" type="string" value="20rem"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value     | Nombre           | Tipo                    | Descripción   
| --------- | ---------------- | ------------------------| --------------
| `unit`    | Unidad de medida | {{< nodata "{unit}" >}} | Ancho mínimo de listas
{{< /table >}}

## unit

La unidad de medida especificada servirá para indicarle a las listas **hasta cuanto pueden reducir su ancho**. Cuando el ancho mínimo es alcanzado, las listas continuarán en la siguiente fila, lo que favorece al diseño responsive.
