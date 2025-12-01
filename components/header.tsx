"use client"

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter((segment) => segment)

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        {pathSegments.map((segment, index) => {
                            const href = `/${pathSegments.slice(0, index + 1).join("/")}`
                            const isLast = index === pathSegments.length - 1
                            const title = segment.charAt(0).toUpperCase() + segment.slice(1)

                            return (
                                <div key={href} className="flex items-center">
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        {isLast ? (
                                            <BreadcrumbPage>{title}</BreadcrumbPage>
                                        ) : (
                                            <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                                        )}
                                    </BreadcrumbItem>
                                </div>
                            )
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <ModeToggle />
            </div>
        </header>
    )
}
