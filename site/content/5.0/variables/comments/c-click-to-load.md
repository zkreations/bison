---
title: c.clickToLoad 
weight: 7
---

Esta opción reemplaza la implementación por defecto y **mostrará un botón** en su lugar, al pulsar sobre el botón, el tipo de comentarios configurado cargará normalmente.

```html
<Variable name="c.clickToLoad" description="Click and load comments" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Reemplaza comentarios por un botón
| `false` `no`   | Falso     | {{< data boolean >}}    | Los comentarios cargarán normalmente
{{< /table >}}


## true

Muestra un botón, que al ser pulsado cargará los recursos necesarios para insertar el sistema de comentarios configurado, el botón será borrado inmediatamente después.

## false

El sistema de comentarios cargará inmediatamente cuando el usuario se desplace a la sección de comentarios.
