---
title: c.disqus
weight: 6
---

Habilita Disqus en el Blog (te odio Disqus), lo que reemplaza el sistema de comentarios de Blogger.

```html
<Variable name="c.disqus" description="Disqus shortname" type="string" value="false"/>
```

## Valores disponibles

Cualquier valor ingresado que no sea falso, se interpretará por defecto como `shortname`

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `shortname`   | Shortname | {{< data string >}}     | Nombre corto de Disqus
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita comentarios de Disqus
{{< /table >}}

## Shortname

El nombre corto o **"Shortname"** es el identificador de los comentarios de Disqus. Dirígete a tu panel de administración de tu cuenta de Disqus, luego al apartado **"General"** y copia el valor mostrado.

## false

Los comentarios de Disqus no estarán disponibles y se usará el sistema de Blogger.
