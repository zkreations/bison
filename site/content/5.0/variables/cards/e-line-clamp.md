---
title: e.lineClamp
weight: 7
---

Establece el número máximo de líneas para los resúmenes de entradas. Esta variable se combina con [e.truncate]({{< ref "e-truncate.md" >}}), siendo **e.lineClamp** la que **tendrá prioridad** cuando la cantidad de caracteres sobrepasen el limite establecido de lineas.

```html
<Variable name="e.lineClamp" description="Number of lines" type="string" value="3"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value         | Nombre             | Tipo                | Descripción
| ------------- | -------------------| --------------------| --------------
| `0-99`        | Cantidad de líneas | {{< data number >}} | Cantidad máxima de líneas de texto.
{{< /table >}}

## 0-99

La cantidad de **lineas de texto máximas** para los resúmenes de artículos. Si el valor ingresado es `0` no se establecerá ningún límite.
