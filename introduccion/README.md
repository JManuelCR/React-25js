# Aprender a usar las herraminetas y leer documentaccion
    Este sera el skill para que nos desarrollemos en la tecnologia
    Intentar empezar con estas herramientas
    Haremos muchas practicas para poder entender como funsiona react
    No podemos aprender todo!!!!
    Aaprenderemoslas cosas mas importantes.
    No abrumarse y saber donde poner nuestro tiempo en lo que debemos ponerlo

## Como fuciona la web
Toda la eab ocupa HTML, CSS y Javascript

## Todo esta basado en el modelo HTTP 
    El cliente es el frintend
    Cuando visitamos un sitio nos responde con 3 archivos,
        html,
        css,
        javascript
    
## Problemas con HTML
    No es reutilizable 
    Archivos muy largos 
    dificil de leer cuando al crecer
    dicil de escalar

# React
    es una libreria javascript (no un framework)
    se encarga de manejar la UI
    bsado en  componente
    mejora la reusabilidad
    Mejora la legibilidad 
    mas facil de escalar
    mas facul de probar
    mas facil colaborar

# Algunos conceptos importantes
    Saber que existen, saber cque hacen y como se utilizan

        Bundler
            Toman los archivo s que nosotroas hacemos  html, pug que se traduce a html, o coffescript y lo pasan a javascript, typescript, markdown.
            que bundlers existen 
                webpack
                    facebook
                Rollup
                Parcel
                Mozila Firefox
            Al bundler se le instala modulos para saber que tipo de archivos va a leer, agregando plugins, estos bundles procesan imagenes y video.
            Si temos umagenes  imagenes muy pesadas, podemos avantar mucha imaganes  en un repo e indicar que se optimicen para ser utililizados en el frontend
        
        Transpilador
            Son programas que pasan o convierten un lenguaje de progrmacio a otro por ejemplo pug se puede transpilar a HTML e includo javascript puede transpilar a javascript
            Por ejemplo cada navegador aceota ciertos features para puedan entender que es lo que queremos para que podamos obtener lo que queramos
            Uno de los transpiladores conocidos es 
                Babel
                    Ir a la parte de tryout y escribir codigo
                TypeScripr

            SWC
                Ir a la web de swc, en el playgroun podemos ver como funcionay como podemos ocupar. Nosotos podemos indicar que quiere compilar y que queremos transpilar
            En javascript  el compilador es aquel que integra el codigo y el compilador es el que hce que el navegador entienda lo que estamos tratando de decirle

            Minificacion

                Es tomar un archivo y llevarlo a su minima expresion posible, se hace para que nosotros podamos leer bien el codigo pero la computadora no lo necesita asi por lo cual podemos retirar los espacios y mandarselo al ordenador con alfunos kilobits menos de peso para que podamos tener un mejor rendimoiento
                Configuramos los bundles para que minifiquen los archivos al momento de subirlos
            
            Ofuscacion
                
                La ofuscacion es para que el codigo que hacemos no se entiendan si algien los inspecciona para tener como se esta haciendo la progrmacion por detras.
                Su funcion es hacerla menos entendibles
            


### Existe mas herrmaientas de CSS
    less
    postCSS en un preprocesador


## Librerias y frameworks que existen
    Librerias UI    
        React 
        Angular
        AngularJS
        Jquery
        View
        
# Documentacion de React react.dev
    Ir a learn
    Tambien visitar la parte de reference

## Frameworks

    React
        Next
        Remix
        svelt kit
        nux
        astro; herrmienta para crear diferemtes paginas a la vez
        gatsby
        lit  

    Angular
        No tiene frameworks

# Como iniciar un proyecto en react
    se puede crear de varias maneras
        Create react tab, puede se un poco lenta una aplicacion creada de esta manera
        Crearlo con la instalacion de react como instalar bootstrap
        Ir a la documentaccion de react
            start a new react project

                usaremos vite
                    entremos a la pagina vite.dev
                        internamente vite es ta ocupando rolob
                    usaremos preact que es un poco mas rapido que react pero cambia un poco el codigo
                        Usaremos el codigo
                            npm create vite@latest

                            el paquete es vite y especificamos la version que queremos usar de ese paquete
# -------------------------- Hay dos clases atras --------------------------------------++
# deshabilitar el error de eslint propTypes
    Ir al archivo eslintrc
        ir a rules
        crear una nueba regla de
             react/prop-types: off
# ESModules
    import/export

    se puede usar commonJS con require, export
    Sin embargo para el JS actual se utiliza import y export
    Podemo exportar una cosa por defecto, es por ello que usamos default para hacer una importacion simple
              
        
        

