import {useFormik} from 'formik';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = "Обязательное поле!";
    } else if (values.name.length < 2) {
        errors.name = "Минимум 2 символа для заполнения!";
    }

    if (!values.email) {
        errors.email = "Обязательное поле!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Неправильный email адрес!";
    }
    return errors;
}

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validate,
        /* Строка
        * JSON.stringify(values, null, 2)
        * используется для того, что бы объект, который приходит первым аргументом
        * превратить в строку с двумя пробелами в качестве разделителя
        * и куда-то вывести.
        * */
        onSubmit: values => console.log(JSON.stringify(values, null, 2)),
    })

    //onBlur - это событие срабатывает, когда мы уводит фокус с элемента
    //при нажатии Tab тоже срабатывает onBlur
    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2> Отправить пожертвование </h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="amount"> Количество </label>
            <input
                id="amount"
                name="amount"
                type="amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="currency"> Валюта </label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                <option value=""> Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="UAH">UAN</option>
                <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text"> Ваше сообщение </label>
            <textarea
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label className="checkbox">
                <input
                    name="terms"
                    type="checkbox"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;