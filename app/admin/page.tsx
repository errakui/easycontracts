"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Users, FileText, Crown, 
  Search, ChevronLeft, ChevronRight,
  Ban, Euro, Shield, Home, LogOut, Loader2, RefreshCw
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  contractsUsed: number;
  contractsLimit: number;
  createdAt: string;
}

interface Stats {
  totalUsers: number;
  totalContracts: number;
  revenue: number;
  activeSubscriptions: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, totalContracts: 0, revenue: 0, activeSubscriptions: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPlan, setFilterPlan] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const usersPerPage = 10;

  useEffect(() => {
    checkAdminAccess();
    loadData();
  }, []);

  const checkAdminAccess = async () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) { router.push("/login"); return false; }
    const user = JSON.parse(userStr);
    const adminEmails = ["admin@easycontracts.ai", "errakui@gmail.com", process.env.NEXT_PUBLIC_ADMIN_EMAIL];
    if (!adminEmails.includes(user.email)) { 
      alert("Accesso non autorizzato");
      router.push("/dashboard"); 
      return false; 
    }
    return true;
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
        setStats(data.stats || stats);
      } else {
        setUsers([
          { id: "1", name: "Mario Rossi", email: "mario@example.com", plan: "PRO", contractsUsed: 5, contractsLimit: 10, createdAt: new Date().toISOString() },
          { id: "2", name: "Laura Bianchi", email: "laura@example.com", plan: "FREE", contractsUsed: 1, contractsLimit: 1, createdAt: new Date().toISOString() },
        ]);
        setStats({ totalUsers: 2, totalContracts: 6, revenue: 19, activeSubscriptions: 1 });
      }
    } catch (error) { console.error(error); }
    finally { setLoading(false); }
  };

  const handleChangePlan = async (userId: string, newPlan: string) => {
    setActionLoading(userId);
    try {
      await fetch("/api/admin/users/update-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, plan: newPlan }),
      });
      setUsers(users.map(u => u.id === userId ? { ...u, plan: newPlan } : u));
    } catch (error) { console.error(error); }
    finally { setActionLoading(null); }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Eliminare questo utente?")) return;
    setActionLoading(userId);
    try {
      await fetch(`/api/admin/users/${userId}`, { method: "DELETE" });
      setUsers(users.filter(u => u.id !== userId));
    } catch (error) { console.error(error); }
    finally { setActionLoading(null); }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlan = filterPlan === "all" || user.plan === filterPlan;
    return matchesSearch && matchesPlan;
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030014]">
        <Loader2 className="w-12 h-12 text-violet-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white/5 border-r border-white/10 p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-white font-bold">Admin Panel</span>
            <p className="text-xs text-gray-500">easycontracts</p>
          </div>
        </div>

        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-500/20 text-violet-400 font-medium">
            <Users className="w-5 h-5" /> Utenti
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-white/5 transition-colors">
            <Home className="w-5 h-5" /> Torna al Sito
          </Link>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button 
            onClick={() => { localStorage.removeItem("user"); router.push("/login"); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Esci
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-64 p-6 lg:p-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-black text-white mb-2">Gestione Utenti</h1>
            <p className="text-gray-500">Monitora e gestisci la piattaforma</p>
          </div>
          <button onClick={loadData} className="btn-secondary">
            <RefreshCw className="w-4 h-4 mr-2" /> Aggiorna
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <Users className="w-6 h-6 text-violet-400 mb-4" />
            <p className="text-3xl font-black text-white">{stats.totalUsers}</p>
            <p className="text-gray-500 text-sm">Utenti</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <FileText className="w-6 h-6 text-cyan-400 mb-4" />
            <p className="text-3xl font-black text-white">{stats.totalContracts}</p>
            <p className="text-gray-500 text-sm">Contratti</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <Euro className="w-6 h-6 text-green-400 mb-4" />
            <p className="text-3xl font-black text-white">€{stats.revenue}</p>
            <p className="text-gray-500 text-sm">Revenue</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <Crown className="w-6 h-6 text-amber-400 mb-4" />
            <p className="text-3xl font-black text-white">{stats.activeSubscriptions}</p>
            <p className="text-gray-500 text-sm">Abbonati</p>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 rounded-3xl bg-white/5 border border-white/10 mb-6 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input type="text" placeholder="Cerca..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input-dark pl-12 w-full" />
          </div>
          <select value={filterPlan} onChange={(e) => setFilterPlan(e.target.value)} className="input-dark w-full lg:w-48">
            <option value="all">Tutti</option>
            <option value="FREE">Free</option>
            <option value="PRO">Pro</option>
            <option value="BUSINESS">Business</option>
          </select>
        </div>

        {/* Table */}
        <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left px-6 py-4 text-gray-500 font-medium text-sm">Utente</th>
                <th className="text-left px-6 py-4 text-gray-500 font-medium text-sm">Piano</th>
                <th className="text-left px-6 py-4 text-gray-500 font-medium text-sm">Contratti</th>
                <th className="text-left px-6 py-4 text-gray-500 font-medium text-sm">Data</th>
                <th className="text-right px-6 py-4 text-gray-500 font-medium text-sm">Azioni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                        {user.name?.[0]?.toUpperCase() || user.email[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name || "N/A"}</p>
                        <p className="text-gray-500 text-sm">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.plan === "BUSINESS" ? "bg-purple-500/20 text-purple-400" :
                      user.plan === "PRO" ? "bg-violet-500/20 text-violet-400" :
                      "bg-gray-500/20 text-gray-400"
                    }`}>{user.plan}</span>
                  </td>
                  <td className="px-6 py-4 text-white">
                    {user.contractsUsed}/{user.contractsLimit === -1 ? '∞' : user.contractsLimit}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString("it-IT")}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <select
                        value={user.plan}
                        onChange={(e) => handleChangePlan(user.id, e.target.value)}
                        disabled={actionLoading === user.id}
                        className="input-dark py-2 px-3 text-sm"
                      >
                        <option value="FREE">Free</option>
                        <option value="PRO">Pro</option>
                        <option value="BUSINESS">Business</option>
                      </select>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={actionLoading === user.id}
                        className="p-2 rounded-lg hover:bg-red-500/10 text-gray-500 hover:text-red-400 transition-colors"
                      >
                        {actionLoading === user.id ? <Loader2 className="w-5 h-5 animate-spin" /> : <Ban className="w-5 h-5" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
              <p className="text-gray-500 text-sm">{filteredUsers.length} utenti</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-2 rounded-lg hover:bg-white/5 text-gray-500 disabled:opacity-50">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-500 px-4">{currentPage}/{totalPages}</span>
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg hover:bg-white/5 text-gray-500 disabled:opacity-50">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
