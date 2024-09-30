import { StyleSheet, View } from "react-native"
import { HStack, TextInput, Button, Text } from "@react-native-material/core"
import { useState } from "react"

export default function App() {
    const [input, setInput] = useState("")
    const [firstValue, setFirstValue] = useState(null)
    const [operation, setOperation] = useState(null)
    const [result, setResult] = useState(null)

    const handleOperation = (op) => {
        setFirstValue(parseFloat(input))
        setOperation(op)
        setInput("")
    }

    const handleCalculation = () => {
        secondValue = parseFloat(input)
        let calculatedResult
        if (firstValue !== null && !isNaN(secondValue) && operation) {
            switch (operation) {
                case "+":
                    calculatedResult = firstValue + secondValue
                    break
                case "-":
                    calculatedResult = firstValue - secondValue
                    break
                case "*":
                    calculatedResult = firstValue * secondValue
                    break
                case "/":
                    calculatedResult = firstValue / secondValue
                    break
                default:
                    return
            }
        }
        setResult(calculatedResult)
        setInput("")
        setFirstValue(null)
        setOperation(null)
    }

    return (
        <View style={styles.container}>
            <TextInput
                keyboardType="numeric"
                style={styles.textinput}
                textAlign="right"
                value={input}
                onChangeText={setInput}
            />

            <HStack style={styles.hstack}>
                <Button
                    title={"+"}
                    onPress={() => handleOperation("+")}
                    style={styles.opbutton}
                />
                <Button
                    title={"-"}
                    onPress={() => handleOperation("-")}
                    style={styles.opbutton}
                />
            </HStack>

            <HStack style={styles.hstack}>
                <Button
                    title={"*"}
                    onPress={() => handleOperation("*")}
                    style={styles.opbutton}
                />
                <Button
                    title={"/"}
                    onPress={() => handleOperation("/")}
                    style={styles.opbutton}
                />
            </HStack>

            <Button
                title={"calcular"}
                onPress={handleCalculation}
                style={styles.calcbutton}
            />
            {result !== null && <Text>{result}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    hstack: {
        gap: 10,
    },
    textinput: {
        width: 150,
    },
    opbutton: {
        width: 70,
    },
    calcbutton: {
        width: 150,
    },
})
