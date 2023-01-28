---
title: c.disqusOnClick 
weight: 7
---

Si Disqus está habilitado, esta opción reemplaza la implementación por defecto y **mostrará un botón** en su lugar, al pulsar sobre el botón, los comentarios cargarán normalmente.

```html
<Variable name="c.disqusOnClick" description="Click and load Disqus" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Reemplaza Disqus por un botón
| `false` `no`   | Falso     | {{< data boolean >}}    | Disqus cargará al ser visible
{{< /table >}}


## true

Muestra un botón, que al ser pulsado cargará los recursos necesarios para insertar Disqus, el botón será borrado inmediatamente después.


## false

Disqus cargará inmediatamente cuando el usuario se desplace a la sección de comentarios.
