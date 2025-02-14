---  
# Лекция 130 - Стили в React. CSS и SASS/SCSS  

## Дополнительные материалы  
* EN [package] (https://www.npmjs.com/package/sass)
---  
# О лекции  
Работаем с компонентом add-form
Создали файл employers-add-form.scss.  
Из css файла переносим фрагменты кода
```scss
.app-add-form {
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
}
.add-form {
  margin-top: 20px;
  input {
    width: 350px;
    margin-right: 20px;
  }
}  
```  
В файле js нужно импортировать scss вместо css

Нужно установить пакет sass. В уроке используется команда 
```shell
npm i sass --save
```
Далее в папке src создали файл .scss с глобальной переменной 
$main-color: #FF5F13
Потом на уровне файла index.css создаем файл index.scss  
копируем стили в новый файл  
и импортируем файл с глобальной переменной  
<pre>
  @import './namefile.scss';
</pre>
использование переменной  
background-color: $main-color;  
не забыть в index.js изменить index.scss  
Для того, что бы использовать файл с глобальной переменной в других файлах  
нужно всегда импортировать файл с этой переменной