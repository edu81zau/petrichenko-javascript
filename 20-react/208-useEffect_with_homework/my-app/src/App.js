import {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './App.css';

const App = (props) => {

    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}!`);
        }
        return await res.json();
    };

    useEffect(() => {
        getData();
    }, []);

    const [data, setData] = useState([]);
    const [result, setResult] = useState();

    const getData = async () => {
        const res = await getResource(
            "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
        );
        setData(data => res.map(_transformData));
    };
    // Это аннотация для определения типа приходящих данных.
    // Для их активации нужно поставить вторую * в следующей строке
    /*
     * Преобразует элемент массива с данными о валюте в объект с определенной структурой.
     *
     * @param {{cc:string,txt:string,rate:number}} arr - Объект, представляющий элемент массива с данными о валюте.
     * Ожидается, что объект имеет свойства 'cc' (код страны),
     * 'txt' (название валюты) и 'rate' (значение валюты).
     * @returns {{ countryCode: string, nameOfCurrency: string, value: number }}
     * Объект с преобразованными данными, содержащий код страны,
     * название валюты и ее значение.
     */

    const _transformData = (arr) => {
        if (!(arr instanceof Object)) {
            throw new Error("Invalid type of arr");
        }
        if (!('cc' in arr)) {
            throw new Error("Expected cc in arr");
        }
        if (!('txt' in arr)) {
            throw new Error("Expected txt in arr");
        }
        if (!('rate' in arr)) {
            throw new Error("Expected rate in arr");
        }
        return {
            countryCode: arr.cc,
            nameOfCurrency: arr.txt,
            value: arr.rate
        };
    };

    function goToCurr(country) {
        let found = data.filter(elem => elem.countryCode === country);
        let symbol = found[0].countryCode === 'USD' ? ' $' :
            found[0].countryCode === 'GBP' ? ' £' :
                found[0].countryCode === 'EUR' ? ' €' :
                    found[0].countryCode === 'INR' ? ' ₹' : null;

        setResult(result => (Math.round(props.counter / found[0].value * 100) / 100) + symbol);
    }

    function reset() {
        setResult(result => null)
    }

    return (
        <div className="app">
            <div className="App-data">Вы ввели в гривнах: {props.counter}</div>
            <div className="App-counter">{result}</div>
            <div className="controls">
                <button onClick={() => goToCurr('USD')}>USD</button>
                <button onClick={() => goToCurr('EUR')}>EUR</button>
                <button onClick={() => goToCurr('GBP')}>GBP</button>
                <button onClick={() => goToCurr('INR')}>INR</button>
            </div>
            <div className="reset">
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

const root = createRoot(document.body);

root.render(
    <App counter={12000}/>
);

export default App;
