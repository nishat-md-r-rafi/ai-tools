import { cn } from "@/lib/utils"
import * as React from "react"

export  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// create input element
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, ...props}, ref) => {
        return (
            <input 
                type={type}
                className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-transparent", className)
                }

                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"

export {Input}