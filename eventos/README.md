# Respuesta a eventos

## Añadiendo manejadores de eventos
    Eventos como:
        Hover
        Click
        Enfocar inputs en formualrios

    Declarar la funsion a utilizar en el mismo componente
    Pasar la funcion en las props, no hacer un llamado a la funcion
        Pasar la funsion garantiza que se ejecute solo al realizar ele evento
        Mandar a llamar la funsion por otro lado, mandarla llamar asegura que la fusion se ejecute cada vez que el componente se renderiza

    Como pasar la funcion a traves de props:

    <button onClick={function handleClick() {
        alert('¡Me cliqueaste!');
    }}>

    o con fusion flecha

    <button onClick={() => {
        alert('¡Me cliqueaste!');
    }}>

    o en su version mas corta en linea
    <button onClick={() => alert('¡Me cliqueaste!')}>

## Leyendo las props en manejadores

    Al estar declarados en el componente, los manejadores pueden acceder a las props
    al igual que se viene haciendo con el map podemos cambiar las props para el caso de uso del componente

## Pasar manejadores de eventos como props
    Se utliza para que el componente padre especifique el manejador de eventos de un componente hijo, ejemplo:

        function Button({ onClick, children }) {
        return (
            <button onClick={onClick}>
            {children}
            </button>
        );
        }

        function PlayButton({ movieName }) {
        function handlePlayClick() {
            alert(`¡Reproduciendo ${movieName}!`);
        }

        return (
            <Button onClick={handlePlayClick}>
            Reproducir "{movieName}"
            </Button>
        );
        }

        function UploadButton() {
        return (
            <Button onClick={() => alert('¡Subiendo!')}>
            Subir imagen
            </Button>
        );
        }

        export default function Toolbar() {
        return (
            <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
            </div>
        );
        }

    En el ejemplo podemos observar como el componente tool bar renderiza un playbutton y un uploadbutton
    UploadBUtton para como props una funcion flecha

### ... mas informacion

## Propagacion de eventos
    Los amnejadores de eventos atrapan eventos de cualquier hijo del componente padre pueda tener
    LA propagacón se da hacia arriba del arbol de componentes declarados: empieza donde el evento sucedio y se propaga hacia arriba
    Al hacer click en un hijo, si tenemos un manejador de eventos en el padre tambien se ejecutara despues de activar el evento del hijo

## Detener la propagacion
    Los manejadores reciben un objeto llado e de "event". Con el metodo:    
        stopPropagation() podemos detener la propagacion del evento
            <button onClick={e => {
                e.stopPropagation();
                onClick();
            }}>

## Eventos de fase de captura
    En algunos casos sera necesario capturar los eventos, aun cuando la propagacion alla sido detenida
    Por ejemplo conteo de clicks:
        onCLickCapture = {() => { esto se ejecutara }}
    
## Pasar manejadores como alternativa de propagación
        function Button({ onClick, children }) {
            return (
                <button onClick={e => {
                e.stopPropagation();
                onClick();
                }}>
                {children}
                </button>
            );
        }

## Evitar el comportamiento por defecto
    Para el comportamiento por default de un form usamos el metodo de evento preventDefault()

        <form onSubmit={e => {
            e.preventDefault();
            alert('¡Enviando!');
        }}>

## Efectos secundarios de los manejadores?

    Sin duda!.
    a diferencia de las funciones los eventos no son puros, por ello es un buen lugar para cambiar algo, como el valor de un input, o cambiar los valores de una lista. Pero se necesita almacenarla usando el estado de memoria de un componente


# El estado: la memoria de un componente
    import { useState } from 'react';
    const [index, setIndex] = useState(0);