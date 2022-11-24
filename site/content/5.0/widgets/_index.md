---
title: Widgets
weight: 4
icon: table-layout
---

Los widgets poseen características únicas e interactúan con la plantilla dependiendo de su posición. En esta sección de la documentación aprenderás sobre ellos.

## Widgets normales

Widgets de Blogger con nueva estructura que puedes instalar desde el panel de administración. Para agregarlos pulsa el botón "**Agregar un gadget**" y selecciónalo de la lista.

<video controls="" poster="/images/posters/widgets.png">
  <source src="/videos/default-widgets.mp4" type="video/mp4">
</video>


## Super widgets

Estos widgets se crean a partir de widgets normales. Para acceder a ellos debes reemplazar el título por un dato tipo {{< data object >}} válido de Blogger, por ejemplo:

```js
{ title: "Prueba", icon: "fire" }
```

<video controls="" poster="/images/posters/super-widgets.png">
  <source src="/videos/super-widget.mp4" type="video/mp4">
</video>

## Mutabilidad

Algunos widgets cambian de estructura dependiendo de la sección en la que se encuentran, para observar estos cambios mueve el gadget a una sección en donde puedan mutar.

<video controls="" poster="/images/posters/mutation-widgets.png">
  <source src="/videos/mutation-widget.mp4" type="video/mp4">
</video>
