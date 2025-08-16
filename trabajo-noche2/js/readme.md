# Proyecto de Formularios con Bootstrap

## 🎯 Finalidad del Proyecto

Este proyecto tiene como objetivo que estudiantes de nivel básico en programación web comprendan y apliquen conceptos fundamentales de **HTML**, **CSS** y **JavaScript**, integrando **Bootstrap 5** mediante CDN para lograr interfaces limpias, responsivas y modernas.

Además, se ha incorporado:

- **EmailJS**, para demostrar el envío de correos electrónicos directamente desde el frontend, sin necesidad de backend, como parte de la funcionalidad de recuperación de contraseña.
- **SweetAlert2**, para reemplazar los mensajes `alert()` tradicionales con una interfaz moderna, amigable y personalizable para validar acciones como login exitoso, errores o confirmaciones.

A través de esta actividad los estudiantes:


- Usan formularios HTML reales y comprenden su estructura.
- Aplican clases de Bootstrap para diseño y responsividad.
- Organizan un proyecto con múltiples vistas y archivos de estilos externos.
- Comprenden la navegación entre páginas mediante enlaces.
- Integran servicios externos (EmailJS y SweetAlert) para el envío de correos y visualización de alertas modernas.
- Sientan las bases para futuras funcionalidades como validación, almacenamiento de datos o integración con backend.

---

## 📁 Estructura del Proyecto

```plaintext
/
├── index.html                # Página principal de Login
├── html/
│   ├── registro.html         # Formulario para registrar usuarios nuevos
│   ├── recuperar.html        # Vista para recuperación de contraseña
│   └── pagina_ppal.html      # Vista principal para usuario logueado
├── css/
│   └── estilos.css           # Hoja de estilos externa común a todas las páginas
└── js/
    ├── login.js              # Script que contiene lógica del login
    ├── recuperar.js          # Script que contiene lógica para recuperar contraseña
    └── token_email.js        # Script para conectar email con recuperar contraseña
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología              | Logo                                                                 | Descripción                                                                                   |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **HTML5**              | ![HTML5](https://img.icons8.com/color/48/html-5--v1.png)              | Lenguaje de marcado usado para estructurar las páginas web.                                  |
| **CSS3**               | ![CSS3](https://img.icons8.com/color/48/css3.png)                     | Hojas de estilo para personalizar la apariencia de la web.                                   |
| **Bootstrap 5**        | ![Bootstrap](https://img.icons8.com/color/48/bootstrap.png)           | Framework CSS para facilitar el diseño responsive y atractivo.                               |
| **JavaScript**| ![JS](https://img.icons8.com/color/48/javascript--v1.png)             | Se utilizará más adelante para validaciones y lógica interactiva.                            |
| **EmailJS**            | ![EmailJS](https://img.icons8.com/fluency/48/send-mass-email.png)     | Servicio para enviar correos desde el frontend sin necesidad de backend.                     |
| **SweetAlert2**        | ![SweetAlert2](https://img.icons8.com/external-flat-icons-inmotus-design/48/external-alert-user-interface-flat-icons-inmotus-design.png) | Librería JS para mostrar alertas modernas, elegantes y personalizadas. |


---

¡Explora, modifica y aprende con este proyecto práctico! 🚀

---