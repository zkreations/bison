---
title: Buenas prácticas
weight: 3
---

Este tema cuenta con una **excelente optimización**, en la cual seguimos trabajando día a día para mejorar y mantener el rendimiento. No obstante, hay algunas prácticas que pueden **perjudicar la salud del tema**. Presta atención a las siguientes recomendaciones.


## CSS y JS incrustado

No agregues código Javascript o CSS a sitios externos desde el **Editor HTML** ni utilices los widgets HTML para este fin. No los uses para por ejemplo, agregar código similar a este:

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
```

Esta practica aumenta el trabajo del hilo principal y [bloquea el renderizado](https://web.dev/render-blocking-resources/), en consecuencia la optimización se verá perjudicada. Si necesitas agregar archivos de tercero utiliza el botón "**Archivos en cola**" en las [herramientas de administración]({{< ref "a-tools.md" >}}):


![enqueue](/images/enqueue.png)


## Auto compresión de imágenes

Por defecto no todas las imágenes son aptas, pero puedes acceder a esta característica fácilmente utilizando la herramienta "Subir imágenes", en las [herramientas de administración]({{< ref "a-tools.md" >}}). Cuando crees un articulo, sube la primera imagen de la entrada con esta herramienta:

![enqueue](/images/upload-images.png)

Ese enlace es apto ya que pertenece al [nuevo servidor de imágenes de Blogger](https://www.zkreations.com/2022/11/parametros-de-imagenes-de-blogger.html#introducci%C3%B3n), el tema detectará el servidor y aplicará todas las optimizaciones automáticamente. Puedes configurar los parámetros en la variable [f.imageParams](f-image-params.md).

