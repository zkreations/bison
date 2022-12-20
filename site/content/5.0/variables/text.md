---
title: Textos
weight: 8
---

Almacenan texto que puedes modificar para **traducirlo a tu idioma**. Blogger cuenta etiquetas tipo {{< data message >}} que se traducen al idioma configurado. Estas variables existen para el **texto no disponible**.

## Valores disponibles

{{< table >}}
| Variable            | Texto por defecto               | Se utiliza en
| ------------------- | ------------------------------- | --------------
| `t.authorbadge`     | Creador                         | Insignia del autor del articulo
| `t.toc`             | Tabla de contenido              | Título de la tabla de contenido
| `t.more`            | Más                             | Botón para ver más artículos
| `t.copy`            | Copiar                          | Botón para copiar código
| `t.copied`          | Copiado!                        | Confirmación tras copiar código
| `t.system`          | Sistema                         | Botón de esquema en modo sistema
| `t.light`           | Claro                           | Botón de esquema en modo claro
| `t.dark`            | Oscuro                          | Botón de esquema en modo oscuro
| `t.subject`         | Asunto                          | Campo "Asunto" del formulario de contacto
| `t.recent`          | Recientes                       | Título del widget "Entradas de Blog"
| `t.related`         | Relacionados                    | Título de las entradas relacionadas
| `t.sponsored`       | Este articulo es un anuncio     | Indicador de entradas patrocinadas
| `t.reply`           | Responder                       | Botón para responder comentario
| `t.replies`         | Respuestas                      | Botón para ver las respuestas
| `t.hiddenLink`      | [ Enlace oculto ]               | Texto en reemplazo del enlace oculto
| `t.filtered`        | Los enlaces no están permitidos | Texto del aviso de enlace prohibido
| `t.missingJumpLink` | Falta salto de línea            | Indicador de entrada sin salto de línea
| `t.searching`       | Búsqueda                        | Título de las búsquedas
| `t.filter`          | Filtrar por                     | Título del sidebar de filtros
| `t.filterBtn`       | Filtrar                         | Botón para filtrar entradas
| `t.filterSelect`    | Seleccionar                     | Botón para desplegar filtros modo lista
| `t.free`            | Gratis                          | Texto de artículos gratuitos
| `t.details`         | Detalles                        | Pestaña de detalles de un producto
| `t.paymentMethod`   | Método de pago                  | Indicador de opciones de pago
| `t.downloadWith`    | Descargar con                   | Texto de obtención 
| `t.buyWith`         | Comprar con                     | Texto de compra
| `t.getIn`           | Obtener en                      | Indicador de opción de descarga
| `t.next`            | Siguiente                       | Botón "Ir adelante" de paginación
| `t.prev`            | Anterior                        | Botón "Ir hacia atrás" de paginación
{{< /table >}}

## Ejemplos

{{< code >}}
<Variable name="t.recent" description="Recent posts" type="string" value="Nuevo contenido"/>
<---->

![t-recent](/images/variables/text/t-recent.png)
{{< /code >}}


{{< code >}}
<Variable name="t.authorbadge" description="Author badge" type="string" value="Staff"/>
<---->

![t-authorbadge](/images/variables/text/t-authorbadge.png)
{{< /code >}}
