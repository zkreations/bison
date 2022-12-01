---
title: p.ads
weight: 13
---

Inserta **anuncios de AdSense** al principio y al final del articulo automáticamente. Esta opción requiere que [AdSense este habilitado](https://support.google.com/blogger/answer/1269077?hl=es-419) en tu blog.

```html
<Variable name="p.ads" description="Include post ads" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value     | Nombre           | Tipo                    | Descripción   
| --------- | ---------------- | ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita anuncios al principio y al final del articulo
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita los anuncios en entradas
{{< /table >}}

## true

Insertar automáticamente en todos los artículos, un anuncio debajo al principio del cuerpo y otro al final. Los anuncios solo se insertarán si el Blog tiene [AdSense habilitado](https://support.google.com/blogger/answer/1269077?hl=es-419).

#### Al inicio

![p-ads-start](/images/variables/post/p-ads-start.png)

#### Al final

![p-ads-end](/images/variables/post/p-ads-end.png)

## false

Los anuncios al inicio y al final del articulo no estarán disponibles.
