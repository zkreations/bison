---
title: Hero
weight: 1
pro_heading: "Fondo transparente, Contenido centrado"
---

Destaca la primera imagen, el título y los metadatos de la entrada. Configura la variable [p.template]({{< ref "p-template.md" >}}) para mostrar esta plantilla en todos los artículos, o agrega a la primera imagen el comando [usando uno de los 3 métodos]({{< ref "/5.0/entries/templates/" >}}):

{{< code >}}
qTemp_hero
{{< /code >}}

Puedes ver una vista previa de el modo hero en la página de demostración.

{{< pagelink title="Demostración Hero" name="Bison" href="https://bison.zkreations.com/2022/09/blonde-girl-looking-at-camera.html" >}}

## Imagen diferente

Para destacar una imagen diferente a la principal, activa los [enlaces de adjuntos]({{< ref "config.md#habilitar-enlaces-de-adjuntos" >}}) en tu blog, luego ingresa la url de una **imagen** como adjunto.

## Video de fondo

Para destacar un video activa los [enlaces de adjuntos]({{< ref "config.md#habilitar-enlaces-de-adjuntos" >}}) en tu blog, luego ingresa la url de un **archivo mp4** como adjunto. El enlace al video debe ser de descarga directa.

{{< pagelink title="Demostración Hero video" name="Bison" href="https://bison.zkreations.com/2022/10/couple-walking-down-road.html" >}}


En este caso la imagen principal será la portada del video. Si no cuentas con un hosting para alojar videos, puedes usar servicios gratuitos:

{{< pagelink title="Crear enlaces de descarga directa en Google Drive" name="zkreations" href="https://www.zkreations.com/2018/01/como-crear-enlaces-descarga-directa-google-drive.html" >}}


## Fondo transparente

Este modo transparenta el fondo del header hero y en su lugar la imagen principal se usa como fondo del blog. Para conseguirlo, debes combinar las plantillas `hero` y `fixed` con el siguiente comando:

{{< code >}}
qTemp_hero_fixed
{{< /code >}}

Puedes ver una vista previa de este modo en la página de demostración.

{{< pagelink title="Demostración Hero + Fixed" name="Bison" href="https://bison.zkreations.com/2022/07/white-petaled-flowers.html" >}}


## Contenido centrado

Este modo remueve el sidebar y centra el contenido del articulo ademas de mostrar la imagen destacada. Para conseguirlo, debes combinar las plantillas `hero` y `centered` con el siguiente comando:

{{< code >}}
qTemp_hero_centered
{{< /code >}}

Observa una vista previa de esta combinación en la página de demostración.

{{< pagelink title="Demostración Hero + Centered" name="Bison" href="https://bison.zkreations.com/2022/10/white-desert-rose-girl.html" >}}
