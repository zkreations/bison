---
title: e.gaRatio
weight: 11
---

Establece la relación de aspecto por defecto para las imágenes de las **entradas tipo gallery**.

```html
<Variable name="e.gaRatio" description="Gallery cover ratio" type="string" value="4:3"/>
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

![e-ga-ratio-21-9](/images/variables/cards/e-ga-ratio-21-9.png)


## 16:9

**Ancha**, el estándar en monitores y otras pantallas.

![e-ga-ratio-16-9](/images/variables/cards/e-ga-ratio-16-9.png)


## 4:3

**Cuatro tercios**, cercano a un cuadrado.

![e-ga-ratio-4-3](/images/variables/cards/e-ga-ratio-4-3.png)


## 1:1

**Lados iguales**, un cuadrado perfecto.

![e-ga-ratio-1-1](/images/variables/cards/e-ga-ratio-1-1.png)


## 1:2

**Rectángulo vertical**, el formato más largo.

![e-ga-ratio-1-2](/images/variables/cards/e-ga-ratio-1-2.png)


## 2:3

**Dos tercios**, dimensiones de un diseño de impresión.

![e-ga-ratio-2-3](/images/variables/cards/e-ga-ratio-2-3.png)


## 5:7

**Portada**, para portadas de series o películas.

![e-ga-ratio-5-7](/images/variables/cards/e-ga-ratio-5-7.png)

