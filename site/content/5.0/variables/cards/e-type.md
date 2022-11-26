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

{{< pagelink title="Demostración tipo Grid" name="Bison" href="https://bison.zkreations.com/search?max-results=8" >}}


## row

El diseño de filas es similar al **modo de resumen**, pero todo el contenido se organiza horizontalmente.

{{< pagelink title="Demostración tipo Row" name="Bison" href="https://bison.zkreations.com/search?max-results=8&view=row" >}}


## portfolio

Diseño de presentación de proyectos o portafolio. La imagen tomará mayor protagonismo y las variables [e.ratio]({{< ref "e-ratio.md" >}}) y [e.colsMin]({{< ref "e-cols-min.md" >}}) están disponibles.

{{< pagelink title="Demostración tipo Portfolio" name="Bison" href="https://bison.zkreations.com/search?max-results=10&view=portfolio" >}}



## classic

Entradas clásicas o estilo **"blog clásico"**, en donde las entradas se organizan en una sola fila, la imagen ocupará mas espacio y el resumen de la entrada será mas largo.

{{< pagelink title="Demostración tipo Classic" name="Bison" href="https://bison.zkreations.com/search?max-results=5&view=classic" >}}


## list

Una lista simple de artículos, que contiene unicamente la miniatura y el título del post. Es el modo mas compacto y puedes controlar la cantidad de columnas con la variable `e.colsMinList`.

{{< pagelink title="Demostración tipo List" name="Bison" href="https://bison.zkreations.com/search?max-results=30&view=list" >}}


## gallery

Galería de imágenes común, en donde la mayor parte de información del articulo no estará disponible. La imagen tomará mayor protagonismo y las variables [e.ratio]({{< ref "e-ratio.md" >}}) y [e.colsMin]({{< ref "e-cols-min.md" >}}) están disponibles.


{{< pagelink title="Demostración tipo Gallery" name="Bison" href="https://bison.zkreations.com/search?max-results=15&view=gallery" >}}



## sparse

Galería de imágenes dispersa. A diferencia de una galería normal, este modo es ideal para mostrar imágenes de **mayor resolución**.

{{< pagelink title="Demostración tipo Sparse" name="Bison" href="https://bison.zkreations.com/search?max-results=9&view=sparse" >}}


## dense

Galería de imágenes densa, similar a la galería común, pero las imágenes en este caso **intentarán organizarse** siguiendo una lógica impuesta.

{{< pagelink title="Demostración tipo Dense" name="Bison" href="https://bison.zkreations.com/search?max-results=21&view=dense" >}}