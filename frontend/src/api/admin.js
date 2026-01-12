import api from './axios';

export const getSubmittedInvoices = async () => {
    const response = await api.get('/admin/invoices?status=SUBMITTED');
    return response.data;
};

export const submitDecision = async (invoiceId, decision, riskScore, note) => {
    const response = await api.patch(`/admin/invoices/${invoiceId}/decision`, {
        decision,
        risk_score: riskScore ? parseFloat(riskScore) : null,
        decision_note: note
    });
    return response.data;
};
