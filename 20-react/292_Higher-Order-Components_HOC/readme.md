# Лекция 181. Компоненты высшего порядка (HOC)    

* статья с примерами  
    DOC [RUS] (https://medium.com/nuances-of-programming/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-react-render-props-%D0%B8-hoc-263f498ac841)      
* базовая документация    
  DOC [RUS] (https://ru.legacy.reactjs.org/docs/higher-order-components.html)
* хуки против  HOC    
  DOC [RUS] (https://css-live.ru/articles/smogut-li-react-xuki-zamenit-komponenty-vysshego-poryadka-hoc.html)

## Когда не стоит применть HOC    
* Чем больше props, тем меньше смысла в HOC    
* Если в проекте только один компонент подходит для HOC -  нет смысла его создавать  
* Если при добавлении нового компонента всякий раз вносятся измненения в HOC  

## Когда стоит применть HOC    
* Логика в компоненте подходит для многих компонентов    
* Не будет увеличиваться количество передаваемых аргументов  
* Когда необходимо добавить общую логику для многих компонентов
