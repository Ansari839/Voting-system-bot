"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CreateElectionDialog } from "@/components/elections/create-election-dialog"
import { MultiKeyModal } from "@/components/elections/multi-key-modal"

export type Election = {
    id: string
    name: string
    status: "draft" | "active" | "completed" | "paused"
    startDate: string
    endDate: string
    votersCount: number
}

const data: Election[] = [
    {
        id: "m5gr84i9",
        name: "Student Council 2024",
        status: "active",
        startDate: "2024-05-01",
        endDate: "2024-05-07",
        votersCount: 1200,
    },
    {
        id: "3u1re74n",
        name: "Science Club President",
        status: "draft",
        startDate: "2024-06-10",
        endDate: "2024-06-15",
        votersCount: 50,
    },
    {
        id: "derv1ws0",
        name: "Annual General Meeting",
        status: "completed",
        startDate: "2024-01-15",
        endDate: "2024-01-15",
        votersCount: 5000,
    },
]

export default function ElectionsPage() {
    const [data, setData] = React.useState<Election[]>([])
    const [loading, setLoading] = React.useState(true)
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const [isMultiKeyOpen, setIsMultiKeyOpen] = React.useState(false)
    const [selectedAction, setSelectedAction] = React.useState<{ type: string; id: string } | null>(null)

    React.useEffect(() => {
        fetchElections();
    }, []);

    const fetchElections = async () => {
        try {
            const response = await fetch('/api/admin/elections');
            const result = await response.json();
            if (result.success) {
                // Map backend data to frontend model if necessary, or ensure backend matches
                // Backend returns: id, name, startDate, endDate, status, votersCount (added in service)
                // Frontend expects: id, name, status, startDate, endDate, votersCount
                // Dates might need formatting
                const formattedData = result.data.map((e: any) => ({
                    id: e.id,
                    name: e.name,
                    status: e.status === 'NOT_STARTED' ? 'draft' : e.status === 'LIVE' ? 'active' : e.status === 'COMPLETED' ? 'completed' : 'paused',
                    startDate: e.startDate ? new Date(e.startDate).toISOString().split('T')[0] : 'N/A',
                    endDate: e.endDate ? new Date(e.endDate).toISOString().split('T')[0] : 'N/A',
                    votersCount: e.votersCount || 0
                }));
                setData(formattedData);
            }
        } catch (error) {
            console.error("Failed to fetch elections", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = (type: string, id: string) => {
        setSelectedAction({ type, id })
        setIsMultiKeyOpen(true)
    }

    const confirmAction = async () => {
        console.log("Action confirmed:", selectedAction)
        // Implement actual logic here
        // For example call stop election API
        if (selectedAction?.type === "Stop Election") {
            // Logic to stop election would go here, likely needing another modal for keys if not handled by MultiKeyModal
        }
        setIsMultiKeyOpen(false)
        fetchElections(); // Refresh data
    }

    const columns: ColumnDef<Election>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.getValue("status") as string
                return (
                    <Badge variant={status === "active" ? "default" : status === "draft" ? "secondary" : "outline"}>
                        {status}
                    </Badge>
                )
            },
        },
        {
            accessorKey: "startDate",
            header: "Start Date",
            cell: ({ row }) => <div>{row.getValue("startDate")}</div>,
        },
        {
            accessorKey: "endDate",
            header: "End Date",
            cell: ({ row }) => <div>{row.getValue("endDate")}</div>,
        },
        {
            accessorKey: "votersCount",
            header: "Voters",
            cell: ({ row }) => <div>{row.getValue("votersCount")}</div>,
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const election = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(election.id)}
                            >
                                Copy election ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit details</DropdownMenuItem>
                            <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => handleAction("Stop Election", election.id)}
                            >
                                Stop Election (Multi-Key)
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4 justify-between">
                <Input
                    placeholder="Filter elections..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <CreateElectionDialog onElectionCreated={fetchElections}>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Create Election
                    </Button>
                </CreateElectionDialog>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    {loading ? "Loading..." : "No results."}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>

            <MultiKeyModal
                isOpen={isMultiKeyOpen}
                onClose={() => setIsMultiKeyOpen(false)}
                onConfirm={confirmAction}
                action={selectedAction?.type || ""}
            />
        </div>
    )
}
