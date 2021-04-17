import React , {useState} from 'react';


export default function Form(props){

    const [name, setName] = useState('');


    function handleSubmit(e){
        e.preventDefault();


        if(name.trim()){    //remove any trailing whitespace
            props.addTask(name);    //sending back to parents
            setName("");    //emptying the input
        }
        
    }

    function handleChange(e){
        // console.log("Typing");
        //  console.log(e.target.value);
         setName(e.target.value);
    }


    return(
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What Needs to be Done?
          </label>
        </h2>
        <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
              value={name}
              onChange={handleChange}
        />
        <button type="submit" className="btn b tn__primary btn__lg">
          Add
        </button>
      </form>

    );
}