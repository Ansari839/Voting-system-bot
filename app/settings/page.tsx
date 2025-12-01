"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
    const { setTheme } = useTheme()

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Settings</h3>
                <p className="text-sm text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>
                            This is how others will see you on the site.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" defaultValue="Admin User" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" defaultValue="admin@example.com" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save changes</Button>
                    </CardFooter>
                </Card>

                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Preferences</CardTitle>
                        <CardDescription>
                            Customize your dashboard experience.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label>Theme</Label>
                            <div className="flex items-center space-x-2">
                                <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
                                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                                </Button>
                                <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
                                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                    Select your preferred theme.
                                </span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="timezone">Timezone</Label>
                            <Select defaultValue="utc">
                                <SelectTrigger id="timezone">
                                    <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="utc">UTC</SelectItem>
                                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                    <SelectItem value="ist">Indian Standard Time (IST)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save preferences</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
