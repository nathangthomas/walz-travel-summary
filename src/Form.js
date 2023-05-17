import React, {useState, useRef} from 'react'
const Form = () => {
    const [formValues, setFormValues] = useState([{ methodOfTravel: "", destination: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { methodOfTravel: "", destination: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues)
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label> Method of Travel </label>
              <select name="methodOfTravel" onChange={e => handleChange(index, e)}>
                <option value=""></option>
                <option value="automobile">Automobile</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="plane">Plane</option>
                <option value="boat">Boat</option>
                <option value="bike">Bike</option>
                <option value="hike">Hike</option>

              </select>
              <label> Destination </label>
              <input type="text" name="destination" value={element.destination || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add Destination</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
}

export default Form;