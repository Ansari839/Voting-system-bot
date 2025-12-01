"use client"

import * as React from "react"
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const barData = [
    { name: "Candidate A", votes: 400 },
    { name: "Candidate B", votes: 300 },
    { name: "Candidate C", votes: 300 },
    { name: "Candidate D", votes: 200 },
]

const pieData = [
    { name: "Science", value: 400 },
    { name: "Arts", value: 300 },
    { name: "Commerce", value: 300 },
    { name: "Engineering", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function ReportsPage() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Select defaultValue="sc2024">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Election" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="sc2024">Student Council 2024</SelectItem>
                            <SelectItem value="scp2024">Science Club President</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Export Report
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Vote Distribution</CardTitle>
                        <CardDescription>
                            Votes per candidate in the selected election.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="votes" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Department Participation</CardTitle>
                        <CardDescription>
                            Voter turnout by department.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) =>
                                        `${name} ${(percent * 100).toFixed(0)}%`
                                    }
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
