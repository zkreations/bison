---
title: Tipografía
---

Los estilos tipográficos del tema son independientes, y posee estilos para facilitar las buenas prácticas en la redacción de los artículos. Estos estilos están disponibles en entradas, páginas estáticas y página de error.

## Saltos de linea

Los saltos de línea con las etiquetas `<br>` están deshabilitados por defecto, solo se interpretarán dentro de etiquetas `<p>`, con el fin de crear una estructura mas limpia y consistente en los artículos.

### Editar espaciado

Puedes configurar la distancia en el Diseñador de plantillas, en el apartado "**Anchos**" de las opciones avanzadas.


### Variables CSS

Si prefieres realizar esta modificación manualmente utilizando CSS, el tema facilita las siguientes variables:

```css
.typography {
  --tg-spacer: 24px;
  --tg-inline-spacer: 8px;
  --tg-headings-spacer: 24px;
  --tg-gallery-spacer: 2px;
}
```


### Habilitar etiquetas br

Si a pesar de todo, prefieres utilizar los saltos de línea tradicionales, agrega el siguiente código css, en el apartado "**Agregar CSS**" del Diseñador de plantillas de Blogger:

```css
.typography { --tg-spacer: 0 }
.typography br { display: initial }
```
