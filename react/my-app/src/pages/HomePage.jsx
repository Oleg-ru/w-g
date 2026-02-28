import React, {useState} from 'react';
import './HomePage.css'

function HomePage(props) {

    const [text, setText] = useState(null);
    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Форма отправлена. Ждите')
    };

    function handleMouseOver() {
        console.log('Навел на div')
    }

    function handleMouseOut() {
        console.log('Ушел с div')
    }

    function handleLoad() {
        console.log('Изображение загружено')
    }

    function handleError() {
        console.log('Ошибка в загрузке изображения!')
    }

    return (
        <div className="homePage">
            <input onChange={handleOnChange}/>
            <div>Текст: {text}</div>
            <form onSubmit={handleSubmit}>

                <button type="submit">Отправить</button>
            </form>
            <div style={{width: "100px", height: "100px", backgroundColor: "green"}}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
            >
                Наведи на меня
            </div>
            <img src="https://example.com/image.jpg"
                 alt="picter"
                 onLoad={handleLoad}
                 onError={handleError}
            />
        </div>
    );
}

export default HomePage;