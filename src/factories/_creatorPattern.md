# Creator Pattern

Mediante la aplicación del Creator Pattern desacoplamos la creación de objetos de su uso. El objetivo principal de su aplicación es proveer una manera flexible y modular de crear objetos.

Típicamente, el Creator Pattern se aplica mediante clases que exponen métodos responsables de crear objetos de un tipo específico en base a unos parámetros. Abstrayendo los detalles del proceso de la creación de objetos.

Aplicando este patrón se consigue:

- Definición de un único punto desde el que crear objetos. De esta manera, se sabe a ciencia cierta dónde se lleva a cabo su creación, pudiendo aplicar lógica ligada a su creación de una manera unificada.
- Encapsulamiento de la creación de objetos.
