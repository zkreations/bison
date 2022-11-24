---
title: p.sponsor
weight: 2
pro: true
---

Establece la etiqueta que sirve para marcar las entradas que son un anuncio (patrocinio). La etiqueta especificada se excluirá de la lista de etiquetas.

```html
<Variable name="p.sponsor" description="Sponsor label" type="string" value="sponsor"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `null`.

{{< table >}}
| Value                    | Nombre    | Tipo                          | Descripción
| ------------------------ | ----------| ----------------------------- | --------------
| {{<nodata "{label}" >}}  | Etiqueta | {{<nodata "{label}" >}}  | Etiqueta del blog para patrocinadores
{{< /table >}}


## label

El nombre de la etiqueta que sirve para marcar entradas que incluyen un patrocinio. La etiqueta especificada se configuran como **una etiqueta reservada**, por lo tanto no se incluirá a la lista de tus etiquetas.

#### Resúmenes

![p-sponsor](/images/variables/post/p-sponsor.png)

#### Entradas

![p-sponsor-post](/images/variables/post/p-sponsor-post.png)
