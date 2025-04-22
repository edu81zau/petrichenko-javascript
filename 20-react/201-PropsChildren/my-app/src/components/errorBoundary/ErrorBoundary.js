import {Component} from 'react';
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundaries extends Component {
    state = {
        error: false,
    }
//занимается только тем, что обновляет состояние
//     static getDerivedStateFromError(error) {
//         return {error: true};
//     }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary.componentDidCatch",error,info);
        this.setState({
            error: true,
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return this.props.children;
    }
}

export default ErrorBoundaries;