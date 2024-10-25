export default function InputText({
    placeholder,
    register,
    name,
    value,
    readonly,
  }: {
    placeholder?: string;
    register: Function;
    name: string;
    readonly?: boolean;
    value?: string;
  }) {
    return (
      <>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="formControl"
          {...register(name)}
          value={value}
          autoComplete="new"
          readOnly={readonly}
        />
      </>
    );
  }
  