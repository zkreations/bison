---
title: p.highlight
weight: 7
---

Habilita el resaltador de código utilizando [highlight.js](https://highlightjs.org/). La librería será solicitada unicamente en los artículos que contienen bloques de código. 

```html
<Variable name="p.highlight" description="Enable highlight.js" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el resaltador de código
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el resaltador de código
{{< /table >}}

## true

El resaltador de código estará disponible en los artículos. Para maximizar el rendimiento, la librería [highlight.js](https://highlightjs.org/) solo se solicita en los artículos que contengan **al menos un bloque de código**.


![p-highlight-true](/images/variables/post/p-highlight-true.png)


## false

El resaltador de código no estará disponible en el blog.

![p-highlight-false](/images/variables/post/p-highlight-false.png)