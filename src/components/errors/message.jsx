import './styles/message.css';
const SuccessMsg = ({message}) => {
  return (
    <div className="success">{message}</div>
  )
}

export default SuccessMsg

// error msg
export const ErrorMsg = ({message}) => {
  return (
    <div className="Error">{message}</div>
  )
}

// loading msg
export const LoadingMsg = ({message}) => {
  return (
    <div className="Loading">{message}</div>
  )
}

