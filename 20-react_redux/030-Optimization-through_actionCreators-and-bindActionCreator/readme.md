# Лекция 194. Оптимизаця через actionCreators и bindActionCreator

* Схема из документации  
  GIF [ENG] (https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
* Официальная документация   
  DOC [ENG] (https://redux.js.org/)  
* bindActionCreators   
  DOC [ENG] (https://redux.js.org/api/bindactioncreators)
------------------------------------------------------------------  

* Команда установки redux react-redux
```shell 
npm install --force redux react-redux
```

* Функция reducer должна быть "чистой" функцией.
* Она должна зависеть только от состояния (state) и действия (action).
* Она должна возвращать один и тот же результат при одинаковых аргументах
* и не иметь никаких побочных эффектов