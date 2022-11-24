---
title: f.cloudflare
weight: 11
---

Configura los enlaces internos del sitio para HTTPS. Solo se recomienda su uso si su dominio se encuentra utilizando un servicio como **CloudFlare**.

```html
<Variable name="f.cloudflare" description="SSL/TLS by Cloudflare" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Cambia enlaces internos **HTTP** a **HTTPS**
| `false` `no`   | Falso     | {{< data boolean >}}    | No realiza cambios en los enlaces internos
{{< /table >}}


## true

Las etiquetas de datos tipo {{< data url >}} se configurarán a **HTTPS**. Es muy importante desactivar **HTTPS** nativo de Blogger y configurar el dominio con CloudFlare para evitar el error "**demasiadas redirecciones**".

{{< pagelink title="Configurar Blogger con Cloudflare" name="zkreations" href="https://zkreations.com" >}}


## false

Las etiquetas de datos funcionaran normal y no se realizara ningún cambio.
