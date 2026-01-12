import api from './axios';

export const getInvoices = async () => {
    const response = await api.get('/invoices/');
    return response.data;
};

export const createInvoice = async (invoiceData) => {
    const response = await api.post('/invoices/', invoiceData);
    return response.data;
};

export const getInvoiceById = async (id) => {
    const response = await api.get(`/invoices/${id}`);
    return response.data;
};
