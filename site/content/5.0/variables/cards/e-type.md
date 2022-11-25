---
title: e.type
weight: 1
pro_heading: "portfolio, list, sparse,  dense"
---

Establece el estilo por defecto para la lista de artículos publicados recientemente. El valor ingresado también afectará al [widget FeaturedPost]({{< ref "FeaturedPost.md" >}}). 

```html
<Variable name="e.type" description="Card type" type="string" value="grid"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `grid`.

{{< table >}}
| Value        | Nombre     | Tipo                | Descripción              
| ------------ | ---------- | ------------------- | -------------------------
| `grid`       | Cuadrícula | {{< data string >}} | Diseño de cuadriculas    
| `row`        | Fila       | {{< data string >}} | Diseño en fila           
| `portfolio`  | Portafolio | {{< data string >}} | Portafolio de proyectos  
| `classic`    | Clásico    | {{< data string >}} | Entradas clásicas        
| `list`       | Lista      | {{< data string >}} | Lista de entradas        
| `gallery`    | Galería    | {{< data string >}} | Galería de imágenes      
| `sparse`     | Disperso   | {{< data string >}} | Galería dispersa         
| `dense`      | Denso      | {{< data string >}} | Galería densa            
{{< /table >}}

## grid

El diseño de cuadriculas mostrará las entradas a **modo de resumen**. Las variables [e.ratio]({{< ref "e-ratio.md" >}}) y [e.colsMin]({{< ref "e-cols-min.md" >}}) están disponibles en este modo, controlando la relación de aspecto y el ancho de la columna respectivamente.

<video controls preload="none">
  <source src="/videos/e-type-grid.mp4" type="video/mp4">
</video>


## row

El diseño de filas es similar al **modo de resumen**, pero todo el contenido se organiza horizontalmente.

<video controls preload="none">
  <source src="/videos/e-type-row.mp4" type="video/mp4">
</video>

## portfolio

Diseño de presentación de proyectos o portafolio. La imagen tomará mayor protagonismo y las variables [e.ratio]({{< ref "e-ratio.md" >}}) y [e.colsMin]({{< ref "e-cols-min.md" >}}) están disponibles.

<video controls preload="none">
  <source src="/videos/e-type-portfolio.mp4" type="video/mp4">
</video>


## classic

Entradas clásicas o estilo **"blog clásico"**, en donde las entradas se organizan en una sola fila, la imagen ocupará mas espacio y el resumen de la entrada será mas largo.

<video controls preload="none">
  <source src="/videos/e-type-classic.mp4" type="video/mp4">
</video>


## list

Una lista simple de artículos, que contiene unicamente la miniatura y el título del post. Es el modo mas compacto y puedes controlar la cantidad de columnas con la variable `e.colsMinList`.

<video controls preload="none">
  <source src="/videos/e-type-list.mp4" type="video/mp4">
</video>


## gallery

Galería de imágenes común, en donde la mayor parte de información del articulo no estará disponible. La imagen tomará mayor protagonismo y las variables [e.ratio]({{< ref "e-ratio.md" >}}) y [e.colsMin]({{< ref "e-cols-min.md" >}}) están disponibles.

<video controls preload="none">
  <source src="/videos/e-type-gallery.mp4" type="video/mp4">
</video>


## sparse

Galería de imágenes dispersa. A diferencia de una galería normal, este modo es ideal para mostrar imágenes de **mayor resolución**.

<video controls preload="none">
  <source src="/videos/e-type-sparse.mp4" type="video/mp4">
</video>


## dense

Galería de imágenes densa, similar a la galería común, pero las imágenes en este caso **intentarán organizarse** siguiendo una lógica impuesta.

<video controls preload="none">
  <source src="/videos/e-type-dense.mp4" type="video/mp4">
</video>