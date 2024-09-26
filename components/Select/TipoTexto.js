import React from "react";
import {
    Center,
    Box,
    Select,
    CheckIcon,
  } from "native-base";

const TipoTexto = () => {
    const [service, setService] = React.useState("");
    return <Center>
        <Box maxW="350">
          <Select selectedValue={service} minWidth="350" accessibilityLabel="Selecione..." placeholder="Selecione..." _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Diário" value="1" />
            <Select.Item label="Sonhos" value="2" />
            <Select.Item label="Ideia"  value="3" />
            <Select.Item label="Texto"  value="4" />
          </Select>
        </Box>
      </Center>;
  };

  export default TipoTexto;