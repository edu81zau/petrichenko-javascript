# Лекция 177. Динамические импорты и React.lazy.  

* Базовая документация  
  DOC [RU/ENG] (https://ru.legacy.reactjs.org/docs/react-api.html#reactlazy)    
* Документация импортов  
  DOC [RU] (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import)      
* Новая документация  
  DOC [ENG] (https://react.dev/reference/react/lazy#lazy)      

* До оптимизации - сделали сборку и получили папку 751 КБ и три файла chunk.  
* После оптимизации и сборки получили папку 880 КБ и гораздо больше файлов chunk.
* Но при загрузке загружаются маленькие файлы и сама загрузка получается быстрее.