import props from 'prop-types'
const Actors = () => {
    const actorsArr = ["John Wick", "Tom Cruise"];
  return (
    actorsArr.map((name) => (
        <p key={name}>My name is {name}</p>
    ))
  )
};
Actors.propTypes = {
  name: props.string.isRequired,
};
export default Actors;
