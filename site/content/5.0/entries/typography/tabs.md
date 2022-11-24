---
title: Pestañas
---

Sección del articulo dividido por pestañas, solo se muestra una a la vez. Por defecto la pestaña activa será la que cuente con la clase `is.-active` como se muestra a continuación:

{{< code >}}
<div class="tabs">
  <div class="tab-header" data-wjs="tab">
    <button class="btn is-active" data-target="ta1">Tab 1</button>
    <button class="btn" data-target="ta2">Tab 2</button>
  </div>
  <div class="tab-content">
    <div class="tab-panel is-active" id="ta1">
      <p>Contenido del Tab 1</p>
    </div>
    <div class="tab-panel" id="ta2">
      <p>Contenido del Tab 2</p>
    </div>
  </div>
</div>
<---->
Pestañas de contenido
{{< /code >}}

## Pestañas de codigo

Cuando las pestañas no contienen `tab-content` la separación será nula. Sabiendo esto, puedes crear un sencillo pero eficaz sistema de pestañas de código:

{{< code >}}
<div class="tabs">
  <div class="tab-header" data-wjs="tab">
    <button class="btn" data-target="tb1">CSS</button>
    <button class="btn" data-target="tb2">JS</button>
  </div>
  <div class="tab-panel is-active" id="tb1">
    <pre><code>p { color: red; text-align: center }</code></pre>
  </div>
  <div class="tab-panel" id="tb2">
    <pre><code>var test = "Hello world";</code></pre>
  </div>
</div>
<---->
Pestañas de código
{{< /code >}}








