# Protected Variations Pattern

Mediante la aplicación del Protected Variations Pattern se busca el diseño de sistemas tolerantes a los cambios que puedan experimentar sus tecnologías. De esta manera, los componentes críticos del sistema quedan aislados de los efectos que puedan producir alteraciones derivadas del cambio de tecnología, cambios de librerías y demás factores externos.

Típicamente, este patrón se implementa a través de abstracciones del comportamiento de estos componentes sensibles a sufrir cambios, denominados Variations. Crearemos clases que implementen las abstracciones que encapsularán los detalles de implementación de una versión concreta de esa variation. De este modo, si cambian los requerimientos, solo tendremos que crear nuevas implementaciones de las abstracciones en caso de tener que cambiar de tecnología.

Aplicando este patrón se consigue:

- Aislar a los componentes críticos del sistema de cambios, consiguiendo un sistema más tolerante a cambios.
- Una interface clara de comunicación con los componentes críticos del sistema.
- Encapsulamiento de los detalles de implementación de los componentes críticos del sistema.
