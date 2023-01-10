import { renderHook, act, render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import useForm from "../main";

const initialState = {
  name: 'Joe',
  email: 'joe@mail.com',
  single: false
}

const TestForm = ({ formValues, handleOnChange }) => {
  return (
    <form>
      <input
        aria-label="name-input"
        name="name"
        value={formValues.name}
        onChange={handleOnChange}
      />
      <input 
        aria-label="single-input"
        name="single"
        type="checkbox"
        defaultChecked={`${formValues.single}`}
        onChange={handleOnChange}
      />
    </form>
  )
}

describe('#useForm', () => {
  afterEach(() => {
    cleanup()
  })

  it('should receive an object', () => {
    expect(() => useForm()).toThrow('parameter should be at least an empty object')
  })

  it('should not receive an array', () => {
    expect(() => useForm([])).toThrow('parameter should be at least an empty object')
  })

  it('should return an object', () => {
    const { result } = renderHook(() => useForm({}))
    expect(result.current).toBeTypeOf('object')
  })

  it('should update the values from the initial state', () => {
    const { result } = renderHook(() => useForm(initialState))

    const updatedState = {
      name: 'Joe Dalton',
      email: 'joe@mail.com'
    }

    act(() => {
      result.current.updateValues(updatedState)
    })

    expect(result.current.formValues).toEqual(updatedState)
  })

  it('should reset to the initial state', () => {
    const { result } = renderHook(() => useForm(initialState))

    const updatedState = {
      name: 'Joe Dalton',
      email: 'joe@mail.com'
    }

    act(() => {
      result.current.updateValues(updatedState)
      result.current.reset()
    })

    expect(result.current.formValues).toEqual(initialState)
  })

  it('should handle onChange event', () => {
    const { result } = renderHook(() => useForm(initialState))
    const util = render(
      <TestForm 
        formValues={result.current.formValues}
        handleOnChange={result.current.handleOnChange}
      />
    )

    const input = util.getByLabelText('name-input')

    fireEvent.change(input, { target: { value: 'Alex' } })

    expect(result.current.formValues.name).toBe('Alex')
  })

  it('should handle changing the value of a radio button', ()=> {
    const { result } = renderHook(() => useForm(initialState))
    const util = render(
      <TestForm 
        formValues={result.current.formValues}
        handleOnChange={result.current.handleOnChange}
      />
    )

    const input = util.getByLabelText('single-input')

    fireEvent.change(input,{target: {checked: true}})
    expect(input.checked).toBe(true)
    expect(result.current.formValues.single).toBe(true)
  })
})