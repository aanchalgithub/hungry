export default function InputRadio({ placeholder, register, name, value }: { placeholder?: string, register: Function, name: string, value?: string }) {

    return (
        <div className="radioButtons">
        <input
          type="radio"
          name={name}
          placeholder={placeholder}
          className='formControl'
          {...register(name)}
          value={value}
        />
      </div>
    )
  }
  