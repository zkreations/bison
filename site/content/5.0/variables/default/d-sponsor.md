---
title: d.sponsor
weight: 6
pro: true
---

Establece un enlace por defecto que sirve como página de aterrizaje para los artículos patrocinados.

```html
<Variable name="d.sponsor" description="Sponsor url" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será tratado como un enlace.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `link`         | Enlace de aterrizaje    | {{< data string >}}  | Enlace de indicador **"sponsor"**
{{< /table >}}


## link

El enlace del indicador que marca los artículos patrocinados, que sirven como **página de aterrizaje**. Si no se especifica, el indicador perderá los atributos de enlace.

![d-sponsor](/images/variables/default/d-sponsor.png)
