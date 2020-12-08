import React, { Component } from 'react'

class ErrorWrapper extends Component {
    constructor(props)
    {
        super(props);
        this.state = {hasError : false};
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
      }
      render() {
        if( this.state.hasError) {
            return <h1>Some thing went Wrong</h1>
        }
        return this.props.children;
      }
}

export default ErrorWrapper;