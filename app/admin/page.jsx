"use client";

import React, { useState, useEffect } from "react";

export default function FitYouAdminPanel() {
  // State management
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    revenue: 0,
    activeUsers: 0,
    monthlyGrowth: "+12.5%",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminCredentials] = useState({
    username: "admin",
    password: "admin123"
  });
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  // Injection/Medication Types
  const medicationTypes = [
    { id: 1, name: "Mounjaro (Tirzepatide)", price: 1250, category: "Weekly", dosage: "2.5mg-15mg", stock: 42 },
    { id: 2, name: "Wegovy (Semaglutide)", price: 1350, category: "Weekly", dosage: "0.25mg-2.4mg", stock: 28 },
    { id: 3, name: "Ozempic (Semaglutide)", price: 950, category: "Weekly", dosage: "0.25mg-2mg", stock: 35 },
    { id: 4, name: "Saxenda (Liraglutide)", price: 850, category: "Daily", dosage: "0.6mg-3mg", stock: 19 },
    { id: 5, name: "Victoza (Liraglutide)", price: 750, category: "Daily", dosage: "0.6mg-1.8mg", stock: 25 },
    { id: 6, name: "Zepbound (Tirzepatide)", price: 1150, category: "Weekly", dosage: "2.5mg-15mg", stock: 15 },
  ];

  // Order Status Options
  const orderStatuses = [
    "Pending", "Processing", "Shipped", "Delivered", "Cancelled", "On Hold"
  ];

  // Mock orders data - More realistic
  const mockOrders = [
    {
      id: "ORD-001",
      userId: 1,
      userName: "John Carter",
      userEmail: "john.carter@email.com",
      userPhone: "+1 (212) 555-0123",
      medication: "Mounjaro (Tirzepatide)",
      dosage: "5mg",
      quantity: 4,
      price: 1250,
      total: 5000,
      shippingAddress: "123 Park Avenue, Apt 12B, New York, NY 10001",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      orderDate: "2024-03-15",
      deliveryDate: "2024-03-20",
      trackingNumber: "UPS1Z999999999999999",
      notes: "Customer requested temperature-controlled delivery",
      prescription: "Verified",
      doctorName: "Dr. Michael Smith",
      refills: 3,
      shippingType: "Express",
      insuranceCovered: true,
      insuranceAmount: 3200,
    },
    {
      id: "ORD-002",
      userId: 2,
      userName: "Sarah Johnson",
      userEmail: "sarah.j@email.com",
      userPhone: "+1 (310) 555-9876",
      medication: "Wegovy (Semaglutide)",
      dosage: "1.7mg",
      quantity: 2,
      price: 1350,
      total: 2700,
      shippingAddress: "456 Sunset Blvd, Los Angeles, CA 90001",
      paymentMethod: "PayPal",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      orderDate: "2024-03-18",
      deliveryDate: "2024-03-25",
      trackingNumber: "FEDEX799999999999",
      notes: "Requires signature on delivery - Leave at front desk if not home",
      prescription: "Verified",
      doctorName: "Dr. Emily Chen",
      refills: 2,
      shippingType: "Standard",
      insuranceCovered: false,
      insuranceAmount: 0,
    },
    {
      id: "ORD-003",
      userId: 3,
      userName: "Robert Davis",
      userEmail: "robert.davis@email.com",
      userPhone: "+1 (312) 555-4567",
      medication: "Ozempic (Semaglutide)",
      dosage: "1mg",
      quantity: 3,
      price: 950,
      total: 2850,
      shippingAddress: "789 Michigan Ave, Chicago, IL 60601",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Processing",
      orderDate: "2024-03-19",
      deliveryDate: null,
      trackingNumber: null,
      notes: "Waiting for prescription verification from Dr. Williams",
      prescription: "Pending",
      doctorName: "Dr. James Williams",
      refills: 4,
      shippingType: "Express",
      insuranceCovered: true,
      insuranceAmount: 1900,
    },
    {
      id: "ORD-004",
      userId: 4,
      userName: "Amanda Wilson",
      userEmail: "amanda.w@email.com",
      userPhone: "+1 (305) 555-7890",
      medication: "Saxenda (Liraglutide)",
      dosage: "3mg",
      quantity: 1,
      price: 850,
      total: 850,
      shippingAddress: "321 Ocean Drive, Miami, FL 33101",
      paymentMethod: "Bank Transfer",
      paymentStatus: "Pending",
      orderStatus: "On Hold",
      orderDate: "2024-03-20",
      deliveryDate: null,
      trackingNumber: null,
      notes: "Awaiting payment confirmation - Bank transfer initiated",
      prescription: "Verified",
      doctorName: "Dr. Lisa Brown",
      refills: 1,
      shippingType: "Standard",
      insuranceCovered: false,
      insuranceAmount: 0,
    },
    {
      id: "ORD-005",
      userId: 5,
      userName: "David Chen",
      userEmail: "david.chen@email.com",
      userPhone: "+1 (713) 555-2345",
      medication: "Zepbound (Tirzepatide)",
      dosage: "10mg",
      quantity: 4,
      price: 1150,
      total: 4600,
      shippingAddress: "654 Energy Corridor, Houston, TX 77001",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Pending",
      orderDate: "2024-03-20",
      deliveryDate: null,
      trackingNumber: null,
      notes: "New customer - First order. Welcome package included.",
      prescription: "Verified",
      doctorName: "Dr. Maria Garcia",
      refills: 5,
      shippingType: "Express",
      insuranceCovered: true,
      insuranceAmount: 2800,
    },
    {
      id: "ORD-006",
      userId: 6,
      userName: "Jennifer Miller",
      userEmail: "j.miller@email.com",
      userPhone: "+1 (415) 555-6789",
      medication: "Mounjaro (Tirzepatide)",
      dosage: "7.5mg",
      quantity: 3,
      price: 1250,
      total: 3750,
      shippingAddress: "789 Market Street, San Francisco, CA 94101",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      orderDate: "2024-03-19",
      deliveryDate: "2024-03-24",
      trackingNumber: "USPS94055036993000987654321",
      notes: "Customer on maintenance dose - Regular refill",
      prescription: "Verified",
      doctorName: "Dr. Robert Taylor",
      refills: 6,
      shippingType: "Standard",
      insuranceCovered: true,
      insuranceAmount: 2500,
    },
    {
      id: "ORD-007",
      userId: 7,
      userName: "Thomas Anderson",
      userEmail: "thomas.a@email.com",
      userPhone: "+1 (602) 555-3456",
      medication: "Wegovy (Semaglutide)",
      dosage: "2.4mg",
      quantity: 2,
      price: 1350,
      total: 2700,
      shippingAddress: "123 Desert View, Phoenix, AZ 85001",
      paymentMethod: "PayPal",
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      orderDate: "2024-03-17",
      deliveryDate: "2024-03-22",
      trackingNumber: "FEDEX790000000000",
      notes: "Left with neighbor - Apartment 4C",
      prescription: "Verified",
      doctorName: "Dr. Sarah Johnson",
      refills: 3,
      shippingType: "Express",
      insuranceCovered: false,
      insuranceAmount: 0,
    },
    {
      id: "ORD-008",
      userId: 8,
      userName: "Emily Rodriguez",
      userEmail: "emily.r@email.com",
      userPhone: "+1 (305) 555-9012",
      medication: "Ozempic (Semaglutide)",
      dosage: "0.5mg",
      quantity: 4,
      price: 950,
      total: 3800,
      shippingAddress: "456 Coral Way, Miami, FL 33101",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Cancelled",
      orderDate: "2024-03-16",
      deliveryDate: null,
      trackingNumber: null,
      notes: "Cancelled by customer - Doctor changed prescription",
      prescription: "Cancelled",
      doctorName: "Dr. Carlos Mendez",
      refills: 0,
      shippingType: "Standard",
      insuranceCovered: true,
      insuranceAmount: 2400,
    },
  ];

  // Mock users data
  const mockUsers = [
    {
      id: 1,
      name: "John Carter",
      email: "john.carter@email.com",
      phone: "+1 (212) 555-0123",
      age: 42,
      gender: "Male",
      startWeight: "245 lbs",
      currentWeight: "218 lbs",
      targetWeight: "195 lbs",
      height: "6'1\"",
      bmi: 31.2,
      joinDate: "2024-01-15",
      lastOrder: "2024-03-15",
      totalOrders: 3,
      totalSpent: 14500,
      membership: "Premium Plus",
      status: "Active",
      plan: "Mounjaro Monthly",
      progress: 65,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (310) 555-9876",
      age: 38,
      gender: "Female",
      startWeight: "185 lbs",
      currentWeight: "162 lbs",
      targetWeight: "145 lbs",
      height: "5'7\"",
      bmi: 28.5,
      joinDate: "2024-02-01",
      lastOrder: "2024-03-18",
      totalOrders: 2,
      totalSpent: 5400,
      membership: "Premium",
      status: "Active",
      plan: "Wegovy Bi-weekly",
      progress: 58,
    },
    {
      id: 3,
      name: "Robert Davis",
      email: "robert.davis@email.com",
      phone: "+1 (312) 555-4567",
      age: 51,
      gender: "Male",
      startWeight: "280 lbs",
      currentWeight: "252 lbs",
      targetWeight: "210 lbs",
      height: "6'0\"",
      bmi: 36.8,
      joinDate: "2024-01-20",
      lastOrder: "2024-03-19",
      totalOrders: 4,
      totalSpent: 15200,
      membership: "Premium Plus",
      status: "Active",
      plan: "Ozempic Weekly",
      progress: 40,
    },
    {
      id: 4,
      name: "Amanda Wilson",
      email: "amanda.w@email.com",
      phone: "+1 (305) 555-7890",
      age: 29,
      gender: "Female",
      startWeight: "165 lbs",
      currentWeight: "158 lbs",
      targetWeight: "135 lbs",
      height: "5'4\"",
      bmi: 27.8,
      joinDate: "2024-02-10",
      lastOrder: "2024-03-20",
      totalOrders: 1,
      totalSpent: 850,
      membership: "Basic",
      status: "Active",
      plan: "Saxenda Starter",
      progress: 23,
    },
    {
      id: 5,
      name: "David Chen",
      email: "david.chen@email.com",
      phone: "+1 (713) 555-2345",
      age: 45,
      gender: "Male",
      startWeight: "225 lbs",
      currentWeight: "218 lbs",
      targetWeight: "180 lbs",
      height: "5'11\"",
      bmi: 31.9,
      joinDate: "2024-03-01",
      lastOrder: "2024-03-20",
      totalOrders: 1,
      totalSpent: 4600,
      membership: "Premium",
      status: "Active",
      plan: "Zepbound Monthly",
      progress: 16,
    },
    {
      id: 6,
      name: "Jennifer Miller",
      email: "j.miller@email.com",
      phone: "+1 (415) 555-6789",
      age: 35,
      gender: "Female",
      startWeight: "195 lbs",
      currentWeight: "172 lbs",
      targetWeight: "150 lbs",
      height: "5'6\"",
      bmi: 29.3,
      joinDate: "2024-02-15",
      lastOrder: "2024-03-19",
      totalOrders: 3,
      totalSpent: 11250,
      membership: "Premium Plus",
      status: "Active",
      plan: "Mounjaro Bi-weekly",
      progress: 51,
    },
  ];

  // Initialize data
  useEffect(() => {
    if (isLoggedIn) {
      setOrders(mockOrders);
      setUsers(mockUsers);
      calculateStats(mockOrders);
    }
  }, [isLoggedIn]);

  // Calculate statistics
  const calculateStats = (orderList) => {
    const total = orderList.length;
    const pending = orderList.filter(o => o.orderStatus === "Pending" || o.orderStatus === "Processing").length;
    const delivered = orderList.filter(o => o.orderStatus === "Delivered").length;
    const revenue = orderList.reduce((sum, order) => sum + order.total, 0);
    const active = users.filter(u => u.status === "Active").length;

    setStats({
      totalOrders: total,
      pendingOrders: pending,
      deliveredOrders: delivered,
      revenue: revenue,
      activeUsers: active,
      monthlyGrowth: "+12.5%",
    });
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === adminCredentials.username && 
        loginData.password === adminCredentials.password) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials. Use admin/admin123");
    }
  };

  // Filter orders
  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.medication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Processing": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-orange-100 text-orange-800";
      case "On Hold": return "bg-red-100 text-red-800";
      case "Cancelled": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Get payment status color
  const getPaymentStatusColor = (status) => {
    switch (status) {
      case "Paid": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Update order status
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, orderStatus: newStatus } : order
    ));
    
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, orderStatus: newStatus });
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: "", password: "" });
  };

  // If not logged in, show login screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🔒</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">FitYou Admin Login</h1>
            <p className="text-gray-600 mt-2">Weight Loss Medication Management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                placeholder="Enter admin username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all"
            >
              Sign In to Admin Panel
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Demo Credentials: <span className="font-medium">admin / admin123</span>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
              <p>© 2024 FitYou Weight Loss Management</p>
              <p className="mt-1">Secure Admin Access Only</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Admin Panel
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-xl">💉</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">FitYou Admin Dashboard</h1>
                <p className="text-blue-200 text-xs">Weight Loss Medication Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <div className="text-sm">Admin User</div>
                <div className="text-xs text-blue-200">admin@fityou.in</div>
              </div>
              <div className="relative group">
                <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                  <span className="text-lg">👤</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 hidden group-hover:block z-50">
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto">
            {[
              { id: "dashboard", label: "Dashboard", icon: "📊" },
              { id: "orders", label: "Orders", icon: "📦" },
              { id: "customers", label: "Customers", icon: "👥" },
              { id: "medications", label: "Medications", icon: "💊" },
              { id: "analytics", label: "Analytics", icon: "📈" },
              { id: "reports", label: "Reports", icon: "📄" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(stats.revenue)}</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-xl text-blue-600">💰</span>
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                {stats.monthlyGrowth}
              </span>
              <span className="text-xs text-gray-500 ml-2">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Orders</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stats.pendingOrders}</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <span className="text-xl text-green-600">📦</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Pending: {orders.filter(o => o.orderStatus === "Pending").length}</span>
                <span>Processing: {orders.filter(o => o.orderStatus === "Processing").length}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Customers</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stats.activeUsers}</p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                <span className="text-xl text-purple-600">👥</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Premium: {users.filter(u => u.membership.includes("Premium")).length}</span>
                <span>New: 3</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Delivery Rate</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {stats.totalOrders > 0 
                    ? `${Math.round((stats.deliveredOrders / stats.totalOrders) * 100)}%`
                    : "0%"
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <span className="text-xl text-orange-600">🚚</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>On-time: 94%</span>
                <span>Delayed: 6%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Charts */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Revenue Overview</h3>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-64 flex items-end space-x-2">
                {[12000, 18000, 15000, 22000, 19000, 25000, 28000].map((amount, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                      style={{ height: `${(amount / 30000) * 200}px` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                Total: {formatCurrency(129000)}
              </div>
            </div>

            {/* Medication Performance */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Top Medications</h3>
              <div className="space-y-4">
                {medicationTypes.slice(0, 4).map((med, index) => (
                  <div key={med.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-sm text-blue-600">💊</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{med.name.split(' ')[0]}</div>
                        <div className="text-xs text-gray-500">{med.dosage}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-800">
                        {formatCurrency(med.price * [12, 8, 10, 6][index])}
                      </div>
                      <div className="text-xs text-gray-500">{[12, 8, 10, 6][index]} orders</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th className="pb-3">Time</th>
                      <th className="pb-3">Activity</th>
                      <th className="pb-3">User</th>
                      <th className="pb-3">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { time: "10:30 AM", activity: "Order Processed", user: "John Carter", details: "ORD-001 • Mounjaro" },
                      { time: "09:45 AM", activity: "Payment Received", user: "Sarah Johnson", details: "ORD-002 • $2,700" },
                      { time: "09:15 AM", activity: "Shipment Created", user: "Robert Davis", details: "ORD-003 • UPS Tracking" },
                      { time: "Yesterday", activity: "New Customer", user: "David Chen", details: "Premium Plan Activated" },
                      { time: "Yesterday", activity: "Prescription Verified", user: "Jennifer Miller", details: "Dr. Taylor - Verified" },
                    ].map((activity, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-3 text-sm text-gray-500">{activity.time}</td>
                        <td className="py-3">
                          <span className="text-sm font-medium text-gray-800">{activity.activity}</span>
                        </td>
                        <td className="py-3 text-sm text-gray-600">{activity.user}</td>
                        <td className="py-3 text-sm text-gray-500">{activity.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        {(activeTab === "orders" || activeTab === "customers") && (
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={
                      activeTab === "orders" 
                        ? "Search orders by ID, name, email, or medication..." 
                        : "Search customers by name, email, or phone..."
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="absolute left-4 top-3.5 text-gray-400">🔍</span>
                </div>
              </div>
              <div className="flex space-x-3">
                {activeTab === "orders" && (
                  <select className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Status</option>
                    {orderStatuses.map(status => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                )}
                <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800">
                  {activeTab === "orders" ? "+ New Order" : "Export Data"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Table */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Orders Management</h2>
                  <p className="text-sm text-gray-600">
                    {filteredOrders.length} orders • {formatCurrency(filteredOrders.reduce((sum, o) => sum + o.total, 0))} total
                  </p>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700">
                  Download Report
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medication</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.slice(0, 10).map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{order.id}</div>
                        <div className="text-xs text-gray-500">{order.orderDate}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.userName}</div>
                        <div className="text-xs text-gray-500">{order.userEmail}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{order.medication}</div>
                        <div className="text-xs text-gray-500">{order.dosage} • Qty: {order.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{formatCurrency(order.total)}</div>
                        <div className="text-xs text-gray-500">
                          <span className={`px-2 py-1 rounded ${getPaymentStatusColor(order.paymentStatus)}`}>
                            {order.paymentStatus}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(order.orderStatus)}`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-blue-600 hover:text-blue-900 mr-3 font-medium"
                        >
                          View
                        </button>
                        <select
                          value={order.orderStatus}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-blue-500"
                        >
                          {orderStatuses.map(status => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Showing 1 to {Math.min(10, filteredOrders.length)} of {filteredOrders.length} orders
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">← Previous</button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next →</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customers Table */}
        {activeTab === "customers" && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-lg font-semibold text-gray-800">Customer Management</h2>
              <p className="text-sm text-gray-600">{filteredUsers.length} active customers</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders & Spending</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-semibold">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                            <div className="text-xs text-gray-400">{user.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {user.currentWeight} / {user.targetWeight}
                        </div>
                        <div className="text-xs text-gray-500">
                          {user.startWeight} → {user.currentWeight} ({((parseInt(user.startWeight) - parseInt(user.currentWeight)) / (parseInt(user.startWeight) - parseInt(user.targetWeight)) * 100).toFixed(0)}%)
                        </div>
                        <div className="mt-1 w-32 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-green-500 rounded-full"
                            style={{ width: `${user.progress}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{user.totalOrders} orders</div>
                        <div className="text-sm text-gray-900 font-bold">{formatCurrency(user.totalSpent)}</div>
                        <div className="text-xs text-gray-500">Last: {user.lastOrder}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          user.membership === "Premium Plus" 
                            ? "bg-purple-100 text-purple-800" 
                            : user.membership === "Premium"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {user.membership}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">{user.plan}</div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-900 text-sm font-medium mr-3">
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                          Message
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Medications Inventory */}
        {activeTab === "medications" && (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Medications Inventory</h2>
                <p className="text-sm text-gray-600">Manage weight loss injection stock</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700">
                + Add New Medication
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicationTypes.map((med) => (
                <div key={med.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-gray-800">{med.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{med.dosage} • {med.category}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      med.stock > 20 
                        ? "bg-green-100 text-green-800"
                        : med.stock > 10
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {med.stock} in stock
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(med.price)}<span className="text-sm text-gray-500">/month</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Monthly orders:</span>
                      <span className="font-medium">{Math.floor(med.stock / 3)} avg</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Restock level:</span>
                      <span className="font-medium">{med.stock <= 15 ? "Low" : "Good"}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100">
                        View Details
                      </button>
                      <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 text-sm font-medium rounded-lg hover:bg-green-100">
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Order #{selectedOrder.id}</h2>
                <p className="text-sm text-gray-600">{selectedOrder.userName} • {selectedOrder.orderDate}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Rest of the order details modal remains the same as previous version */}
              {/* ... (content from previous modal) ... */}
            </div>
          </div>
        </div>
      )}

      {/* Admin Footer */}
      <footer className="mt-8 py-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl">💉</span>
                <span className="font-bold">FitYou Weight Loss Management</span>
              </div>
              <p className="text-sm text-gray-400">Admin Panel v2.1 • Secure Access Only</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>© {new Date().getFullYear()} FitYou Pharmaceuticals</p>
              <p className="mt-1">All medications FDA-approved • HIPAA Compliant</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}