---
title: f.cleanXml
weight: 9
---

Remueve atributos, identificadores y clases de Blogger, asi como también otras declaraciones XML.

```html
<Variable name="f.cleanXml" description="Clean blogger XML" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Limpia atributos generados por Blogger
| `false` `no`   | Falso     | {{< data boolean >}}    | No remueve atributos de Blogger
{{< /table >}}


## true

Limpia los atributos de Blogger que se insertan automáticamente en el código fuente. Este tema no requiere los atributos porque **no usa javascript de Blogger**, por lo tanto es seguro removerlo.

![f-clean-xml-true](/images/variables/functions/f-clean-xml-true.png)

![f-clean-xml-true-widgets](/images/variables/functions/f-clean-xml-true-widgets.png)


## false

No remueve los atributos generados de Blogger.

![f-clean-xml-false](/images/variables/functions/f-clean-xml-false.png)

![f-clean-xml-false-widgets](/images/variables/functions/f-clean-xml-false-widgets.png)



