import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { getSubmittedInvoices, submitDecision } from '../api/admin';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';

const AdminDashboard = () => {
    const { logout } = useAuth();
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(null);

    // Decision State
    const [decisionNote, setDecisionNote] = useState('');
    const [riskScoreOverride, setRiskScoreOverride] = useState('');

    const fetchInvoices = async () => {
        try {
            const data = await getSubmittedInvoices();
            setInvoices(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInvoices();
    }, []);

    const handleDecision = async (invoiceId, decision) => {
        setActionLoading(invoiceId);
        try {
            await submitDecision(invoiceId, decision, riskScoreOverride, decisionNote);
            // Optimistic update
            setInvoices(invoices.filter(inv => inv.id !== invoiceId));
            setDecisionNote('');
            setRiskScoreOverride('');
        } catch (err) {
            alert("Failed to submit decision: " + (err.response?.data?.detail || err.message));
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <Layout>
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                <div>
                    <span className="text-msme-accent font-mono text-sm tracking-widest uppercase">Underwriting Console</span>
                    <h1 className="text-4xl font-serif text-white mt-1">Review Queue</h1>
                </div>
                <button onClick={logout} className="text-gray-400 hover:text-white transition-colors">Logout</button>
            </div>

            {loading ? (
                <div className="text-gray-400">Loading queue...</div>
            ) : invoices.length === 0 ? (
                <div className="bg-white/5 rounded-2xl p-16 text-center text-gray-400 border border-dashed border-white/10 flex flex-col items-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <div className="text-xl font-medium text-white mb-1">Queue is Empty</div>
                    <div className="text-sm opacity-60">No pending invoices require your attention.</div>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    {invoices.map((inv) => (
                        <div key={inv.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:bg-white/[0.07] transition-all">

                            {/* Invoice Details */}
                            <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Invoice #</div>
                                    <div className="text-white font-mono text-lg">{inv.invoice_number}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Buyer</div>
                                    <div className="text-white text-lg">{inv.buyer_name}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Amount</div>
                                    <div className="text-white font-mono text-lg">${inv.amount.toLocaleString()}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Risk Score</div>
                                    <div className={`text-lg font-bold ${inv.risk_score > 70 ? 'text-red-400' : inv.risk_score > 30 ? 'text-yellow-400' : 'text-green-400'}`}>
                                        {inv.risk_score}
                                    </div>
                                </div>
                            </div>

                            {/* Actions Panel */}
                            <div className="md:w-1/3 flex flex-col gap-3 bg-black/20 p-4 rounded-xl border border-white/5">
                                <textarea
                                    className="w-full bg-transparent text-white text-sm border-b border-white/10 focus:border-msme-accent outline-none p-1 placeholder:text-gray-600 resize-none h-16"
                                    placeholder="Add decision note..."
                                    value={decisionNote}
                                    onChange={(e) => setDecisionNote(e.target.value)}
                                />
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        className="w-20 bg-white/5 border border-white/10 rounded-lg px-2 text-white text-sm focus:border-msme-accent outline-none"
                                        placeholder="Score"
                                        title="Override Risk Score"
                                        value={riskScoreOverride}
                                        onChange={(e) => setRiskScoreOverride(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleDecision(inv.id, 'APPROVED')}
                                        disabled={!!actionLoading}
                                        className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm font-semibold py-2 rounded-lg transition-colors border border-green-500/20"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleDecision(inv.id, 'REJECTED')}
                                        disabled={!!actionLoading}
                                        className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm font-semibold py-2 rounded-lg transition-colors border border-red-500/20"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
};

export default AdminDashboard;
