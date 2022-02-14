# ENZYME + JEST - Ejemplos de tests para componentes hechos en ReactJS

Este repositorio contiene algunos componentes simples que se utilizaron para explicar algunas características de Enzyme. Continuando con los ejemplos del repositorio sobre Jest.

**Comandos en consola:**
``` npm run test ``` ejecuta todos los test de la aplicación.
``` npm run test <nombre_componente.tsx>``` ejecuta el test de un componente específico, por ejemplo: ``` npm run test divbutton ```

Recuerda luego de clonar este repositorio, ejecutar el comando: ``` npm install ``` para instalar las dependencias.

# Contenido

Para testear los componentes, se utilizaron las funciónes:
```shallow()```, que retorna una instancia del componente *superficial*. Esto significa que podrá representar la funcionalidad del componente, pero no de los subcomponentes.
```mount()```, que retorna una instancia del componente *completa*. Por lo que con esa sola instancia se podrá testear la funcionalidad del componente principal y sus subcomponentes.

## Tests:

* Si un componente tiene que ejecutar una función cuando se le hace click:
    /components/Buttons/CloseDialog

## Recomendación

**Si utilizas Visual Studio Code, instalar la extensión ``` Jest Runner ``` te será MUY UTIL para que puedas aprovechar al 100% los ejemplos en este repositorio.** Podrás ejecutar aisladamente cada test, o los tests que esten agrupados.

Extensión para Visual Studio Code:

![image](https://github.com/marcegdv/demo-jest/blob/master/jestRunnerExtension.jpg?raw=true)

Luego de instalar la extensión, aparecerá la opción **Run** con la que podrás focalizar la ejecución de tests:

![image](https://raw.githubusercontent.com/marcegdv/demo-jest/master/jestRunnerRunOption.jpg)


## Links útiles
Enzyme: https://enzymejs.github.io/enzyme/
Jest: https://jestjs.io/