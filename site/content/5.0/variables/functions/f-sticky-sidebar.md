---
title: f.stickySidebar
weight: 4
---

Fija el sidebar al desplazar el scroll, también puede fijar solo el último widget.

```html
<Variable name="f.stickySidebar" description="Sticky sidebar" type="string" value="false"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value                           | Nombre           | Tipo                  | Descripción   
| ------------------------------- | ---------------- | --------------------- | --------------
| {{< nodata "{fixed_mode}" >}}   | Modo de fijado   | {{< nodata "{fixed_mode}" >}}   | Fija el sidebar según el modo ingresado
| `true` `yes`                    | Verdadero        | {{< data boolean >}}  | Fija el sidebar globalmente
| `false` `no`                    | Falso            | {{< data boolean >}}  | Deshabilita el sidebar fijo
{{< /table >}}

## fixed_mode

Especifica un modo de fijado, lo que permite fijar el sidebar o uno de sus elementos según sea el caso. **Solo puedes elegir un modo a la vez**, de lo contrario el valor no sera válido y se interpretará como `true`.

#### Modos

{{< table >}}
| Modo           | Significado
| -------------- | ---------------
| `last`         | Fija solo el último widget
| `post`         | Fija el sidebar solo en entradas
| `page`         | Fija el sidebar solo en páginas
| `single`       | Fija el sidebar en entradas y páginas
| `post-last`    | Fija solo el último widget en entradas
| `page-last`    | Fija solo el último widget en páginas
| `single-last`  | Fija solo el último widget en páginas y entradas
{{< /table >}}

## true

El sidebar se mantendrá fijado al borde superior cuando el usuario se desplace por la página.

## false

La sidebar fijo no estará habilitado en ninguna parte.
