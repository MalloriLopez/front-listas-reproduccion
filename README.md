
# Frontend - Listas de Reproducción 🎵

Interfaz web moderna para gestionar listas de reproducción musicales. Permite crear, buscar, visualizar y eliminar listas de canciones, integrando autenticación básica mediante un interceptor.

---

## 🚀 Tecnologías principales

- **Angular CLI:** 20.0.0
- **Node:** 22.16.0
- **npm:** 10.9.2
- **Bootstrap:** 5.3.3
- **RxJS:** 7.8.0
- **Otros:** Standalone API Angular, SCSS, Responsive Design

---

## 📦 Requisitos previos

- Node.js (recomendado: 22.16.0)
- npm >= 10.9.2
- Backend Java Spring Boot corriendo en [http://localhost:8080](http://localhost:8080)  
  > **Importante:** Asegúrate de tener el backend corriendo antes de probar la app.

---

## 🛠 Instalación

```bash
git clone https://github.com/MalloriLopez/front-listas-reproduccion.git
```
```
cd front-listas-reproduccion
```
```
npm install
```

## 🛠 Construccion

Para construir el proyecto:

```bash
ng build
```
## ⚙️ Ejecución

Para iniciar el servidor localmente:

```bash
ng serve
```

## 🖥️ La aplicacion corre en:

- **Frontend Angular:**  
  http://localhost:4200
  

## 🔑 Autenticación

 
La aplicación utiliza autenticación básica HTTP mediante un interceptor.
Credenciales por defecto:

- Usuario: usuarioTest

- Contraseña: password

(Estas credenciales deben estar configuradas igual en el backend.)


## ✨ Características principales


- Crear listas de reproducción: Llena un formulario, añade canciones y guarda.

- Buscar listas por nombre: Filtra de forma dinámica con un solo clic.

- Ver todas las listas: Tabla responsiva y elegante, con detalles de cada canción.

- Eliminar listas: Elimina fácilmente con botón dedicado.

- Diseño moderno y responsive: Tipografías y colores personalizables (ver SCSS).

- Autenticación básica con interceptor: No necesitas repetir headers en cada servicio.

## 🧑‍💻 Autor

Mallori Lopez
- GitHub: [http://github.com/MalloriLopez) 

