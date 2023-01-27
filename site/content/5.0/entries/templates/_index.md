---
title: Templates
---

Los **templates de entradas** permiten indicarle al tema que configuración deseas utilizar para las entradas. Puedes escoger un template por defecto modificando el valor de la variable [p.template]({{< ref "p-template.md" >}}), pero si deseas definir un template individual desde la entrada necesitarás **agregar el siguiente texto** a la primera imagen:

```text
qTemp_
```

En cuanto a las formas de realizarlo, hay distintas maneras y todas son perfectamente válidas, aunque en algunos casos tendrás ventajas, recomiendo escoger el método que te convenga más.

## Nombre de imagen

Este método funciona con **imágenes subidas a Blogger**, para ello deberás agregar el parámetro `qTemp_` seguido del template o templates deseados. Posteriormente sube la imagen a Blogger y al articulo.

<video controls preload="none" poster="/images/posters/image.png">
  <source src="/videos/template-image-name.mp4" type="video/mp4">
</video>


## Nombre de enlace

Funciona con **imágenes ya subidas a Blogger** y solo si la imagen contiene el nombre en la url. Agrega el prefijo `qTemp_` seguido del template o templates deseados. La desventaja de este método es que puede influir en el SEO.

<video controls preload="none" poster="/images/posters/link.png">
  <source src="/videos/template-name-proxy.mp4" type="video/mp4">
</video>


## Parámetro de imagen

Funciona solo con **imágenes alojadas en Google**, a traves de Blogger o google fotos, para ello edita la sección de [parámetros de imagen](https://www.zkreations.com/2022/11/parametros-de-imagenes-de-blogger.html) agregando un guion medio "-" seguido del texto `qTemp_`  y el template o templates deseados. Este método es el mas limpio ya que deja menos rastros.

<video controls preload="none" poster="/images/posters/image-params.png">
  <source src="/videos/template-image-params.mp4" type="video/mp4">
</video>


## Parámetro de enlace

Este método fue creado para **imágenes alojadas en otros servidores**, solo debes agregar el parámetro de url `?qTemp=` y escribe el template o templates deseados. Recuerda que al usar imágenes externas, se pierden muchas propiedades nativas en Blogger.

<video controls preload="none" poster="/images/posters/link-params.png">
  <source src="/videos/template-url-params.mp4" type="video/mp4">
</video>


## Combinar

Puedes combinar templates utilizando también el guion bajo "_" el orden no alterará el resultado final, sin embargo no todas se pueden combinar, presta atención a la siguiente tabla:

{{< table >}}
| Template       | `full`     | `centered` | `hero`     | `fixed`     | `featured` | `product`
| -------------- | ---------- | ---------- | ---------- | ---------- | ---------- | ----------
| `full`         | -          | -          | Si         | Si         | Si         | **No**    
| `centered`     | -          | -          | Si         | Si         | Si         | **No**    
| `hero`         | Si         | Si         | -          | Si         | **No**     | Si        
| `fixed`        | Si         | Si         | Si         | -          | Si         | Si        
| `featured`     | Si         | Si         | **No**     | Si         | -          | Si        
| `product`      | **No**     | **No**     | Si         | Si         | Si         | -         
{{< /table >}}

## Ejemplos

{{< code >}}
qTemp_hero_fixed
<---->
Los estilos hero con fondo fijo. [observar en la demostración](https://bison.zkreations.com/2022/07/white-petaled-flowers.html)
{{< /code >}}

{{< code >}}
qTemp_hero_centered
<---->
Los estilos hero de contenido centrado. [observar en la demostración](https://bison.zkreations.com/2022/08/person-standing-near-rock-formation.html)
{{< /code >}}


{{< code >}}
qTemp_hero_centered_fixed
<---->
Los estilos hero con fondo fijo y contenido centrado. [observar en la demostración](https://bison.zkreations.com/2022/08/girl-sitting-alone-on-bench.html)
{{< /code >}}


{{< code >}}
qTemp_product
<---->
Estilos para productos. [observar en la demostración](https://bison.zkreations.com/2022/05/black-aperture-blur.html)
{{< /code >}}