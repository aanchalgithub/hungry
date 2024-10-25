export default function InputMobileNumber({
  placeholder,
  register,
  name,
  value,
}: {
  placeholder: string;
  register: Function;
  name: string;
  value?: number | string;
}) {
  return (
    <>
      <input
        type="number"
        placeholder={placeholder}
        {...register(name)}
        name={name}

        value={value}
      />
    </>
  );
}
