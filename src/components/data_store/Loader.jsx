import Loading from '../images/the_loader.gif'
const Loader = () => {
  return (
    <div className="py-16 flex">
      <img className='w-32' src={Loading} alt="Loader" />
    </div>
  )
}

export default Loader