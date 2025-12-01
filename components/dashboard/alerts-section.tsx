import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from "lucide-react"

export function AlertsSection() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Critical Alert</AlertTitle>
                <AlertDescription>
                    Multi-key protection is disabled for "General Election 2024". Enable it immediately.
                </AlertDescription>
            </Alert>
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>System Update</AlertTitle>
                <AlertDescription>
                    Scheduled maintenance window: Sunday 2:00 AM - 4:00 AM UTC.
                </AlertDescription>
            </Alert>
        </div>
    )
}
