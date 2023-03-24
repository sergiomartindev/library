# Service Pattern

Mediante la aplicación del Service Pattern se provee una vía para encapsular y organizar la lógica de negocio relacionada con una funcionalidad concreta dentro del sistema. Este patrón también se conoce como Service Layer Pattern o Business Logic Patterns.

La idea es alcanzar la separation of concerns de la capa de presentación y la capa de acceso a datos, y proveer un punto centralizado para la lógica de negocio (bajo el nombre de service layer) que actúe como intermediario entre las capas antes mencionadas.

Típicamente, un service se implementa a través de una clase o módulo que provee un conjunto de métodos o funciones que interactúan con otras clases, módulos o servicios. Los métodos o funciones de un servicio son responsables de llevar a cabo la lógica de negocio relacionada con el dominio específico del servicio.

Aplicando este patrón se consigue:

- Separation of concerns entre la capa de presentación y la capa de acceso a datos.
- Encapsulación de la lógica de negocio en un punto centralizado. Promoviendo la mantenibilidad.
