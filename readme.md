# ENZYME + JEST - Ejemplos de tests para componentes hechos en ReactJS

El objetivo de este repositorio es mostrar la implementación básica de Enzyme. Contiene algunos componentes simples que se utilizaron para una introducción a las características de Enzyme, para poder lograr un buen porcentaje de cobertura en los tests.

**Comandos en consola:**
``` npm run test ``` ejecuta todos los test de la aplicación.
``` npm run test <nombre_componente.tsx>``` ejecuta el test de un componente específico, por ejemplo: ``` npm run test divbutton ```

Recuerda luego de clonar este repositorio, ejecutar el comando: ``` npm install ``` para instalar las dependencias.

# Contenido

Para testear los componentes, se utilizaron las funciónes:
```shallow()```, que retorna una instancia del componente *superficial*. Esto significa que podrá representar la funcionalidad del componente, pero no de los subcomponentes.
```mount()```, que retorna una instancia del componente *completa*. Por lo que con esa sola instancia se podrá testear la funcionalidad del componente principal y sus subcomponentes.

## Tests:
* Detección de que el componente recibe un click o se pulsó una tecla, y reacciona en consecuencia:
    * [/components/Buttons/CloseDialog](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Buttons/CloseDialog)
    * [/components/Buttons/DivButton](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Buttons/DivButton)
    * [/components/Buttons/LinkButton](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Buttons/LinkButton)
    * [/components/Buttons/TextButton](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Buttons/TextButton)
* Verificación de que un componente renderizó sus subcomponentes con sus propiedades:
    * [/components/Cards/TextCard](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Cards/TextCard)
    * [/components/Cards/DateCard](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Cards/DateCard)
    * [/components/Containers/Footer](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Containers/Footer)
    * [/components/Containers/Main](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Containers/Main)
    * [/components/Text/Paragraph](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Text/Paragraph)
* Verificación de renderizado condicional:
    * [/components/Containers/Nav](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Containers/Nav) por condición de @media query
    * [/components/Dialog](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/Dialog) por condición de properties sin valor
* Verificación de funcionalidad de un subcomponente que se encuentra en el siguiente nivel en el DOM:
    * [/components/pages/About](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/pages/About)
* Verificación de funcionalidad de un componente y todos sus subcomponentes. Renderizado del DOM completo:
    * [/components/pages/Home](https://github.com/marcegdv/demo-enzyme-jest/tree/master/components/pages/Home)

## Recomendación

**Si utilizas Visual Studio Code, instalar la extensión ``` Jest Runner ``` te será MUY UTIL para que puedas aprovechar al 100% los ejemplos en este repositorio.** Podrás ejecutar aisladamente cada test, o los tests que esten agrupados.

Extensión para Visual Studio Code:

![image](https://github.com/marcegdv/demo-jest/blob/master/jestRunnerExtension.jpg?raw=true)

Luego de instalar la extensión, aparecerá la opción **Run** con la que podrás focalizar la ejecución de tests:

![image](https://raw.githubusercontent.com/marcegdv/demo-jest/master/jestRunnerRunOption.jpg)

## Links útiles
* Enzyme: https://enzymejs.github.io/enzyme/
* Jest: https://jestjs.io/
