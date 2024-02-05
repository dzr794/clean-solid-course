# principios S.O.L.I.D.

  Los principios de SOLID nos indican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

  Los principios no son reglas.
  Son recomendaciones para escribir un mejor código.
  Si se irrespeta un principio debe de ser en casos aislados, no algo común.
  Si están irrespetando principios continuamente, el código carece de calidad y se esta incrementando la deuda técnica.

  Los 5 principios S.O.L.I.D. de diseño de software son:

  **S** – Single Responsibility Principle (SRP)

  **O** – Open/Closed Principle (OCP)

  **L** – Liskov Substitution Principle (LSP)

  **I** – Interface Segregation Principle (ISP)

  **D** – Dependency Inversion Principle (DIP)

## SRP– Single Responsibility Principle (SRP)

    "Nunca debería de haber más de un motivo por el cual cambiar nuestra clase o modulo"
    "tener una única responsabilidad" !== "hacer una única cosa"

    El SRP no se basa en crear Clases con un solo método sino en diseñar componentes que sólo estén expuestos a una fuente de cambio.

### ¿Cómo detectar violaciones?

* Nombres de clases y módulos demasiado genéricos.
* Cambios en el código suelen afectar la clase o módulo.
* La clase involucra múltiples capas.
* Número elevado de importaciones.
* Cantidad elevada de métodos públicos.
* Excesivo número de líneas de código.

## OCP– Open/Closed Principle (OCP)

  'Open and Close'
  Las entidades de software (clases, modulos, metodos, etc.) Abiertos a la extensión pero cerrados a la modificación.

### ¿Cómo detectar violaciones?

* Cambios normalmente afectan nuestra clase o módulo.
* Cuando una clase o módulo afecta muchas capas. (Presentaciónm almacenamiento, etc.

## LSP– Liskov Substitution Principle (LSP)

> "Siendo U un subtipo de T, cualquier instancia de T deberia de póder ser substituida por cualquier instancia de U sin alterar las propiedades del sistema."

### ¿Cómo detectar violaciones?


## ISP– Interface Segregation Principle (ISP)

  'Segregación de interfaz
  trata de evitar que tengamos códig oculto en nuestras clases o funciones.

> Los clientes no deberían estar obligados a depender de interfaces que no utilicen.

Se puede encontrar en la programación orientada a objetos en los casos donde debido a la herencia de interfaces muy genericas se obliga a usar metodos que puede que no tengan nada que ver con el contrexto de la clase que esta heredando.

### ¿Cómo detectar violaciones?

## DIP– Dependency Inversion Principle (DIP)

  'Inversión de dependencias'
  segregar respoonsabilidades

### ¿Cómo detectar violaciones?
