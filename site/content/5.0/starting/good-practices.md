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


## Carga diferida

Difiere la carga de las imágenes utilizando el atributo `loading`, de tal forma que solo se descarguen cuando estén próximas a ser vistas. No utilices la carga diferida si la imagen está al inicio del contenido.

{{< code >}}
<img loading="lazy" src="example.png"/>
{{< /code >}}

En ocasiones el atributo `loading` puede no ser suficiente para tí, en estos casos, cualquier etiqueta html que contenga el atributo `src` puede ser reemplazado por `data-src`, lo que ejecuta la **carga diferida mediante javascript**:

{{< code >}}
<iframe data-src="example.com" width="560" height="315"></iframe>
{{< /code >}}


## Optimizar carga de videos

En el caso de los videos, el atributo `loading` no está disponible, pero en estos casos puedes usar `preload` para detener la descarga hasta que el usuario lo quiera y `poster` para especificar una vista previa

{{< code >}}
<video controls preload="none" poster="poster.png">
  <source src="video.mp4" type="video/mp4">
</video>
{{< /code >}}

La carga diferida por javascript también se puede usar con las etiquetas `<audio>` y `<video>`, sin embargo el atributo `data-src` deberá ser especificado en la etiqueta padre:

{{< code >}}
<video data-src="video.mp4" type="video/mp4" controls></video>
{{< /code >}}