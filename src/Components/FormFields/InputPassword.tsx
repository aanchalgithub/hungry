export default function InputPassword({ placeholder }: { placeholder?: string }) {
    return (
      <>
        <input
          type='text'
          placeholder={placeholder}
          className='formControl'
        />
      </>
    )
  }
  