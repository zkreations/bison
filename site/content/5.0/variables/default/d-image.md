---
title: d.image
weight: 3
---

Establece la imagen por defecto cuando no hay imágenes en el articulo. **No se utilizará para la vista previa** de los artículos sin imágenes compartidos en redes sociales.

```html
<Variable name="d.image" description="Imagen" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será tratado como una imagen.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `image.jpg`   | Sin imagen | {{< data image >}}       | Imagen por defecto
{{< /table >}}


## image.jpg

El enlace de una imagen válida. Aunque puedes utilizar imágenes de cualquier servidor, recomendamos utilizar **imágenes alojadas por Google** a través de Blogger o Google fotos.

![d-image](/images/variables/default/d-image.png)