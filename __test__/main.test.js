import { renderHook, act } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import useForm from "../main";

describe('#useForm', ()=> {
  const initialState = {
    name: 'Joe',
    email: 'joe@mail.com'
  }

  it('should receive an object',()=> {
    expect(()=>useForm()).toThrow('parameter should be at least an empty object')
  })

  it('should not receive an array',()=> {
    expect(()=>useForm([])).toThrow('parameter should be at least an empty object')
  })

  it('should return an object',()=> {
    const {result} = renderHook(()=>useForm({}))
    expect(result.current).toBeTypeOf('object')
  })

  it('should update the values from the initial state',()=>{
    const {result} = renderHook(()=>useForm(initialState))

    const updatedState = {
      name: 'Joe Dalton',
      email: 'joe@mail.com'
    }

    act(()=>{
      result.current.updateValues(updatedState)
    })

    expect(result.current.formValues).toEqual(updatedState)
  })

  it('should reset to the initial state',()=>{
    const {result} = renderHook(()=>useForm(initialState))

    const updatedState = {
      name: 'Joe Dalton',
      email: 'joe@mail.com'
    }

    act(()=>{
      result.current.updateValues(updatedState)
      result.current.reset()
    })

    expect(result.current.formValues).toEqual(initialState)
  })

  it('should handle the input change event', ()=> {
    
  })
})