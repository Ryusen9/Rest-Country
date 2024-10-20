import props from 'prop-types'
const Todo = ({ name, isTrue }) => {
  return(
    isTrue === true && <p>Hi, {name}</p>
  ) 
}

Todo.propTypes = {
    name: props.string,
    isTrue: props.bool
}

export default Todo