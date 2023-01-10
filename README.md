# simple-use-form

A simple custom hook for managing the form state.

## Usage

```
import useForm from 'simple-use-form'

function App() {
  const {formValues, handleOnChange} = useForm({
    name: 'Joe',
    email: 'joe@mail.com',
    single: false
  });

  const { name, email, single } = formValues

  return (
    <div className="App">
      <form>
        <input 
          name='name'
          value={name}
          onChange={handleOnChange}
        />
      </form>
    </div>
  )
}


```