# Лекция 176. Практика создания динамических путей.  

* no-match документация  
  DOC [ENG] (https://github.com/remix-run/react-router/releases)  

   ## useHistory
* До React Router v6 хук useHistory был одним из ключевых 
  инструментов для программной навигации в React-приложениях. Однако, 
  начиная с React Router v6, хук useHistory был удален и заменен на 
  более современный и функциональный хук useNavigate.
* __useHistory__ предоставлял доступ к объекту history, который позволял 
  программно управлять историей браузера. Объект history содержал методы для:
  - __push(path, [state]):__ Добавление новой записи в стек истории, 
      что фактически перенаправляло пользователя на новый URL. 
      state был необязательным параметром для передачи дополнительных данных.
```js
    history.push('/dashboard');
    history.push('/product/123', { from: 'homepage' });
```
  - __replace(path, [state]):__ Замена текущей записи в стеке истории новой. 
    Используется, чтобы пользователь мог вернуться к предыдущей странице с 
    помощью кнопки "Назад" в браузере.

```js
    // После выхода из системы, чтобы пользователь не мог вернуться на предыдущую страницу
    history.replace('/login'); 
```

  - __goBack() / goForward():__ Перемещение на одну запись назад или вперед 
    в стеке истории браузера.

```js
    history.goBack(); // Эквивалент нажатию кнопки "Назад"
```

  - __go(n):__ Перемещение на n записей в истории 
    (например, history.go(-2) вернет на две страницы назад).  

  - __block(prompt):__ Блокировка навигации (например, для 
    предупреждения пользователя о несохраненных изменениях перед уходом со страницы).

  * В __React Router v6__ или выше используется хук useNavigate
  
    Пример кода использования useNavigate:

```js

    import { useNavigate } from 'react-router-dom';
    
    function MyComponent() {
      const navigate = useNavigate();
    
      const handleGoToDashboard = () => {
        navigate('/dashboard'); // Эквивалентно history.push('/dashboard')
      };
    
      const handleReplaceRoute = () => {
        navigate('/new-route', { replace: true }); // Эквивалентно history.replace('/new-route')
      };
    
      const handleGoBack = () => {
        navigate(-1); // Эквивалентно history.goBack()
      };
    
      const handleGoForward = () => {
        navigate(1); // Эквивалентно history.goForward()
      };
    
      // Передача состояния
      const handleGoToProduct = () => {
        navigate('/product/456', { state: { from: 'category-page' } });
      };
    
      return (
        <div>
          <button onClick={handleGoToDashboard}>Go to Dashboard</button>
          <button onClick={handleReplaceRoute}>Replace Route</button>
          <button onClick={handleGoBack}>Go Back</button>
          <button onClick={handleGoForward}>Go Forward</button>
          <button onClick={handleGoToProduct}>Go to Product 456</button>
        </div>
      );
    }
```  

##  useLocation

 * Предоставляет доступ к объекту __location__, c содержанием о текущем URL-адресе приложения.  
   JSON

 * Объект __location__ содержит несколько полезных свойств, описывающих текущий URL:  

    - pathname: (Строка) Полный путь URL, начиная с косой черты (/). 
      Например, для http://example.com/products/123?filter=new#section-top 
      pathname будет /products/123.  
    - __search__: (Строка) Часть URL, содержащая параметры запроса (query parameters), 
      включая ведущий вопросительный знак (?). Например, для того же URL search будет ?filter=new.  
    - __hash__: (Строка) Часть URL, начинающаяся с символа решетки (#), 
      используемая для якорей. Например, hash будет #section-top.  
    - __state__: (Объект/Любой тип данных) Необязательное состояние, которое было передано
      с текущим местоположением 
      (например, при использовании Maps('/path', { state: { data: 'some info' } }) 
      или history.push('/path', { data: 'some info' })). 
      Это состояние не отображается в URL, но доступно при навигации. 
      Оно полезно для передачи данных между маршрутами без использования параметров URL.  
    - __key__: (Строка) Уникальный ключ для данного местоположения. 
      Полезен для отслеживания уникальных записей в истории браузера.  

    * Объект location, возвращаемый useLocation, является __иммутабельным__.   
      Это означает, что при каждом изменении URL-адреса useLocation возвращает 
      новый объект location. Именно это свойство позволяет использовать его в 
      зависимостях useEffect для отслеживания изменений URL.