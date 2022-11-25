---
title: Variables
weight: 2
icon: gear
---

Las variables son valores guardados en una pequeña parte de la memoria que pueden ser recuperados después. En este caso, el tema utiliza las variables para configurar cualidades o características.

## Localización

Para acceder a las variables, dirígete en la sección **Temas** de tu panel de administración de Blogger y utiliza la opción **Editar HTML**, encontrarás todas las variables desde el inicio:


<video controls preload="none" poster="/images/posters/localizar-variables.png">
  <source src="/videos/localizar-variables.mp4" type="video/mp4">
</video>


## Modificar valores

Este es el aspecto de una variable común que encontrarás en el tema:

```html
<Variable name="a.tools" description="Admin tools" type="string" value="true"/>
```

La variable se compone por 4 atributos, pero el único atributo que puedes modificar es `value`. A continuación la siguiente tabla explica en que consisten todos ellos:

{{< table >}}
| Atributo | Descripción               | Requerido   | Modificable
| -------- | ------------------------- | ----------- | ------------
| `name`   | Nombre de variable declarada | **Obligatorio** | **No**
| `description`   | Descripcion de variable | **Obligatorio** | **No**
| `type`   | Tipo de variable | **Obligatorio** | **No**
| `value`   | Valor almacenado | **Obligatorio** | Si
{{< /table >}}


## Ejemplo

{{< code >}}
<Variable name="a.tools" description="Admin tools" type="string" value="false"/>
<---->
La variable `a.tools` ahora se establece en "false" lo que deshabilita su función
{{< /code >}}

<video controls preload="none" poster="/images/posters/demo-modificar-variable.png">
  <source src="/videos/demo-modificar-variable.mp4" type="video/mp4">
</video>
