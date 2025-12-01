import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recentActivity = [
    {
        id: "1",
        action: "Vote Cast",
        user: "John Doe",
        details: "Voted in Student Council Election",
        time: "2 mins ago",
        status: "success",
    },
    {
        id: "2",
        action: "New Candidate",
        user: "Admin",
        details: "Added Jane Smith to Science Club",
        time: "1 hour ago",
        status: "info",
    },
    {
        id: "3",
        action: "Election Created",
        user: "Super Admin",
        details: "Created Annual General Meeting",
        time: "3 hours ago",
        status: "warning",
    },
    {
        id: "4",
        action: "Voter Registered",
        user: "System",
        details: "New voter registration via portal",
        time: "5 hours ago",
        status: "success",
    },
]

export function RecentActivity() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                    Latest actions performed in the system.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Action</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Details</TableHead>
                            <TableHead className="text-right">Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentActivity.map((activity) => (
                            <TableRow key={activity.id}>
                                <TableCell className="font-medium">
                                    <Badge variant={activity.status === "success" ? "default" : "secondary"}>
                                        {activity.action}
                                    </Badge>
                                </TableCell>
                                <TableCell>{activity.user}</TableCell>
                                <TableCell>{activity.details}</TableCell>
                                <TableCell className="text-right">{activity.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
