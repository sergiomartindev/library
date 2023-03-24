# Repository Pattern

Mediante la aplicación del Repository Pattern se provee una capa de abstracción entre la lógica de negocio y la capa de persistencia de datos.

Típicamente, un repository se implementa a través de una clase que expone una serie de métodos que permiten interactuar con la capa de persistencia de datos. La clase repositorio abstrae los detalles de cómo se recuperan y envían los datos, ya sea interactuando con una base de datos, un sistema de ficheros o cualquier otro mecanismo de almacenamiento de información.

Aplicando este patrón se consigue:

- Ofrecer un punto centralizado para el acceso a la capa de persistencia de datos.
- Flexibilidad. Al declarar clases que interactúan con um método de almacenamiento de información concreto, facilitamos cambiar de tecnología de almacenamiento de información sin la necesidad de tener que cambiar el código de toda aplicación. Podemos tener una clase que conecte con SQL, otra con Mongo y otra con el File System. Asegurándonos de que todas implementen los mismos métodos a los que se han adscrito al implementar la misma interface, conseguimos que las clases sean intercambiables.
- Separation of concerns. La capa de lógica no necesita conocer a la capa de persistencia de datos. Solo interactuar que la clase repository a través de los métodos que expone a través de su interface.
- Encapsulamiento de lógica compleja de manejo de información y consultas, manteniéndola dentro del repositorio y alejada de la lógica de negocio.
