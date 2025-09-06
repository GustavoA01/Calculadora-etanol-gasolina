import { useState } from "react"
import { useForm } from "react-hook-form"
import { Text, View } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "./homeStyles"
import { AppBarCustom } from "../components/AppBar"
import { Input } from "../components/Input"

type FormData = {
  ethanol: number
  gasoline: number
}

export default function HomeScreen() {
  const [resultMessage, setResultMessage] = useState<string>("")
  const { control, handleSubmit } = useForm<FormData>()

  const handleData = ({ ethanol, gasoline }: FormData) => {
    const ethanolNumber = parseFloat(ethanol as any)
    const gasolineNumber = parseFloat(gasoline as any)

    if (isNaN(ethanolNumber) || isNaN(gasolineNumber)) {
      alert("Preencha todos os campos")
      return
    }

    const percentage = ethanol / gasoline
    let message

    if (percentage <= 0.7) {
      message = `${(percentage * 100).toFixed()}%, recomendamos o uso de etanol`
    } else {
      message = `${(percentage * 100).toFixed()}%, recomendamos o uso de gasolina`
    }

    setResultMessage(message)
  }

  return (
    <>
      <AppBarCustom />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Insira o valor da gasolina</Text>
          <Input name="gasoline" control={control} />

          <Text style={styles.text}>Insira o valor do etanol</Text>
          <Input name="ethanol" control={control} />
        </View>
        <Button
          mode="contained"
          buttonColor="#865be2ff"
          onPress={handleSubmit(handleData)}
        >
          Calcular
        </Button>

        {resultMessage !== "" && (
          <Text style={styles.message}>{resultMessage}</Text>
        )}
      </View>
    </>
  )
}
