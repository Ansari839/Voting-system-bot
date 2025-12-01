"use client"

import * as React from "react"
import { Key, ShieldAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface MultiKeyModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    action: string
    requiredKeys?: number
}

export function MultiKeyModal({
    isOpen,
    onClose,
    onConfirm,
    action,
    requiredKeys = 3,
}: MultiKeyModalProps) {
    const [keys, setKeys] = React.useState<string[]>(Array(requiredKeys).fill(""))
    const [error, setError] = React.useState("")

    const handleKeyChange = (index: number, value: string) => {
        const newKeys = [...keys]
        newKeys[index] = value
        setKeys(newKeys)
        setError("")
    }

    const handleSubmit = () => {
        // Mock validation: check if all keys are filled
        if (keys.every((k) => k.length > 0)) {
            onConfirm()
            onClose()
        } else {
            setError("All keys are required to authorize this action.")
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-destructive">
                        <ShieldAlert className="h-5 w-5" />
                        Multi-Key Authorization Required
                    </DialogTitle>
                    <DialogDescription>
                        Action: <strong>{action}</strong>
                        <br />
                        This action requires authorization from {requiredKeys} administrators.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {Array.from({ length: requiredKeys }).map((_, i) => (
                        <div key={i} className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={`key-${i}`} className="text-right">
                                Key #{i + 1}
                            </Label>
                            <div className="col-span-3 relative">
                                <Key className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id={`key-${i}`}
                                    type="password"
                                    className="pl-9"
                                    placeholder="Enter admin key"
                                    value={keys[i]}
                                    onChange={(e) => handleKeyChange(i, e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleSubmit}>
                        Authorize Action
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
