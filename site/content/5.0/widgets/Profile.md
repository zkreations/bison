---
title: Profile
---

Inserta el perfil del autor del blog en Blogger. Si existe más de un autor se mostrará una lista con la foto de perfil.

## Vista previa

#### Un autor

![widget-profile](/images/widgets/profile.png)


#### Un equipo

![widget-profile-team](/images/widgets/profile-team.png)


## Disponibilidad

No disponible en **Filters**. En todas las demás secciones el widget está disponible.

## Super widget

{{< table >}}
| Key       | Nombre               | Tipo                  | Descripción 
| --------- | -------------------- | --------------------- | --------------
| `title`   | Título               | {{< data "string" >}} | Titulo del widget
| `icon`    | Icono                | {{< data "string" >}} | El nombre de un [icono de zkreations](https://icons.zkreations.com/)
| `i`      | Icono de tercero     | {{< data "string" >}} | Etiqueta `<i>` usando el valor como clase
{{< /table >}}

```js
{ title: "Perfil" }
```

## Clases CSS

```css
.widget.Profile {
  /*widget*/
}

.profile {
  /*contenedor de perfil*/
}

.profile-body {
  /*contenedor de información*/
}

.profile-name  {
  /*nombre del autor*/
}

.profile-snippet {
  /*resumen del autor*/
}

.profile-locale {
  /*localidad del autor*/
}

.profile-image {
  /*imagen de perfil*/
}
```