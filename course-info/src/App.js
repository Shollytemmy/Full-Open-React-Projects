import React from 'react';

const Header =(props) =>{
  return(<div>
    {props.course.name}
    </div>
    )
  }

  const Part = (props) =>{
    return (
      <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>

      </div>
    )

  }

const Content =(props) =>{
    return(<div>
    <Part 
    part1 = {props.part1}
    exercises1 = {props.exercises1}
  />

  <Part 
      part2 = {props.part2}
      exercises2 = {props.exercises2}
  />
  <Part 
    part3 ={props.part3}
    exercises3 = {props.exercises3}
  />


  </div>

  )

}

const Total = (props) =>{
  return (<div>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )

}

const App = () =>{
  const course ={
    name: 'Half Stack application development',
   parts:[ 
    {
     name: 'Fundamentals of React',
     exercises: 10

  },
  { 
                name: 'Using props to pass data',
                 exercises2: 7
},
   {
              name:'State of a component',
              exercises3: 14
}
  ]
}

  return(
    <div>
    <Header course ={course} />
    <Content
     part1 = {course.parts[0].name}
     exercises1 = {course.parts[0].exercises}
      />
      
      <Content 
      part2 = {course.parts[1].name}
      exercises2 ={course.parts[1].exercises2}

      />

      <Content
      part3 = {course.parts[2].name}
      exercises3 = {course.parts[2].exercises3}

      />

      <Total 
        exercises1 = {course.parts[0].exercises}
        exercises2 = {course.parts[1].exercises2}
        exercises3 = {course.parts[2].exercises3}
      />

    
    
    
      
    </div>
  )

}

export default App;
