```text
------------------------------------------------------------------
1.
Этот первый путнкт выполняем только один раз, при создании проекта 
```

* Этот вариант создания рабочего проекта

```shell
npx --force create-react-app my-app
```  

* Этот вариант установления модуля sass в рабочий проект

```shell
npm install sass --force
```  

------------------------------------------------------------------

* После создания проекта переходим в корневую папку проекта

```shell
cd my-app
```

* Запускаем проект

```shell
npm start
```

* Перед каждым новым запуском проекта выполняем команду

```shell
cd my-app
```

* Запускаем проект

```shell
npm start
```

---

## Лекция 154 Предохранители (Error Boundaries)  

DOC [ENG] (https://react.dev/reference/react/Component#componentdidcatch)  
DOC [RU] (https://ru.legacy.reactjs.org/docs/react-component.html#componentdidcatch)
DOC [RU] (https://ru.legacy.reactjs.org/docs/react-component.html#static-getderivedstatefromerror)
### Предохранители ловят ошибки в:

* метод render
* в методах жизненного цикла
* в контрукторах дочерних компонентов

### Не ловят ошибки:

* внутри обработчивок событий
* асинхронный код
* в самом предохранителе