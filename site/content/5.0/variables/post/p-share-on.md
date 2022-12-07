---
title: p.shareOn
weight: 3
---

Lista de redes sociales permitidas para compartir artículos.

```html
<Variable name="p.shareOn" description="Share on" type="string" value="true"/>
```

## Valores disponibles

Si el valor ingresado no es válido, el valor por defecto será `true`.

{{< table >}}
| Value                         | Nombre    | Tipo                    | Descripción   
| ----------------------------- | ----------| ------------------------| --------------
| {{< nodata "{share_name}" >}}   | Red social | {{< data string >}}     | Lista de redes sociales
| `true` `yes`   | Verdadero | {{< data boolean >}}    | Habilita todos los botones de compartir
| `false` `no`   | Falso     | {{< data boolean >}}    | Deshabilita los botones de compartir
{{< /table >}}

{{< hint "warning" >}}
Esta función solo gestiona los botones, pero no la **capacidad de compartir**. Asegúrate de que tu blog sea público y que la opción "Compartir" este habilitada en el widget tipo "Blog".
{{< /hint >}}

## share_name

Especifica una lista de redes sociales. El orden de los nombres especificados no influye en la posición del botón. Aunque no es necesario una separación, recomendamos que utilices comas para separar los valores disponibles:

```text
facebook, twitter, whatsapp, telegram, pinterest, tumblr, reddit, vk, linkedin
```

## true

Todos los botones de compartir estarán habilitados.

![p-share-on](/images/variables/post/p-share-on.png)

## false

Ningún botón para compartir estará habilitado.

