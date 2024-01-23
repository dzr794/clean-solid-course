# Consejos

## para Clases

* el nombre es lo más importante de la clase
* formar el nombre con un sustantivo o frases de sustantivos
* no debe ser muy generico
* usar UpperCamelCase

### 3 preguntas para determinar si es un buen nombre de clase

1. ¿Qúe hace exactamente la clase?
2. ¿Cómo exactamente esta clase realiza cierta tarea?
3. ¿Hay algo especifico sobre su ubicación?

## Funciones

> Sabemos que estamos haciendo codigo limpio cuando cada funcion hace exactamente lo que su nombre indica

limitar a 3 parametros posicionales

```typescript
// Bien
function sendEmail( toWhom:string, from:string, body:string ):boolean{}

// No muy bien
function sendEmail( toWhom:string, from:string, body:string, subject:string, ApiKey:string ):boolean{}
```

```typescript
// se puede mejorar con una interfaz
interface sendEmailOptions {
  toWhom:string, 
  from:string, 
  body:string, 
  subject:string, 
  ApiKey:string
}

// Mejor
function sendEmail( {toWhom, from, body, subject, ApiKey}:sendEmailOptions  ):boolean{}

// de este modo cuando se llama la funcion solo se pasa un objeto como parametro
sendEmail(emailArgs);
```

- ¡la simplicidad es fundamental!
- Es importante mantener la funciones de un tamaño reducido. Si la funcion tiene muchas lineas de codigo, puede significar que la funcion hace mas de lo que deberia hacer.
- En lo posible, menos de 20 lineas.
- Evitar el uso del "else".
- priorizar el uso de la condicional ternaria.
-
