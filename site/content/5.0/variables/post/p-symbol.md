---
title: p.symbol
weight: 1
pro: true
---

Establece el símbolo de tu moneda, este valor se usa para definir los precios a modo de información en artículos que contienen un producto, también se excluirá de la lista de etiquetas.

```html
<Variable name="p.symbol" description="Currency symbol" type="string" value="$"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value                       | Nombre    | Tipo                          | Descripción
| --------------------------- | ----------| ----------------------------- | --------------
| {{<nodata "{currency}" >}}  | Símbolo de moneda | {{<nodata "{symbol}" >}}  | Símbolo de tu moneda local
{{< /table >}}


## currency

El símbolo que corresponde a la moneda utilizada en tu blog. Todas las etiquetas que contengan este símbolo se configuran como **una etiqueta reservada**, por lo tanto no se incluirá a la lista de tus etiquetas. Solo se permite un tipo de moneda por blog.

#### Resúmenes

![p-symbol](/images/variables/post/p-symbol.png)

#### Entradas

![p-symbol-post](/images/variables/post/p-symbol-post.png)