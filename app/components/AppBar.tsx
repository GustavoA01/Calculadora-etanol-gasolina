import { Appbar } from "react-native-paper";
 
import { styles } from "../(tabs)/homeStyles";

export const AppBarCustom = () => {
  return (
    <Appbar.Header style={styles.appBar}>
      <Appbar.Content
        title="Calculadora Etanol/Gasolina"
        titleStyle={styles.appBarTitle}
      />
    </Appbar.Header>
  );
};
