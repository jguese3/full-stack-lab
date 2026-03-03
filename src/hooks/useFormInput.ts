import { useState } from "react";
import * as employeeService from "../service/employeeServive"

export function useFormInput() {
    const [inputValue, setInputValue] = useState<string>("");

    function tryInput(): {isValid: boolean, errors: string[]} {
        const validation = employeeService.validateInput(inputValue);

        return validation
    };

    return {
        inputValue,
        setInputValue,
        tryInput
    }
}

