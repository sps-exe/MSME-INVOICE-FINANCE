import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { getInvoices, createInvoice } from '../api/invoices';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';

const Dashboard = () => {
    const { logout } = useAuth();
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('');

    // Form state
    const [form, setForm] = useState({
        invoice_number: '',
        buyer_name: '',
        amount: ''
    });

    const fetchInvoices = async () => {
        try {
            const data = await getInvoices();
            setInvoices(data);
        } catch (err) {
            setError('Failed to load invoices');
            if (err.response?.status === 401) logout();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInvoices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await createInvoice({
                ...form,
                amount: parseFloat(form.amount)
            });
            setForm({ invoice_number: '', buyer_name: '', amount: '' });
            fetchInvoices(); // Refresh list
        } catch (err) {
            alert('Failed to create invoice');
        }
    };

    return (
        <Layout>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-serif text-white">Dashboard</h1>
                <button onClick={logout} className="text-gray-400 hover:text-white transition-colors">Logout</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Create Invoice Form */}
                <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit sticky top-24">
                    <h2 className="text-xl text-white font-serif mb-6 flex items-center gap-2">
                        <span className="bg-msme-accent/20 text-msme-accent p-1 rounded-md text-sm">PRO</span>
                        Create Invoice
                    </h2>
                    <form onSubmit={handleCreate} className="flex flex-col gap-4">
                        <div>
                            <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Invoice Number</label>
                            <input
                                placeholder="e.g. INV-001"
                                required
                                disabled={loading}
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-msme-accent transition-all placeholder:text-white/20 disabled:opacity-50"
                                value={form.invoice_number}
                                onChange={e => setForm({ ...form, invoice_number: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Buyer Name</label>
                            <input
                                placeholder="Client Company Ltd."
                                required
                                disabled={loading}
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-msme-accent transition-all placeholder:text-white/20 disabled:opacity-50"
                                value={form.buyer_name}
                                onChange={e => setForm({ ...form, buyer_name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Amount ($)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                required
                                disabled={loading}
                                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-msme-accent transition-all placeholder:text-white/20 disabled:opacity-50 font-mono"
                                value={form.amount}
                                onChange={e => setForm({ ...form, amount: e.target.value })}
                            />
                        </div>
                        <div className="mt-2">
                            <InteractiveHoverButton
                                text={loading ? "Creating..." : "Submit Invoice"}
                                type="submit"
                                disabled={loading}
                            />
                        </div>
                    </form>
                </div>

                {/* Invoices List */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl text-white font-semibold mb-6">Recent Invoices</h2>

                    {loading && invoices.length === 0 ? (
                        <div className="text-gray-400 animate-pulse">Loading recent invoices...</div>
                    ) : invoices.length === 0 ? (
                        <div className="bg-white/5 rounded-2xl p-12 text-center text-gray-400 border border-dashed border-white/10 flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-2xl">📄</div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">No invoices yet</h3>
                                <p className="text-sm opacity-60 max-w-xs mx-auto mt-1">Create your first invoice using the form to start getting financed.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {invoices.map((inv) => (
                                <div key={inv.id} className="bg-white/5 border border-white/5 hover:border-white/20 rounded-2xl p-5 flex justify-between items-center transition-all">
                                    <div>
                                        <div className="text-white font-semibold text-lg">{inv.invoice_number}</div>
                                        <div className="text-gray-400 text-sm">{inv.buyer_name}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-mono text-white">${inv.amount.toLocaleString()}</div>
                                        <div className={`text-xs font-bold px-2 py-1 rounded-full inline-block mt-1 ${inv.status === 'APPROVED' ? 'bg-green-500/20 text-green-400' :
                                            inv.status === 'REJECTED' ? 'bg-red-500/20 text-red-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                            }`}>
                                            {inv.status}
                                        </div>
                                        {inv.risk_score !== null && (
                                            <div className="text-xs text-gray-500 mt-1">Risk: {inv.risk_score}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
