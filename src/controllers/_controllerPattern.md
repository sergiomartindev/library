# Controller Pattern

Mediante la aplicación del Controller Pattern, separamos la capa de presentación de la capa de lógica. El controller sirve de intermediario recibiendo el input del usuario de la capa de presentación, conectando con la capa de lógica y actualizando la capa de presentación en base al resultado obtenido.

Típicamente, un controller se implementa a través de una clase o módulo que provee un conjunto de métodos o funciones encargados de manejar el input del usuario y de actualizar la UI en base al resultado del procesamiento de la lógica de negocio.

Aplicando este patrón se consigue:

- Separation of concerns entre la capa de presentación y la de lógica. Cada una se encarga de llevar a cabo su tarea sin necesidad de conocerse la una a la otra.
- Normas claras de comunicación entre la capa de presentación y la de lógica. Los controllers son los encargados de establecer los event listeners, de gestionarlos, de comunicarse con la capa de lógica y de actualizar la capa de presentación.
