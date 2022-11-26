---
title: f.sidebarIn
weight: 1
---

Habilita el sidebar en el blog, también acepta una **lista de tipos de página**, que sirve de referencia para mostrar la barra lateral. Esta variable tiene prioridad sobre las variables [f.postSidebar]({{< ref "f-post-sidebar.md" >}}), [f.pageSidebar]({{< ref "f-page-sidebar.md" >}}) y [p.template]({{< ref "p-template.md" >}})

```html
<Variable name="f.sidebarIn" description="Show sidebar in" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `false`.

{{< table >}}
| Value                          | Nombre         | Tipo                    | Descripción
| ------------------------------ | -------------- | ----------------------- | --------------
| {{< nodata "{page_type}" >}}   | Tipo de página | {{< data string >}}     | Lista de tipos de páginas
| `true` `yes`                   | Verdadero      | {{< data boolean >}}    | Habilita el sidebar globalmente
| `false` `no`                   | Falso          | {{< data boolean >}}    | Deshabilita el sidebar en todas partes
{{< /table >}}


## page_type

Especifica una lista de tipos de página, que se utilizará como referencia para mostrar la barra lateral. Aunque no es necesario una separación, recomendamos que utilices comas para separar los valores disponibles:

```text
home, index, search, labels, archive, item, static_page, error_page
```

#### Significado

{{< table >}}
| Tipo           | Significado
| -------------- | ---------------
| `home`         | Pagina principal `/`
| `index`        | Paginación de articulos `/search`
| `search`       | Búsqueda por terminos `/search?q=example`
| `labels`       | Búsqueda por etiquetas `/search/label/example`
| `archive`      | Búsqueda por fecha `/2022/08`
| `item`         | Entradas `/2022/08/example.html`
| `static_page`  | Pagina estática `/p/example.html`
| `error_page`   | Error 404 `/404`
{{< /table >}}

## true

El sidebar estará disponible en todas partes. 


## false

El sidebar no estará disponible en ninguna página del blog.
