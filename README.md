# simple-use-form

A simple custom hook for managing the form state.

## Usage

### Most of inputs

```jsx
import useForm from 'simple-use-form'

function App() {
  const {formValues, handleOnChange} = useForm({
    name: 'Joe',
    email: 'joe@mail.com',
  });

  const { name, email } = formValues

  return (
    <form>
      <input 
        name="name"
        value={ name }
        onChange={ handleOnChange }
      />

      <input 
        name="email"
        value={ email }
        onChange={ handleOnChange }
      />
    </form>
  )
}
```

### Radio inputs

```jsx
const {formValues, handleOnChange} = useForm({
  single: 'no',
});

const { name, email } = formValues

return (
  <form>
    <label>
      Single ?:
    </label>
    <label>
      Yes
      <input
        name="single"
        type="radio"
        value="yes"
        defaultChecked={ single === 'yes' }
        onChange={ handleChange }
      />
    </label>

    <label>
      No
      <input
        name="single"
        type="radio"
        value="no"
        defaultChecked={ single === 'no' }
        onChange={ handleChange }
      />
    </label>
)
```