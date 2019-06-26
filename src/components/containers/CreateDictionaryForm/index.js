import React, { useState, useEffect } from 'react'
import './style.scss'

// services
import { fetchTest, postCreateStyleDictForm } from '../../../services'

const CreateDictionaryForm = () => {
  const [style_category, setStyleCategory] = useState('')
  const [style_type, setStyleType] = useState('')
  const [style_item, setStyleItem] = useState('')
  const [style_value, setStyleValue] = useState('')

  const handleCategoryChange = (e) => setStyleCategory(e.target.value)
  const handleTypeChange = (e) => setStyleType(e.target.value)
  const handleItemChange = (e) => setStyleItem(e.target.value)
  const handleValueChange = (e) => setStyleValue(e.target.value)

  const addMoreCategory = () => {
    console.log('adding more category')
  }
  const addMoreType = () => {
    console.log('adding more type')
  }
  const addMoreItem = () => {
    console.log('adding more item')
  }

  const submitForm = (e) => {
    e.preventDefault()
    const params = {
      style_category,
      style_type,
      style_item,
      style_value
    }
    postCreateStyleDictForm(params)
  }

  return (
    <div className='CreateDictionaryForm'>
      <h3>Create Dictionary Form</h3>
      <button onClick={fetchTest}>Test Fetch</button>
      <form method='POST' className='create-dict-form' onSubmit={submitForm} id='create-dict-form' autoComplete='off'>
        <div className='create-dict-form__row'>
          <div className='create-dict-form__column'>
            <h4>Category</h4>
            <button onClick={addMoreCategory} type='button'>Add More Category</button>
            <input type='text' name='style_category[]' onChange={handleCategoryChange} placeholder='Category' />
          </div>
          <div className='create-dict-form__column'>
            <h4>Type</h4>
            <button onClick={addMoreType} type='button'>Add More Type</button>
            <input type='text' name='style_type[]' onChange={handleTypeChange} placeholder='Type' />
          </div>
          <div className='create-dict-form__column'>
            <h4>Item</h4>
            <button onClick={addMoreItem} type='button'>Add More Item</button>
            <div className='input-column'>
              <input type='text' name='style_item[]' onChange={handleItemChange} placeholder='Item' />
              <input type='text' name='style_value[]' onChange={handleValueChange} placeholder='Value' />
            </div>

            <div className='input-column'>
              <input type='text' name='style_item[]' onChange={handleItemChange} placeholder='Item' />
              <input type='text' name='style_value[]' onChange={handleValueChange} placeholder='Value' />
            </div>

            <div className='input-column'>
              <input type='text' name='style_item[]' onChange={handleItemChange} placeholder='Item' />
              <input type='text' name='style_value[]' onChange={handleValueChange} placeholder='Value' />
            </div>
          </div>
        </div>
        <div className='create-dict-form__footer'>
          <input type='submit' value='Create'/>
        </div>
      </form>
    </div>
  )
}

export default CreateDictionaryForm
