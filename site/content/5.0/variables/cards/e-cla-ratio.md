---
title: e.claRatio
weight: 10
---

Establece la relación de aspecto por defecto para las imágenes de las **entradas tipo classic**.

```html
<Variable name="e.claRatio" description="Classic cover ratio" type="string" value="21:9"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `16:9`.

{{< table >}}
| Value    | Nombre     | Tipo                            | Descripción 
| -------- | ---------- | ------------------------------- | --------------
| `21:9`   | Ultrawide  | {{< nodata "{aspect_ratio}" >}} | Imagen ultra ancha
| `16:9`   | Widescreen | {{< nodata "{aspect_ratio}" >}} | Imagen ancha
| `4:3`    | Fullscreen | {{< nodata "{aspect_ratio}" >}} | Imagen cuatro tercios
| `1:1`    | Square     | {{< nodata "{aspect_ratio}" >}} | Imagen cuadrado perfecto
| `1:2`    | Rectangle  | {{< nodata "{aspect_ratio}" >}} | Imagen rectangular vertical
| `2:3`    | Printing   | {{< nodata "{aspect_ratio}" >}} | Imagen de impresión
| `5:7`    | Cover      | {{< nodata "{aspect_ratio}" >}} | Imagen portada de película
{{< /table >}}


## 21:9

**Ultra ancha**, como películas grabadas en CinemaScope.

{{< ratio "21:9" >}}


## 16:9

**Ancha**, el estándar en monitores y otras pantallas.

{{< ratio "16:9" >}}

## 4:3

**Cuatro tercios**, cercano a un cuadrado.

{{< ratio "4:3" >}}


## 1:1

**Lados iguales**, un cuadrado perfecto.

{{< ratio "1:1" >}}


## 1:2

**Rectángulo vertical**, el formato más largo.

{{< ratio "1:2" >}}


## 2:3

**Dos tercios**, dimensiones de un diseño de impresión.

{{< ratio "2:3" >}}


## 5:7

**Portada**, para portadas de series o películas.

{{< ratio "5:7" >}}

