---
title: a.edit
weight: 3
---

Muestra un botón de atajo para editar entradas, que es visible en los artículos individuales, archivo, paginación y búsquedas.

```html
<Variable name="a.edit" description="Shortcut edit post" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita el botón "Editar" en las entradas
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita el botón "Editar" en las entradas
{{< /table >}}


## true

El botón estará disponible en los metadatos de los artículos, incluyendo las entradas individuales y la paginación. Requiere iniciar sesión en Blogger ya que **solo es visible para administradores**. 

#### Resúmenes

![a-edit-true](/images/variables/admin/a-edit-true.png)

#### Entradas

![a-edit-true](/images/variables/admin/a-edit-true-post.png)

## false

El botón no estará disponible globalmente.

