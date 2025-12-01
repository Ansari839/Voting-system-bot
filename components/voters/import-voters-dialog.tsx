"use client"

import * as React from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ImportVotersDialog({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Import Voters</DialogTitle>
                    <DialogDescription>
                        Upload a CSV file containing voter details.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Voter List (CSV)</Label>
                        <Input id="picture" type="file" accept=".csv" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p>Expected format:</p>
                        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                            name,email,student_id
                        </code>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Import</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
