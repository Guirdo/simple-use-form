# simple-use-form

A simple custom hook for managing the form state.

## Usage

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
        name='name'
        value={name}
        onChange={handleOnChange}
      />

      <input 
        name='email'
        value={email}
        onChange={handleOnChange}
      />
    </form>
  )
}
```