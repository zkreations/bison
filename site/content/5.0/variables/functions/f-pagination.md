---
title: f.pagination
weight: 8
---

Establece el tipo de paginación para blog y secciones. Esta característica requiere que el blog sea **público** y que los [feeds completos estén habilitados]({{< ref "config.md#habilitar-los-feeds" >}}). También es afectada por [variables tipo cards]({{< ref "e-type.md" >}})

```html
<Variable name="f.pagination" description="Navigation type" type="string" value="default"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `default`.

{{< table >}}
| Value       | Nombre      | Tipo                    | Descripción   
| ----------- | ----------- | ----------------------- | --------------
| `default`   | Por defecto | {{< data string >}}    | Paginación nativa de Blogger 
| `numeric`   | Numérica    | {{< data string >}}    | Paginación numérica
| `infinite`  | Infinita    | {{< data string >}}    | Paginación infinita 
| `load`      | Cargar más  | {{< data string >}}    | Paginación de carga con botón
{{< /table >}}

## default

La paginación de Blogger por defecto. No requiere javascript y también es la que se usará **si el blog es privado** o **los feeds no están disponibles**.

<video controls="">
  <source src="/videos/f-pagination-default.mp4" type="video/mp4">
</video>


## numeric

Paginación numérica que puede paginar una cantidad infinita de entradas, también muestra en todo momento la primera página o la última según sea el caso.

<video controls="">
  <source src="/videos/f-pagination-numeric.mp4" type="video/mp4">
</video>


## infinite

Paginación infinita que carga contenido a medida que el usuario se desplaza por la página.

<video controls="">
  <source src="/videos/f-pagination-infinite.mp4" type="video/mp4">
</video>


## load

Paginación que carga entradas mediante una acción del usuario, la cual consiste en pulsar un botón.

<video controls="">
  <source src="/videos/f-pagination-load.mp4" type="video/mp4">
</video>