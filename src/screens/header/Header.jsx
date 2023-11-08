import Typed from 'react-typed'
// import Type from 'react-type'

const Header = () => {
  return (
    <div>
        <h1 className='page-wrapper'>Who am I?</h1>
        <Typed className='page-wrapper'
            strings={[
                'Full Stack Developer',
                'Renata Vieira'
            ]}
            typeSpeed={49}
            backSpeed={50}
            loop
        />
    </div>
  )
}

export default Header