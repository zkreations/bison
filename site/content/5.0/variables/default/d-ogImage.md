---
title: d.ogImage
weight: 2
---

Imagen por defecto (1200x630) para meta datos de Open Graph. Esta imagen se utilizará siempre en la página principal y en todas las entradas que no contengan imagen.

```html
<Variable name="d.ogImage" description="og:imagen" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será tratado como una imagen.

{{< table >}}
| Value          | Nombre            | Tipo               | Descripción
| -------------- | ----------------- | ------------------ | --------------
| `og-image.jpg`  | Imagen Open Graph | {{< data image >}} | Imagen destinada a la etiqueta `og:image`
{{< /table >}}


## og-image.jpg

La imagen que se usará al compartir el enlace de la página principal en redes. También se recurrirá a esta imagen cuando la entrada no posea imágenes en su contenido.

#### Facebook

{{< og >}}

#### Twitter

{{< og type="twitter" >}}

#### Discord

{{< og type="discord" >}}
