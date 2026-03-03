import { useState } from "react";
import * as employeeService from "../service/employeeService"

export function useFormInput() {
    const [inputValue, setInputValue] = useState<string>("");

    function tryInput(): {isValid: boolean, errors: string[]} {
        const validation = employeeService.validateEmployee(inputValue);

        return validation
    };

    return {
        inputValue,
        setInputValue,
        tryInput
    }
}

