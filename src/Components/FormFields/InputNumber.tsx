export default function InputNumber({
    placeholder,
    register,
    name,
    value,
    readOnly,
    disabled,
  }: {
    placeholder: string;
    register: Function;
    name: string;
    value?: number | string;
    readOnly?: boolean;
    disabled?: boolean
  }) {
    return (
      <>
        <input
          type="number"
          placeholder={placeholder}
          name={name}
          {...register(name)}
          
          className="formControl"
          value={value}
          readOnly={readOnly}
          disabled = {disabled}
        />
      </>
    );
  }
  