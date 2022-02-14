# ENZYME + JEST - Ejemplos de tests para componentes hechos en ReactJS

Este repositorio contiene algunos componentes simples que se utilizaron para una introducción a las características de Enzyme, para poder lograr una cobertura del 100% en los tests.

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
    /components/Buttons/CloseDialog
    /components/Buttons/DivButton
    /components/Buttons/LinkButton
    /components/Buttons/TextButton
* Verificación de que un componente renderizó sus subcomponentes con sus propiedades:
    /components/Cards/TextCard
    /components/Cards/DateCard
    /components/Containers/Footer
    /components/Containers/Main
* Verificación de renderizado condicional por condición de @media query:
    /components/Containers/Nav
* 

## Recomendación

**Si utilizas Visual Studio Code, instalar la extensión ``` Jest Runner ``` te será MUY UTIL para que puedas aprovechar al 100% los ejemplos en este repositorio.** Podrás ejecutar aisladamente cada test, o los tests que esten agrupados.

Extensión para Visual Studio Code:

![image](https://github.com/marcegdv/demo-jest/blob/master/jestRunnerExtension.jpg?raw=true)

Luego de instalar la extensión, aparecerá la opción **Run** con la que podrás focalizar la ejecución de tests:

![image](https://raw.githubusercontent.com/marcegdv/demo-jest/master/jestRunnerRunOption.jpg)

## Links útiles
Enzyme: https://enzymejs.github.io/enzyme/
Jest: https://jestjs.io/