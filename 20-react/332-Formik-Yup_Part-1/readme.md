# Лекция 185. Formik, Yup и работа с формами любой сложности, часть 1

* Yup  
  DOC [ENG] (https://github.com/jquense/yup)
* react-hook-form   
  DOC [ENG] (https://react-hook-form.com/)
* formik  
  DOC [ENG] (https://formik.org/docs/overview)
* react final form  
  DOC [ENG] (https://final-form.org/react/)

------------------------------------------------------------------
* Строка
  JSON.stringify(values, null, 2)
  используется для того, что бы объект, который приходит первым аргументом
  превратить в строку с двумя пробелами в качестве разделителя и куда-то вывести. 

* Регулярное выражение для валидации email
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)  

