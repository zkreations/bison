---
title: Hooks
---

Los **hooks** o **ganchos** te permiten reemplazar componentes en areas especificas del tema. Estas modificaciones solo se deben realizar por un desarrollador experimentado, de lo contrario causarás problemas en la tema.


## Crear componentes

Tan solo debes dirigirte al **editor HTML** del tema, y desplazarte hasta el final del código, arriba de `</body>`, en donde deberás agregar la siguiente estructura:


```html
<b:defaultmarkups>
  <b:defaultmarkup type="Common">
    <b:includable id="HOOK_NAME">
      <!-- Tu código personalizado  -->
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
```

## Hooks

Aunque puedes modificar cualquier componente del tema, no es recomendable, por lo tanto la siguiente tabla contiene una lista de los hooks considerados "**Seguros de modificar**" por el desarrollador:


{{< table >}}
| Hook               | Destino       | Descripcion
| ------------------ | ------------- | --------------------
| `post:ads1`        | Entrada      | Anuncio debajo del título de la entrada
| `post:ads2`        | Entrada      | Anuncio al final de la entrada
| `post:labels`      | Entrada      | Etiquetas de la entrada
| `post:title`       | Entrada      | Título de la entrada
| `post:data`        | Entrada      | Datos de la entrada
| `post:attachments` | Adjuntos      | Enlaces de adjunto de la entrada
| `post:share`       | Compartir      | Botones de compartir de la entrada
| `comment:main`     | Comentarios   | Sección de comentarios de la entrada
| `post:icon`        | Widget Blog   | Inserta código en el título del widget
{{< /table >}}


## Ejemplos

{{< code lang="html" >}}
<b:defaultmarkups>
  <b:defaultmarkup type="Common">
    <b:includable id="post:ads1">
      <p>Primer código de anuncio personalizado</p>
    </b:includable>
    <b:includable id="post:ads2">
      <p>Código de anuncio personalizado final</p>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Se insertará tu código personalizado al inicio y al final del articulo.
{{< /code >}}


{{< code lang="html" >}}
<b:defaultmarkups>
  <b:defaultmarkup type="Common">
    <b:includable id="post:share">
      <p>Mis botones personalizados</p>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Se insertará tu código personalizado para compartir un articulo
{{< /code >}}


{{< code lang="html" >}}
<b:defaultmarkups>
  <b:defaultmarkup type="Common">
    <b:includable id="comment:main">
      <p>Mi propio sistema de comentarios</p>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Se insertará tu sistema de comentarios personalizado
{{< /code >}}


{{< code lang="html" >}}
<b:defaultmarkups>
  <b:defaultmarkup type="Common">
    <b:includable id="post:icon">
      <b:include name='i:svg' data='{ icon: "fire" }'/>
    </b:includable>
  </b:defaultmarkup>
</b:defaultmarkups>
<---->
Insertará un [icono de zkreations](#url) en el título del widget Blog
{{< /code >}}



