import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { TextInput } from "react-native"
import { styles } from "../(tabs)/homeStyles"

type InputProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
}

export const Input = <T extends FieldValues>({name, control}: InputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          keyboardType="numeric"
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          style={styles.input}
        />
      )}
    />
  )
}
