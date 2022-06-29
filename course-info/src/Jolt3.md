const Hello = ({name, age}) => {
  // const name = props.name // const{name} = props
  // const age = props.age // const {age} = props
  const bornYear = () =>  new Date().getFullYear() - age
    // const yearNow = new Date().getFullYear()
    // return yearNow - age
  

  return (
    <div>
    <p>Hello {name} you are {age} years old</p>
    <p>So you are probably born in {bornYear()}</p>
    </div>
  )

}

const App = () => {
  const name = 'Ayyub'
  const age = 26

  return (
    <div>
    <h1>Greetings</h1>
    <Hello 
    name = 'Nur'
    age = {age + 3}
     />

     <Hello
      name = 'Aish'
      age = {age - 4}

      />

      <Hello
      name = {name}
      age = {age}
       />

    </div>
  )
}