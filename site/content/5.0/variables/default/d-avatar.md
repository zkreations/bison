---
title: d.avatar
weight: 4
---

Establece la foto de perfil predeterminada para autores sin foto y los comentarios anónimos, usuarios temporales o perfiles nuevos sin foto de Blogger.

```html
<Variable name="d.avatar" description="Avatar" type="string" value=""/>
```

## Valores disponibles

Cualquier valor ingresado será tratado como una imagen.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `avatar.jpg`   | Avatar    | {{< data image >}}      | Avatar de comentarios por defecto
{{< /table >}}


## avatar.jpg

Avatar por defecto que se utilizará para autores sin foto y comentarios anónimos o temporales (cuando se especifica un nombre y un enlace), o para perfiles de blogger con la imagen de perfil predeterminada ([blogger_logo_round_35.png](https://www.blogger.com/img/blogger_logo_round_35.png)).


#### Autores

![d-avatar](/images/variables/default/d-avatar.png)


#### Comentarios

![d-avatar-post](/images/variables/default/d-avatar-post.png)
