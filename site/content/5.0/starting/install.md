---
title: Instalar tema
weight: 1
---

Instalar un tema de Blogger modificado requiere algunos pasos de seguridad y preparación. Por favor, sigue cuidadosamente las indicaciones para evitar la pérdida de información o problemas.


## Copia de seguridad

Dirígete a la sección **Temas** de tu panel de administración de Blogger y utiliza la opción "**Crear copia de seguridad**", con ello descargará una copia de tu plantilla actual, que podrás restaurar en caso de que algo salga mal.

![Crear copia de seguridad](/images/copia-de-seguridad.png)


## Borrar datos de widgets

Este paso es **opcional**, pero útil si deseas realizar verdaderamente una **instalación limpia del tema**, para ello, copia el código de la [plantilla blank.xml](https://github.com/zkreations/canvas/tree/master/themes/blank/blank.xml), pégalo en el editor y guarda los cambios. Este proceso borrará los datos de widgets guardados en Blogger, evitando que se transfieran al nuevo tema instalado.

## Instalar tema

Abre el archivo **{{% theme %}}** y copia todo el contenido, luego dirígete a la sección **Temas** de tu panel de administración de Blogger y utiliza la opción **Editar HTML**, pega el código copiado con anterioridad y guarda los cambios.
