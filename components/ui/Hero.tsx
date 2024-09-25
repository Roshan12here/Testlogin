"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Wallet, BanknoteIcon, Plus, Menu , UserIcon ,  X} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import LogoutButton from "@/components/auth/logout-button";



export default function Dashboard() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false) // State for sidebar

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-[#0E793C]/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <svg className="h-8 w-auto text-[#0E793C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="cursor-pointer ml-2 text-xl font-bold text-[#0E793C]">PassKash Wallet</span>
            </div>
            
            {/* Mobile Hamburger Icon */}
            <div className="sm:hidden">
              <Button onClick={toggleDrawer} variant="ghost" size="sm" className="text-[#0E793C]">
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {/* Normal Navbar for Larger Screens */}
            <div className="hidden sm:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-[#0E793C]">
                <BanknoteIcon className="h-5 w-5 mr-2" />
                Transactions
              </Button>
              <Button variant="ghost" size="sm" className="text-[#0E793C]">
                <Wallet className="h-5 w-5 mr-2" />
                Connect Wallet
              </Button>
              <Link href={"/new-wallet"}>
              <Button variant="ghost" size="sm" className="text-[#0E793C]">
                <Plus className="h-5 w-5 mr-2" />
                Create new Wallet
              </Button>
              </Link>

              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Drawer for Small Devices */}
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed inset-0 z-50 bg-white shadow-lg sm:hidden"
        >
          <div className="p-4">
            <div className="flex justify-end">
              <Button onClick={toggleDrawer} variant="ghost" size="sm" className="text-[#0E793C]">
              <X className="h-8 w-8 mr-2" />
              </Button>
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              <Button variant="ghost" size="sm" className="text-[#0E793C]">
                <BanknoteIcon className="h-5 w-5 mr-2" />
                Transactions
              </Button>
              <Button variant="ghost" size="sm" className="text-[#0E793C]">
                <Wallet className="h-5 w-5 mr-2" />
                Connect Wallet
              </Button>
              <Button onClick={() => router.push("/new-wallet")} variant="ghost" size="sm" className="text-[#0E793C]">
                <Plus className="h-5 w-5 mr-2" />
                Create new Wallet
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0E793C] mb-6">BNB Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-[#0E793C] to-[#1A8D4A] text-white">
            <CardHeader>
              <CardTitle>BNB Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">123.45 BNB</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-1 border border-[#0E793C]/20">
            <CardHeader>
              <CardTitle className="text-[#0E793C]">Token Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Token A:</span>
                  <span className="font-semibold text-[#0E793C] bg-[#0E793C]/10 px-2 py-1 rounded">1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Token B:</span>
                  <span className="font-semibold text-[#0E793C] bg-[#0E793C]/10 px-2 py-1 rounded">5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Token C:</span>
                  <span className="font-semibold text-[#0E793C] bg-[#0E793C]/10 px-2 py-1 rounded">10,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6 border border-[#0E793C]/20">
          <CardHeader>
            <CardTitle className="text-[#0E793C]">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#0E793C]">Type</TableHead>
                    <TableHead className="text-[#0E793C]">Amount</TableHead>
                    <TableHead className="text-[#0E793C]">Date</TableHead>
                    <TableHead className="text-right text-[#0E793C]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow
                      onClick={() => router.push("http://etherscan.io/token")}
                      key={index}
                      className="hover:bg-[#0E793C]/5 cursor-pointer"
                    >
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>{transaction.amount} BNB</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : transaction.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


const transactions = [
  { type: 'Withdraw', amount: 5.2, date: '2023-06-01', status: 'Completed' },
  { type: 'Deposit', amount: 10.0, date: '2023-05-30', status: 'Completed' },
  { type: 'Withdraw', amount: 2.5, date: '2023-05-29', status: 'Pending' },
  { type: 'Deposit', amount: 1.8, date: '2023-05-28', status: 'Failed' },
  { type: 'Withdraw', amount: 7.3, date: '2023-05-27', status: 'Completed' },
]