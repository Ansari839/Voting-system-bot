"use client"

import * as React from "react"
import { Key, Shield, ShieldAlert, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const keys = [
    {
        id: "k1",
        holder: "Admin One",
        role: "Super Admin",
        status: "active",
        lastUsed: "2024-05-01 10:00 AM",
    },
    {
        id: "k2",
        holder: "Admin Two",
        role: "Election Manager",
        status: "active",
        lastUsed: "2024-05-02 09:30 AM",
    },
    {
        id: "k3",
        holder: "Admin Three",
        role: "Observer",
        status: "revoked",
        lastUsed: "2024-04-20 02:15 PM",
    },
]

export default function MultiKeyPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Keys
                        </CardTitle>
                        <Key className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">
                            Across all roles
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Keys
                        </CardTitle>
                        <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">
                            Currently valid
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Revoked Keys
                        </CardTitle>
                        <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        <p className="text-xs text-muted-foreground">
                            Security actions
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Key Management</CardTitle>
                    <CardDescription>
                        Manage cryptographic keys for multi-signature authorization.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Key Holder</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Last Used</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {keys.map((key) => (
                                <TableRow key={key.id}>
                                    <TableCell className="font-medium">{key.holder}</TableCell>
                                    <TableCell>{key.role}</TableCell>
                                    <TableCell>
                                        <Badge variant={key.status === "active" ? "default" : "destructive"}>
                                            {key.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{key.lastUsed}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">
                                            Manage
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
