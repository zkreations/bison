---
title: Widgets
weight: 4
icon: table-layout
---

Los widgets poseen características únicas e interactúan con la plantilla dependiendo de su posición. En esta sección de la documentación aprenderás sobre ellos.

## Widgets normales

Widgets de Blogger con nueva estructura que puedes instalar desde el panel de administración. Para agregarlos pulsa el botón "**Agregar un gadget**" y selecciónalo de la lista.

## Super widgets

Se crean a partir de widgets normales. Para acceder a ellos debes **reemplazar el título** por un dato tipo {{< data object >}} válido de Blogger, haz la prueba, edita cualquier widget y cambia el título por el siguiente ejemplo:

```js
{ title: "Prueba", icon: "fire" }
```

## Mutabilidad

Algunos widgets **cambian de estructura** dependiendo de la **sección** en la que se encuentran, para observar estos cambios mueve cualquier [widget PopularPosts]({{< ref "/5.0/widgets/popularposts/" >}}) a la sección header, notarás que cambia a [Breaking News]({{< ref "breaking-news.md" >}}) automáticamente, esi funciona la mutación.

## Errores

En cualquier caso, puede que te encuentres con algún error, los cuales te indican lo que salió mal con un mensaje. Aquí algunos de ellos con sus respectivas explicaciones.

### Invalid object key

Problema que ocurre cuando alguno de los elementos del **objeto no es válido** para Blogger. Los objetos deben contener una llave de abierto y de cierre, en su interior, las "key" deben tener siempre un espacio antes de su valor:

```js
// Correcto
{ title: "Ejemplo", icon: "fire" }

// Mal hecho (Error)
{ title:"Ejemplo", icon:"fire" }
```

### Object is not closed

Significa que la llave no esta cerrada, solo debes asegurarte de que la última llave del objeto este presente:

```js
// Correcto
{ title: "Ejemplo" }

// Mal hecho (Error)
{ title:"Ejemplo", icon:"fire"
```


### Invalid content value

Todas las key de los super widgets pueden contener casi cualquier valor, sin embargo la opción `content` esta limitada a los valores que existen en la plantilla, y solo puedes escribir uno de ellos, los cuales son:

```js
["alert","carousel","featured","hybrid","comments","section","slider","trending"]
```


### Invalid content value for this widget type

Ademas del número limitado de opciones para la opción `content`, cada valor esta limitado a su tipo de widget, solo puedes usarlo en el tipo que le corresponde.


### Invalid value for this option

Este mensaje indica que el valor que haz ingresado en la opción escogida no es valido. Algunas opciones solo aceptan valores de un tipo:

```js
// Correcto (Solo acepta números)
{ auto: 5000 }

// Mal hecho (Error)
{ auto: true }
```

### Invalid widget type for this section

No todos los widgets están disponibles en todas las secciones, cuando esto ocurra, veras este error, solo debes mover el widget a otra sección en donde si esté disponible.








