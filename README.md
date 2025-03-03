# amigo.secreto

# Sorteo de Amigo Secreto

Este es un programa simple en JavaScript que permite a los usuarios ingresar nombres de amigos, almacenarlos en una lista y luego realizar un sorteo para asignar un "amigo secreto" a cada uno de ellos. El programa evita autoasignaciones y nombres duplicados.

## Características

- **Agregar amigos**: Permite ingresar nombres de amigos en una lista.
- **Validación de entrada**: Evita nombres vacíos y duplicados.
- **Sorteo**: Asigna aleatoriamente un amigo secreto a cada persona en la lista.
- **Interfaz simple**: Muestra la lista de amigos y los resultados del sorteo en la pantalla.

## Cómo usar

1. **Ingresar nombres**:
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Agregar" (o similar) para agregar el nombre a la lista.
   - Repite este proceso para todos los amigos que participarán en el sorteo.

2. **Realizar el sorteo**:
   - Una vez que hayas agregado al menos dos nombres, haz clic en el botón "Sortear" (o similar).
   - El programa asignará aleatoriamente un amigo secreto a cada persona y mostrará los resultados en la pantalla.

3. **Reiniciar**:
   - Si deseas realizar otro sorteo, puedes limpiar la lista y comenzar de nuevo.

## Requisitos

- Un navegador web moderno (como Chrome, Firefox o Edge).
- No se necesitan dependencias externas, ya que el programa está escrito en JavaScript puro.

## Estructura del código

- **`agregarAmigo()`**: Agrega un nombre a la lista de amigos después de validar que no esté vacío o duplicado.
- **`actualizarLista()`**: Actualiza la lista de amigos mostrada en la pantalla.
- **`sortearAmigo()`**: Realiza el sorteo y asigna un amigo secreto a cada persona.
- **`mostrarResultado()`**: Muestra los resultados del sorteo en la pantalla.

## Ejemplo de uso

1. Ingresa los nombres: "Ana", "Carlos", "Luisa", "Pedro".
2. Haz clic en "Sortear".
3. El programa podría mostrar:
   - Ana → Carlos
   - Carlos → Luisa
   - Luisa → Pedro
   - Pedro → Ana

## Notas

- Asegúrate de ingresar al menos dos nombres para que el sorteo funcione.
- El programa evita que una persona sea asignada a sí misma.

## Contribuciones

Si deseas contribuir a este proyecto, ¡siéntete libre de hacer un fork y enviar un pull request! Las mejoras y sugerencias son bienvenidas.

---

¡Diviértete organizando tu sorteo de amigos secretos! 🎉
