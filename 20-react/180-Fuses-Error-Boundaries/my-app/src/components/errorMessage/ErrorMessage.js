import img from './error.gif';
const ErrorMessage = () => {
    return (
        //Так обращаемся к ресурсам, которые находятся в папке public
        //<img src={process.env.PUBLIC_URL + '/error.gif'}/>
        <img style={{display: 'block', width: '250px', height: '250px',
            objectFit: 'contain', margin: '0 auto'}} src={img} alt="Error"/>

    )
}

export default ErrorMessage;