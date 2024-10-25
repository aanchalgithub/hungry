export default function TextArea({ placeholder }: { placeholder?: string }) {
    return (
      <>
        <textarea
          placeholder={placeholder}
          className='formControl'
        />
      </>
    )
  }
  