---
title: d.profileUrl
weight: 5
---

Establece un enlace por defecto, cuando el perfil de Blogger no esta disponible públicamente.

```html
<Variable name="d.profileUrl" description="Author url" type="string" value="https://blogger.com"/>
```

## Valores disponibles

Cualquier valor ingresado será tratado como un enlace.

{{< table >}}
| Value          | Nombre    | Tipo                    | Descripción   
| -------------- | ----------| ------------------------| --------------
| `link`         | Url de autor    | {{< data string >}}  | Enlace de perfil predeterminado
{{< /table >}}


## link

En enlace de perfil predeterminado se utilizará para todos los autores que no cuenten con un **perfil de Blogger público**.

#### Resúmenes

![d-profile-url](/images/variables/default/d-profile-url.png)

#### Entradas

![d-profile-url](/images/variables/default/d-profile-url-post.png)