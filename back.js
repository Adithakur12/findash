const { useState, useEffect, useMemo, useRef } = React;

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const initialTransactions = [
    { id: 1, date: '2025-01-05', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 5200 },
    { id: 2, date: '2025-01-07', description: 'Grocery Store', category: 'Food', type: 'expense', amount: 156.30 },
    { id: 3, date: '2025-01-10', description: 'Electric Bill', category: 'Bills', type: 'expense', amount: 89.50 },
    { id: 4, date: '2025-01-12', description: 'Freelance Project', category: 'Freelance', type: 'income', amount: 1200 },
    { id: 5, date: '2025-01-15', description: 'Netflix Subscription', category: 'Entertainment', type: 'expense', amount: 15.99 },
    { id: 6, date: '2025-01-18', description: 'Gas Station', category: 'Transport', type: 'expense', amount: 45.00 },
    { id: 7, date: '2025-01-20', description: 'New Shoes', category: 'Shopping', type: 'expense', amount: 129.99 },
    { id: 8, date: '2025-01-22', description: 'Dentist Visit', category: 'Health', type: 'expense', amount: 200.00 },
    { id: 9, date: '2025-01-25', description: 'Online Course', category: 'Education', type: 'expense', amount: 49.99 },
    { id: 10, date: '2025-01-28', description: 'Restaurant Dinner', category: 'Food', type: 'expense', amount: 78.50 },
    { id: 11, date: '2025-02-05', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 5200 },
    { id: 12, date: '2025-02-08', description: 'Grocery Shopping', category: 'Food', type: 'expense', amount: 189.20 },
    { id: 13, date: '2025-02-10', description: 'Internet Bill', category: 'Bills', type: 'expense', amount: 59.99 },
    { id: 14, date: '2025-02-12', description: 'Side Gig Payment', category: 'Freelance', type: 'income', amount: 800 },
    { id: 15, date: '2025-02-14', description: 'Valentine Dinner', category: 'Food', type: 'expense', amount: 120.00 },
    { id: 16, date: '2025-02-16', description: 'Uber Rides', category: 'Transport', type: 'expense', amount: 32.50 },
    { id: 17, date: '2025-02-20', description: 'Gym Membership', category: 'Health', type: 'expense', amount: 45.00 },
    { id: 18, date: '2025-02-25', description: 'Book Purchase', category: 'Education', type: 'expense', amount: 24.99 },
    { id: 19, date: '2025-03-05', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 5400 },
    { id: 20, date: '2025-03-08', description: 'Grocery Store', category: 'Food', type: 'expense', amount: 145.80 },
    { id: 21, date: '2025-03-10', description: 'Water Bill', category: 'Bills', type: 'expense', amount: 35.00 },
    { id: 22, date: '2025-03-12', description: 'Consulting Fee', category: 'Freelance', type: 'income', amount: 1500 },
    { id: 23, date: '2025-03-15', description: 'Movie Tickets', category: 'Entertainment', type: 'expense', amount: 28.00 },
    { id: 24, date: '2025-03-18', description: 'Car Service', category: 'Transport', type: 'expense', amount: 180.00 },
    { id: 25, date: '2025-03-20', description: 'Clothing Store', category: 'Shopping', type: 'expense', amount: 210.50 },
    { id: 26, date: '2025-03-22', description: 'Pharmacy', category: 'Health', type: 'expense', amount: 42.30 },
    { id: 27, date: '2025-03-25', description: 'Investment Return', category: 'Investment', type: 'income', amount: 350 },
    { id: 28, date: '2025-03-28', description: 'Coffee Shop', category: 'Food', type: 'expense', amount: 18.50 },
    { id: 29, date: '2025-04-01', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 5400 },
    { id: 30, date: '2025-04-03', description: 'Amazon Purchase', category: 'Shopping', type: 'expense', amount: 67.89 },
    { id: 31, date: '2025-04-05', description: 'Phone Bill', category: 'Bills', type: 'expense', amount: 75.00 },
    { id: 32, date: '2025-04-08', description: 'Freelance Work', category: 'Freelance', type: 'income', amount: 950 },
    { id: 33, date: '2025-04-10', description: 'Supermarket', category: 'Food', type: 'expense', amount: 203.40 },
    { id: 34, date: '2025-04-12', description: 'Concert Tickets', category: 'Entertainment', type: 'expense', amount: 85.00 },
    { id: 35, date: '2025-04-15', description: 'Parking Fee', category: 'Transport', type: 'expense', amount: 15.00 },
    { id: 36, date: '2025-05-05', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 5500 },
    { id: 37, date: '2025-05-08', description: 'Groceries', category: 'Food', type: 'expense', amount: 175.60 },
    { id: 38, date: '2025-05-10', description: 'Electricity', category: 'Bills', type: 'expense', amount: 95.00 },
    { id: 39, date: '2025-05-12', description: 'Side Project', category: 'Freelance', type: 'income', amount: 1100 },
    { id: 40, date: '2025-05-15', description: 'Spotify Premium', category: 'Entertainment', type: 'expense', amount: 9.99 },
    { id: 41, date: '2025-06-05', description: 'Monthly Salary', category: 'Salary', type: 'income', amount: 5500 },
    { id: 42, date: '2025-06-08', description: 'Farmers Market', category: 'Food', type: 'expense', amount: 92.30 },
    { id: 43, date: '2025-06-10', description: 'Gas Bill', category: 'Bills', type: 'expense', amount: 48.00 },
    { id: 44, date: '2025-06-12', description: 'Design Work', category: 'Freelance', type: 'income', amount: 750 },
    { id: 45, date: '2025-06-15', description: 'Gaming Purchase', category: 'Entertainment', type: 'expense', amount: 59.99 },
];

const defaultTransaction = { description: '', amount: '', date: new Date().toISOString().split('T')[0], type: 'expense', category: 'Food' };

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getChartColors(theme) {
    const isDark = theme === 'dark';
    return {
        gridColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        textColor: isDark ? '#94a3b8' : '#6b7280',
        tooltipBg: isDark ? '#334155' : '#1e293b',
    };
}

function App() {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [role, setRole] = useState('admin');
    const [theme, setTheme] = useState('light');
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [filters, setFilters] = useState({ search: '', type: 'all', category: 'all', month: 'all' });
    const [sortState, setSortState] = useState({ field: 'date', direction: 'desc' });
    const [pagination, setPagination] = useState({ page: 1, perPage: 10 });
    const [modalOpen, setModalOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [formState, setFormState] = useState(defaultTransaction);
    const [toasts, setToasts] = useState([]);

    const balanceTrendCanvas = useRef(null);
    const spendingCanvas = useRef(null);
    const monthlyComparisonCanvas = useRef(null);
    const incomeExpenseCanvas = useRef(null);
    const balanceTrendChartRef = useRef(null);
    const spendingChartRef = useRef(null);
    const monthlyComparisonChartRef = useRef(null);
    const incomeExpenseChartRef = useRef(null);

    const categories = useMemo(() => {
        const set = new Set(transactions.map((t) => t.category));
        return ['all', ...Array.from(set).sort()];
    }, [transactions]);

    useEffect(() => {
        const saved = localStorage.getItem('finDashState');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setTransactions(parsed.transactions?.length ? parsed.transactions : initialTransactions);
                setRole(parsed.role || 'admin');
                setTheme(parsed.theme || 'light');
            } catch (error) {
                console.warn('Could not parse saved state', error);
            }
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('finDashState', JSON.stringify({ transactions, role, theme }));
    }, [transactions, role, theme]);

    useEffect(() => {
        renderCharts();
    }, [transactions, theme, currentPage]);

    function showToast(message, type = 'info') {
        const id = Math.random().toString(36).slice(2);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    }

    function getFinancialSummary() {
        const totalIncome = transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
        const totalExpenses = transactions.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
        const balance = totalIncome - totalExpenses;
        const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;
        return { totalIncome, totalExpenses, balance, savingsRate };
    }

    function getFilteredTransactions() {
        let filtered = [...transactions];
        const query = filters.search.trim().toLowerCase();

        if (query) {
            filtered = filtered.filter((t) =>
                t.description.toLowerCase().includes(query) || t.category.toLowerCase().includes(query)
            );
        }

        if (filters.type !== 'all') {
            filtered = filtered.filter((t) => t.type === filters.type);
        }

        if (filters.category !== 'all') {
            filtered = filtered.filter((t) => t.category === filters.category);
        }

        if (filters.month !== 'all') {
            const month = parseInt(filters.month, 10);
            filtered = filtered.filter((t) => new Date(t.date).getMonth() === month);
        }

        filtered.sort((a, b) => {
            let valueA = a[sortState.field];
            let valueB = b[sortState.field];

            if (sortState.field === 'date') {
                valueA = new Date(a.date);
                valueB = new Date(b.date);
            }

            if (typeof valueA === 'string') {
                valueA = valueA.toLowerCase();
                valueB = valueB.toLowerCase();
            }

            if (valueA < valueB) return sortState.direction === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortState.direction === 'asc' ? 1 : -1;
            return 0;
        });

        return filtered;
    }

    function handleFilterChange(event) {
        const { name, value } = event.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
        setPagination((prev) => ({ ...prev, page: 1 }));
    }

    function sortTable(field) {
        setSortState((prev) => ({
            field,
            direction: prev.field === field ? (prev.direction === 'asc' ? 'desc' : 'asc') : 'asc'
        }));
    }

    function openModal(id = null) {
        if (role !== 'admin') {
            showToast('Only admins can add or edit transactions', 'error');
            return;
        }

        if (id !== null) {
            const transaction = transactions.find((t) => t.id === id);
            if (transaction) {
                setEditId(id);
                setFormState({
                    description: transaction.description,
                    amount: transaction.amount.toString(),
                    date: transaction.date,
                    type: transaction.type,
                    category: transaction.category
                });
            }
        } else {
            setEditId(null);
            setFormState(defaultTransaction);
        }

        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function saveTransaction(event) {
        event.preventDefault();
        const amount = parseFloat(formState.amount);

        if (!formState.description.trim()) {
            showToast('Please enter a description', 'error');
            return;
        }
        if (!formState.date) {
            showToast('Please select a date', 'error');
            return;
        }
        if (Number.isNaN(amount) || amount <= 0) {
            showToast('Please enter a positive amount', 'error');
            return;
        }

        if (editId !== null) {
            setTransactions((prev) =>
                prev.map((t) =>
                    t.id === editId
                        ? { ...t, description: formState.description.trim(), amount, date: formState.date, type: formState.type, category: formState.category }
                        : t
                )
            );
            showToast('Transaction updated successfully', 'success');
        } else {
            const nextId = transactions.length ? Math.max(...transactions.map((t) => t.id)) + 1 : 1;
            setTransactions((prev) => [
                ...prev,
                {
                    id: nextId,
                    description: formState.description.trim(),
                    amount,
                    date: formState.date,
                    type: formState.type,
                    category: formState.category
                }
            ]);
            showToast('Transaction added successfully', 'success');
        }

        setModalOpen(false);
        setPagination((prev) => ({ ...prev, page: 1 }));
    }

    function deleteTransaction(id) {
        if (!window.confirm('Are you sure you want to delete this transaction?')) return;
        setTransactions((prev) => prev.filter((t) => t.id !== id));
        showToast('Transaction deleted', 'success');
    }

    function toggleTheme() {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    function switchRole(targetRole) {
        setRole(targetRole);
        showToast(`Switched to ${targetRole} role`, 'info');
    }

    function navigate(page) {
        setCurrentPage(page);
        setSidebarOpen(false);
    }

    function getPaginatedTransactions(filtered) {
        const totalPages = Math.max(1, Math.ceil(filtered.length / pagination.perPage));
        const page = Math.min(pagination.page, totalPages);
        const start = (page - 1) * pagination.perPage;
        const end = start + pagination.perPage;
        return { pageData: filtered.slice(start, end), totalPages, page };
    }

    function renderCharts() {
        renderBalanceTrendChart();
        renderSpendingChart();
        if (currentPage === 'insights') {
            renderMonthlyComparisonChart();
            renderIncomeExpenseTrendChart();
        }
    }

    function renderBalanceTrendChart() {
        if (!balanceTrendCanvas.current) return;
        const ctx = balanceTrendCanvas.current.getContext('2d');
        const colors = getChartColors(theme);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        let runningBalance = 0;
        const balances = months.map((_, i) => {
            const monthTransactions = transactions.filter((t) => new Date(t.date).getMonth() === i && new Date(t.date).getFullYear() === 2025);
            monthTransactions.forEach((t) => {
                runningBalance += t.type === 'income' ? t.amount : -t.amount;
            });
            return runningBalance;
        });

        if (balanceTrendChartRef.current) {
            balanceTrendChartRef.current.destroy();
        }

        balanceTrendChartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    {
                        label: 'Balance',
                        data: balances,
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79, 70, 229, 0.12)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#4f46e5',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        bodyColor: '#fff',
                        callbacks: {
                            label: (ctx) => `Balance: ${formatCurrency(ctx.raw)}`
                        }
                    }
                },
                scales: {
                    x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
                    y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor, callback: (value) => `$${(value / 1000).toFixed(0)}k` } }
                }
            }
        });
    }

    function renderSpendingChart() {
        if (!spendingCanvas.current) return;
        const ctx = spendingCanvas.current.getContext('2d');
        const colors = getChartColors(theme);
        const expenses = transactions.filter((t) => t.type === 'expense');
        const totals = expenses.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {});
        const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);
        const labels = entries.map(([name]) => name);
        const data = entries.map(([, value]) => value);
        const palette = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f97316', '#ec4899'];

        if (spendingChartRef.current) {
            spendingChartRef.current.destroy();
        }

        spendingChartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels,
                datasets: [{ data, backgroundColor: palette.slice(0, labels.length), hoverOffset: 8 }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: colors.textColor, font: { size: 11 }, usePointStyle: true, pointStyleWidth: 8 }
                    },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        callbacks: {
                            label: (ctx) => `${ctx.label}: ${formatCurrency(ctx.raw)}`
                        }
                    }
                }
            }
        });
    }

    function renderMonthlyComparisonChart() {
        if (!monthlyComparisonCanvas.current) return;
        const ctx = monthlyComparisonCanvas.current.getContext('2d');
        const colors = getChartColors(theme);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

        const incomeData = months.map((_, index) =>
            transactions.filter((t) => t.type === 'income' && new Date(t.date).getMonth() === index).reduce((sum, t) => sum + t.amount, 0)
        );
        const expenseData = months.map((_, index) =>
            transactions.filter((t) => t.type === 'expense' && new Date(t.date).getMonth() === index).reduce((sum, t) => sum + t.amount, 0)
        );

        if (monthlyComparisonChartRef.current) monthlyComparisonChartRef.current.destroy();

        monthlyComparisonChartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [
                    { label: 'Income', data: incomeData, backgroundColor: '#10b981', borderRadius: 6, barPercentage: 0.6 },
                    { label: 'Expense', data: expenseData, backgroundColor: '#ef4444', borderRadius: 6, barPercentage: 0.6 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: colors.textColor, font: { size: 11 }, usePointStyle: true } },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` }
                    }
                },
                scales: {
                    x: { grid: { display: false }, ticks: { color: colors.textColor } },
                    y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor, callback: (value) => `$${(value / 1000).toFixed(0)}k` } }
                }
            }
        });
    }

    function renderIncomeExpenseTrendChart() {
        if (!incomeExpenseCanvas.current) return;
        const ctx = incomeExpenseCanvas.current.getContext('2d');
        const colors = getChartColors(theme);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

        const incomeData = months.map((_, index) =>
            transactions.filter((t) => t.type === 'income' && new Date(t.date).getMonth() === index).reduce((sum, t) => sum + t.amount, 0)
        );
        const expenseData = months.map((_, index) =>
            transactions.filter((t) => t.type === 'expense' && new Date(t.date).getMonth() === index).reduce((sum, t) => sum + t.amount, 0)
        );

        if (incomeExpenseChartRef.current) incomeExpenseChartRef.current.destroy();

        incomeExpenseChartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: months,
                datasets: [
                    { label: 'Income', data: incomeData, borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', borderWidth: 2, fill: true, tension: 0.4, pointRadius: 4 },
                    { label: 'Expenses', data: expenseData, borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.1)', borderWidth: 2, fill: true, tension: 0.4, pointRadius: 4 }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: colors.textColor, usePointStyle: true } },
                    tooltip: { backgroundColor: colors.tooltipBg, callbacks: { label: (ctx) => `${ctx.dataset.label}: ${formatCurrency(ctx.raw)}` } }
                },
                scales: {
                    x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
                    y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor, callback: (value) => `$${(value / 1000).toFixed(1)}k` } }
                }
            }
        });
    }

    const filteredTransactions = useMemo(() => getFilteredTransactions(), [transactions, filters, sortState]);
    const { pageData, totalPages, page } = useMemo(() => getPaginatedTransactions(filteredTransactions), [filteredTransactions, pagination.page, pagination.perPage]);
    const { totalIncome, totalExpenses, balance, savingsRate } = useMemo(() => getFinancialSummary(), [transactions]);

    return (
        <div className="app-container">
            <aside className={`sidebar ${sidebarOpen ? 'mobile-open' : ''}`} id="sidebar">
                <div className="sidebar-logo">
                    <div className="logo-icon">F</div>
                    <div>
                        <h1>FinDash</h1>
                        <span>Finance Dashboard</span>
                    </div>
                </div>

                <div className="nav-section">
                    <div className="nav-section-title">Menu</div>
                    {['dashboard', 'transactions', 'insights'].map((pageKey) => (
                        <div
                            key={pageKey}
                            className={`nav-item ${currentPage === pageKey ? 'active' : ''}`}
                            onClick={() => navigate(pageKey)}
                        >
                            <span>{pageKey.charAt(0).toUpperCase() + pageKey.slice(1)}</span>
                        </div>
                    ))}
                </div>

                <div className="sidebar-footer">
                    <div className="nav-section-title">Role</div>
                    <div style={{ padding: '0 12px' }}>
                        <div className={`role-indicator ${role}`}>{role.charAt(0).toUpperCase() + role.slice(1)}</div>
                    </div>
                </div>
            </aside>

            {sidebarOpen && <div className="sidebar-overlay" id="sidebarOverlay" onClick={() => setSidebarOpen(false)}></div>}

            <div className="main-content" id="mainContent">
                <header className="top-bar">
                    <div className="top-bar-left">
                        <button className="menu-toggle" onClick={() => setSidebarOpen((open) => !open)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                        </button>
                        <div className="page-title">
                            <h2>{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}</h2>
                            <p>{
                                currentPage === 'dashboard'
                                    ? "Welcome back! Here's your financial overview."
                                    : currentPage === 'transactions'
                                        ? 'Manage and review all your transactions.'
                                        : 'Smart observations from your financial data.'
                            }</p>
                        </div>
                    </div>
                    <div className="top-bar-right">
                        <div className="role-switcher">
                            <button className={`role-btn ${role === 'admin' ? 'active' : ''}`} onClick={() => switchRole('admin')}>Admin</button>
                            <button className={`role-btn ${role === 'viewer' ? 'active' : ''}`} onClick={() => switchRole('viewer')}>Viewer</button>
                        </div>
                        <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark mode">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {theme === 'dark' ? (
                                    <>
                                        <circle cx="12" cy="12" r="5" />
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                    </>
                                ) : (
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </header>

                <main className="content">
                    <div className="mobile-role-switcher">
                        <div className="role-switcher" style={{ display: 'inline-flex' }}>
                            <button className={`role-btn ${role === 'admin' ? 'active' : ''}`} onClick={() => switchRole('admin')}>Admin</button>
                            <button className={`role-btn ${role === 'viewer' ? 'active' : ''}`} onClick={() => switchRole('viewer')}>Viewer</button>
                        </div>
                    </div>

                    <section className={`page-section ${currentPage === 'dashboard' ? 'active' : ''}`} id="page-dashboard">
                        <div className="summary-grid" id="summaryCards">
                            <div className="summary-card balance">
                                <div className="card-header">
                                    <span className="card-label">Total Balance</span>
                                    <div className="card-icon balance-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                                    </div>
                                </div>
                                <div className="card-value">{formatCurrency(balance)}</div>
                                <div className={`card-change ${balance >= 0 ? 'positive' : 'negative'}`}>{balance >= 0 ? '↑' : '↓'} {Math.abs(savingsRate).toFixed(1)}% savings rate</div>
                            </div>
                            <div className="summary-card income">
                                <div className="card-header">
                                    <span className="card-label">Total Income</span>
                                    <div className="card-icon income-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                                    </div>
                                </div>
                                <div className="card-value">{formatCurrency(totalIncome)}</div>
                                <div className="card-change positive">↑ From all sources</div>
                            </div>
                            <div className="summary-card expense">
                                <div className="card-header">
                                    <span className="card-label">Total Expenses</span>
                                    <div className="card-icon expense-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
                                    </div>
                                </div>
                                <div className="card-value">{formatCurrency(totalExpenses)}</div>
                                <div className="card-change negative">↓ Total spent</div>
                            </div>
                            <div className="summary-card savings">
                                <div className="card-header">
                                    <span className="card-label">Transactions</span>
                                    <div className="card-icon savings-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                                    </div>
                                </div>
                                <div className="card-value">{transactions.length}</div>
                                <div className="card-change positive">Total recorded</div>
                            </div>
                        </div>

                        <div className="chart-grid">
                            <div className="chart-card">
                                <div className="chart-title">Balance Trend</div>
                                <div className="chart-subtitle">Monthly balance over the last 6 months</div>
                                <div className="chart-container">
                                    <canvas id="balanceTrendChart" ref={balanceTrendCanvas}></canvas>
                                </div>
                            </div>
                            <div className="chart-card">
                                <div className="chart-title">Spending Breakdown</div>
                                <div className="chart-subtitle">Expenses by category</div>
                                <div className="chart-container">
                                    <canvas id="spendingChart" ref={spendingCanvas}></canvas>
                                </div>
                            </div>
                        </div>

                        <div className="table-card">
                            <div style={{ padding: '20px 20px 0' }}>
                                <div className="section-header">
                                    <h3>Recent Transactions</h3>
                                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('transactions')}>View All →</button>
                                </div>
                            </div>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Category</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions
                                            .slice()
                                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                                            .slice(0, 5)
                                            .map((t) => (
                                                <tr key={t.id}>
                                                    <td>{formatDate(t.date)}</td>
                                                    <td>{t.description}</td>
                                                    <td><span className="category-badge">{t.category}</span></td>
                                                    <td><span className={`type-badge ${t.type}`}>{t.type.charAt(0).toUpperCase() + t.type.slice(1)}</span></td>
                                                    <td className={t.type === 'income' ? 'amount-positive' : 'amount-negative'}>
                                                        {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className={`page-section ${currentPage === 'transactions' ? 'active' : ''}`} id="page-transactions">
                        <div className="section-header">
                            <h3>All Transactions</h3>
                            <div className="section-actions">
                                <div className="search-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                    <input
                                        type="text"
                                        name="search"
                                        value={filters.search}
                                        onChange={handleFilterChange}
                                        placeholder="Search transactions..."
                                    />
                                </div>
                                <select className="filter-select" name="type" value={filters.type} onChange={handleFilterChange}>
                                    <option value="all">All Types</option>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>
                                <select className="filter-select" name="category" value={filters.category} onChange={handleFilterChange}>
                                    <option value="all">All Categories</option>
                                    {categories.slice(1).map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <select className="filter-select" name="month" value={filters.month} onChange={handleFilterChange}>
                                    <option value="all">All Months</option>
                                    {monthNames.map((month, index) => (
                                        <option key={month} value={index}>{month}</option>
                                    ))}
                                </select>
                                {role === 'admin' && (
                                    <button className="btn btn-primary admin-only" onClick={() => openModal()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                        Add Transaction
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="table-card">
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th onClick={() => sortTable('date')}>Date <span className="sort-icon">↕</span></th>
                                            <th onClick={() => sortTable('description')}>Description <span className="sort-icon">↕</span></th>
                                            <th onClick={() => sortTable('category')}>Category <span className="sort-icon">↕</span></th>
                                            <th onClick={() => sortTable('type')}>Type <span className="sort-icon">↕</span></th>
                                            <th onClick={() => sortTable('amount')}>Amount <span className="sort-icon">↕</span></th>
                                            {role === 'admin' && <th>Actions</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pageData.length === 0 ? (
                                            <tr><td colSpan={role === 'admin' ? 6 : 5}>
                                                <div className="empty-state">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                                                    <h4>No transactions found</h4>
                                                    <p>Try adjusting your filters or add a new transaction.</p>
                                                </div>
                                            </td></tr>
                                        ) : pageData.map((t) => (
                                            <tr key={t.id}>
                                                <td>{formatDate(t.date)}</td>
                                                <td>{t.description}</td>
                                                <td><span className="category-badge">{t.category}</span></td>
                                                <td><span className={`type-badge ${t.type}`}>{t.type.charAt(0).toUpperCase() + t.type.slice(1)}</span></td>
                                                <td className={t.type === 'income' ? 'amount-positive' : 'amount-negative'}>{t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}</td>
                                                {role === 'admin' && (
                                                    <td>
                                                        <div className="action-btns">
                                                            <button className="action-btn" onClick={() => openModal(t.id)} title="Edit">
                                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                                            </button>
                                                            <button className="action-btn delete" onClick={() => deleteTransaction(t.id)} title="Delete">
                                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-footer">
                                <span>Showing {pageData.length === 0 ? 0 : (page - 1) * pagination.perPage + 1}-{Math.min(page * pagination.perPage, filteredTransactions.length)} of {filteredTransactions.length} transactions</span>
                                <div className="pagination">
                                    <button className="page-btn" disabled={page === 1} onClick={() => setPagination((prev) => ({ ...prev, page: prev.page - 1 }))}>‹</button>
                                    {[...Array(totalPages)].map((_, index) => {
                                        const pageNumber = index + 1;
                                        if (pageNumber === 1 || pageNumber === totalPages || Math.abs(pageNumber - page) <= 1) {
                                            return (
                                                <button
                                                    key={pageNumber}
                                                    className={`page-btn ${pageNumber === page ? 'active' : ''}`}
                                                    onClick={() => setPagination((prev) => ({ ...prev, page: pageNumber }))}
                                                >
                                                    {pageNumber}
                                                </button>
                                            );
                                        }
                                        if (Math.abs(pageNumber - page) === 2) {
                                            return <button key={pageNumber} className="page-btn" disabled>…</button>;
                                        }
                                        return null;
                                    })}
                                    <button className="page-btn" disabled={page === totalPages} onClick={() => setPagination((prev) => ({ ...prev, page: prev.page + 1 }))}>›</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`page-section ${currentPage === 'insights' ? 'active' : ''}`} id="page-insights">
                        <div className="insights-grid">
                            <div className="insight-card">
                                <div className="insight-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                                    Spending by Category
                                </div>
                                {(() => {
                                    const expenses = transactions.filter((t) => t.type === 'expense');
                                    const total = expenses.reduce((sum, t) => sum + t.amount, 0);
                                    const categoriesList = Object.entries(expenses.reduce((acc, t) => {
                                        acc[t.category] = (acc[t.category] || 0) + t.amount;
                                        return acc;
                                    }, {})).sort((a, b) => b[1] - a[1]);

                                    if (!categoriesList.length) {
                                        return <div className="empty-state"><p>No expense data available</p></div>;
                                    }

                                    return categoriesList.map(([cat, amount], index) => {
                                        const pct = total > 0 ? (amount / total) * 100 : 0;
                                        const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f97316', '#ec4899'];
                                        return (
                                            <div key={cat} style={{ marginBottom: '12px' }}>
                                                <div className="insight-item">
                                                    <span className="insight-item-label">{cat}</span>
                                                    <span className="insight-item-value">{formatCurrency(amount)} ({pct.toFixed(1)}%)</span>
                                                </div>
                                                <div className="progress-bar">
                                                    <div className="progress-fill" style={{ width: `${pct}%`, background: colors[index % colors.length] }}></div>
                                                </div>
                                            </div>
                                        );
                                    });
                                })()}
                            </div>

                            <div className="insight-card">
                                <div className="insight-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                                    Monthly Comparison
                                </div>
                                <div className="monthly-chart-container">
                                    <canvas ref={monthlyComparisonCanvas}></canvas>
                                </div>
                            </div>

                            <div className="insight-card">
                                <div className="insight-title">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    Key Observations
                                </div>
                                {(() => {
                                    const expenses = transactions.filter((t) => t.type === 'expense');
                                    const totals = expenses.reduce((acc, t) => { acc[t.category] = (acc[t.category] || 0) + t.amount; return acc; }, {});
                                    const topCategory = Object.entries(totals).sort((a, b) => b[1] - a[1])[0];
                                    const avgExpense = expenses.length ? totalExpenses / expenses.length : 0;
                                    const monthCounts = transactions.reduce((acc, t) => {
                                        const month = new Date(t.date).toLocaleString('default', { month: 'long' });
                                        acc[month] = (acc[month] || 0) + 1;
                                        return acc;
                                    }, {});
                                    const busyMonth = Object.entries(monthCounts).sort((a, b) => b[1] - a[1])[0];
                                    const highestExpense = expenses.length ? expenses.reduce((max, t) => (t.amount > max.amount ? t : max), expenses[0]) : null;
                                    const observations = [
                                        { label: '🏆 Highest Spending Category', value: topCategory ? `${topCategory[0]} (${formatCurrency(topCategory[1])})` : 'N/A' },
                                        { label: '💰 Savings Rate', value: `${savingsRate.toFixed(1)}%` },
                                        { label: '📊 Average Expense', value: formatCurrency(avgExpense) },
                                        { label: '📅 Busiest Month', value: busyMonth ? `${busyMonth[0]} (${busyMonth[1]} txns)` : 'N/A' },
                                        { label: '💸 Largest Single Expense', value: highestExpense ? `${highestExpense.description} (${formatCurrency(highestExpense.amount)})` : 'N/A' },
                                        { label: '📈 Income to Expense Ratio', value: totalExpenses > 0 ? `${(totalIncome / totalExpenses).toFixed(2)}x` : 'N/A' }
                                    ];
                                    return observations.map((obs) => (
                                        <div className="insight-item" key={obs.label}>
                                            <span className="insight-item-label">{obs.label}</span>
                                            <span className="insight-item-value">{obs.value}</span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>

                        <div className="chart-card" style={{ marginBottom: 24 }}>
                            <div className="chart-title">Income vs Expense Trend</div>
                            <div className="chart-subtitle">Monthly comparison of income and expenses</div>
                            <div className="chart-container">
                                <canvas ref={incomeExpenseCanvas}></canvas>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {modalOpen && (
                <div className="modal-overlay active" id="modalOverlay" onClick={(event) => event.target === event.currentTarget && closeModal()}>
                    <div className="modal" onClick={(event) => event.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{editId !== null ? 'Edit Transaction' : 'Add Transaction'}</h3>
                            <button className="modal-close" onClick={closeModal}>✕</button>
                        </div>
                        <form className="modal-body" onSubmit={saveTransaction}>
                            <div className="form-group">
                                <label>Description</label>
                                <input
                                    value={formState.description}
                                    onChange={(event) => setFormState((prev) => ({ ...prev, description: event.target.value }))}
                                    placeholder="e.g., Grocery shopping"
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Amount ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={formState.amount}
                                        onChange={(event) => setFormState((prev) => ({ ...prev, amount: event.target.value }))}
                                        placeholder="0.00"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        value={formState.date}
                                        onChange={(event) => setFormState((prev) => ({ ...prev, date: event.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select
                                        value={formState.type}
                                        onChange={(event) => setFormState((prev) => ({ ...prev, type: event.target.value }))}
                                    >
                                        <option value="expense">Expense</option>
                                        <option value="income">Income</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select
                                        value={formState.category}
                                        onChange={(event) => setFormState((prev) => ({ ...prev, category: event.target.value }))}
                                    >
                                        {['Food','Transport','Shopping','Entertainment','Bills','Health','Education','Salary','Freelance','Investment','Other'].map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Save Transaction</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`toast ${toast.type}`}>
                        {toast.type === 'success' ? '✓' : toast.type === 'error' ? '✕' : 'ℹ'} {toast.message}
                    </div>
                ))}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
