import './App.css';
import { getImageUrl } from '../utils/Utils.js';

// Вариант кода, который был дан для выполнения задания
// Задание
// Этот компонент Gallery содержит очень похожую разметку для двух профилей.
// Извлеките из него компонент Profile, чтобы уменьшить дублирование.
// Вам нужно будет выбрать, какие параметры передать ему.


export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <section className="profile">
                <h2>Maria Skłodowska-Curie</h2>
                <img
                    className="avatar"
                    src={getImageUrl('szV5sdG')}
                    alt="Maria Skłodowska-Curie"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        physicist and chemist
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        (Nobel Prize in Physics, Nobel Prize
                        in Chemistry, Davy Medal, Matteucci Medal)
                    </li>
                    <li>
                        <b>Discovered: </b>
                        polonium (element)
                    </li>
                </ul>
            </section>
            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src={getImageUrl('YfeOqp2')}
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        geochemist
                    </li>
                    <li>
                        <b>Awards: 2 </b>
                        (Miyake Prize for geochemistry, Tanaka
                        Prize)
                    </li>
                    <li>
                        <b>Discovered: </b>a method for
                        measuring carbon dioxide in seawater
                    </li>
                </ul>
            </section>
        </div>
    );
}