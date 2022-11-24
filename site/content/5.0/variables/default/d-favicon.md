---
title: d.favicon
weight: 1
---

Reemplaza favicon.ico (16x16) de Blogger o del usuario por la imagen ingresada. Se recomienda utilizar una imagen de al menos 192 pixeles de alto y ancho (192x192) subida a Blogger.

```html
<Variable name="d.favicon" description="HD favicon" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será tratado como una imagen.

{{< table >}}
| Value          | Nombre     | Tipo                    | Descripción   
| -------------- | ---------- | ------------------------| --------------
| `favicon.png`  | Favicon HD | {{< data image >}}      | Favicon de alta resolución en formato PNG
{{< /table >}}


## favicon.png

El enlace de tu favicon en alta resolución. Aunque puedes utilizar imágenes de cualquier servidor, recomendamos utilizar **imágenes alojadas por Google** a través de Blogger o Google fotos. Se generan favicons de 16x16, 32x32, 96x96, 180x180 y 192x192 que se utilizarán en diferentes dispositivos.

#### 16x16

![favicon 16x16](/images/variables/default/favicon16.png)

#### 32x32

![favicon 32x32](/images/variables/default/favicon32.png)

#### 192x192

![favicon 192x192](/images/variables/default/favicon192.png)


