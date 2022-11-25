---
title: f.filter
weight: 6
---

Habilita los filtros avanzados de búsqueda.

```html
<Variable name="f.filter" description="Enable search filters" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita los filtros de búsqueda
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita los filtros de búsqueda
{{< /table >}}


## true

Los filtros avanzados estarán disponibles en las búsquedas por términos, lo que permite a los usuarios **filtrar los resultados** según los criterios elegidos.

![f-filter-admin](/images/variables/functions/f-filter-admin.png)

#### Filtros

El **widget etiquetas** se puede convertir [en filtros de búsqueda]({{< ref "filters.md" >}}). Cuando se usan en la consulta solo aparecerán entradas que contengan al menos una de las etiquetas marcadas por el usuario.

<video controls preload="none">
  <source src="/videos/f-filter-labels.mp4" type="video/mp4">
</video>

#### Modos

Si el **"Modo estricto"** esta marcado, solo aparecerán entradas que tengan todas las etiquetas marcadas a la vez. Al marcar la opción **"Nuevos primero"** ordenará los resultados del más reciente al más antiguo.

<video controls preload="none">
  <source src="/videos/f-filter-modes.mp4" type="video/mp4">
</video>

## false

Los filtros avanzados no estarán disponibles en el blog.