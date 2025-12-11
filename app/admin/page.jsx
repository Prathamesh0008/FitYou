"use client";

import React, { useState, useEffect } from "react";

export default function FitYouAdminPanel() {
  // State management
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeTab, setActiveTab] = useState("orders");
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    revenue: 0,
  });

  // Injection/Medication Types
  const medicationTypes = [
    { id: 1, name: "Mounjaro (Tirzepatide)", price: 1250, category: "Weekly", dosage: "2.5mg-15mg" },
    { id: 2, name: "Wegovy (Semaglutide)", price: 1350, category: "Weekly", dosage: "0.25mg-2.4mg" },
    { id: 3, name: "Ozempic (Semaglutide)", price: 950, category: "Weekly", dosage: "0.25mg-2mg" },
    { id: 4, name: "Saxenda (Liraglutide)", price: 850, category: "Daily", dosage: "0.6mg-3mg" },
    { id: 5, name: "Victoza (Liraglutide)", price: 750, category: "Daily", dosage: "0.6mg-1.8mg" },
    { id: 6, name: "Zepbound (Tirzepatide)", price: 1150, category: "Weekly", dosage: "2.5mg-15mg" },
  ];

  // Order Status Options
  const orderStatuses = [
    "Pending", "Processing", "Shipped", "Delivered", "Cancelled", "On Hold"
  ];

  // Mock orders data
  const mockOrders = [
    {
      id: "ORD-001",
      userId: 1,
      userName: "John Doe",
      userEmail: "john@example.com",
      userPhone: "+1 (123) 456-7890",
      medication: "Mounjaro (Tirzepatide)",
      dosage: "5mg",
      quantity: 4,
      price: 1250,
      total: 5000,
      shippingAddress: "123 Main St, Apt 4B, New York, NY 10001",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Delivered",
      orderDate: "2024-03-15",
      deliveryDate: "2024-03-20",
      trackingNumber: "UPS123456789",
      notes: "Customer requested morning delivery",
      prescription: "Yes",
      doctorName: "Dr. Smith",
      refills: 3,
    },
    {
      id: "ORD-002",
      userId: 2,
      userName: "Jane Smith",
      userEmail: "jane@example.com",
      userPhone: "+1 (234) 567-8901",
      medication: "Wegovy (Semaglutide)",
      dosage: "1.7mg",
      quantity: 2,
      price: 1350,
      total: 2700,
      shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
      paymentMethod: "PayPal",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      orderDate: "2024-03-18",
      deliveryDate: "2024-03-25",
      trackingNumber: "FEDEX987654321",
      notes: "Requires signature on delivery",
      prescription: "Yes",
      doctorName: "Dr. Johnson",
      refills: 2,
    },
    {
      id: "ORD-003",
      userId: 3,
      userName: "Robert Johnson",
      userEmail: "robert@example.com",
      userPhone: "+1 (345) 678-9012",
      medication: "Ozempic (Semaglutide)",
      dosage: "1mg",
      quantity: 3,
      price: 950,
      total: 2850,
      shippingAddress: "789 Pine Rd, Chicago, IL 60601",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Processing",
      orderDate: "2024-03-19",
      deliveryDate: null,
      trackingNumber: null,
      notes: "Waiting for prescription verification",
      prescription: "Pending",
      doctorName: "Dr. Williams",
      refills: 4,
    },
    {
      id: "ORD-004",
      userId: 4,
      userName: "Emily Wilson",
      userEmail: "emily@example.com",
      userPhone: "+1 (456) 789-0123",
      medication: "Saxenda (Liraglutide)",
      dosage: "3mg",
      quantity: 1,
      price: 850,
      total: 850,
      shippingAddress: "321 Elm St, Miami, FL 33101",
      paymentMethod: "Bank Transfer",
      paymentStatus: "Pending",
      orderStatus: "On Hold",
      orderDate: "2024-03-20",
      deliveryDate: null,
      trackingNumber: null,
      notes: "Awaiting payment confirmation",
      prescription: "Yes",
      doctorName: "Dr. Brown",
      refills: 1,
    },
    {
      id: "ORD-005",
      userId: 5,
      userName: "Michael Chen",
      userEmail: "michael@example.com",
      userPhone: "+1 (567) 890-1234",
      medication: "Zepbound (Tirzepatide)",
      dosage: "10mg",
      quantity: 4,
      price: 1150,
      total: 4600,
      shippingAddress: "654 Birch Ln, Houston, TX 77001",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      orderStatus: "Pending",
      orderDate: "2024-03-20",
      deliveryDate: null,
      trackingNumber: null,
      notes: "New customer, first order",
      prescription: "Yes",
      doctorName: "Dr. Garcia",
      refills: 5,
    },
  ];

  // Mock users data
  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (123) 456-7890",
      age: 35,
      gender: "Male",
      weight: "220 lbs",
      height: "5'10\"",
      bmi: 31.6,
      joinDate: "2024-01-15",
      lastOrder: "2024-03-15",
      totalOrders: 3,
      totalSpent: 12500,
      membership: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (234) 567-8901",
      age: 42,
      gender: "Female",
      weight: "180 lbs",
      height: "5'6\"",
      bmi: 29.1,
      joinDate: "2024-02-01",
      lastOrder: "2024-03-18",
      totalOrders: 2,
      totalSpent: 5400,
      membership: "Basic",
      status: "Active",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      phone: "+1 (345) 678-9012",
      age: 50,
      gender: "Male",
      weight: "250 lbs",
      height: "6'0\"",
      bmi: 33.9,
      joinDate: "2024-01-20",
      lastOrder: "2024-03-19",
      totalOrders: 4,
      totalSpent: 15200,
      membership: "Premium",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily@example.com",
      phone: "+1 (456) 789-0123",
      age: 28,
      gender: "Female",
      weight: "160 lbs",
      height: "5'4\"",
      bmi: 27.5,
      joinDate: "2024-02-10",
      lastOrder: "2024-03-20",
      totalOrders: 1,
      totalSpent: 850,
      membership: "Basic",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Chen",
      email: "michael@example.com",
      phone: "+1 (567) 890-1234",
      age: 45,
      gender: "Male",
      weight: "210 lbs",
      height: "5'11\"",
      bmi: 29.3,
      joinDate: "2024-03-01",
      lastOrder: "2024-03-20",
      totalOrders: 1,
      totalSpent: 4600,
      membership: "Premium",
      status: "Active",
    },
  ];

  // Initialize data
  useEffect(() => {
    setOrders(mockOrders);
    setUsers(mockUsers);
    calculateStats(mockOrders);
    
    // Load any additional data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length > 0) {
      setUsers([...mockUsers, ...storedUsers.map(user => ({
        id: mockUsers.length + user.id,
        name: user.name,
        email: user.email,
        phone: "Not provided",
        age: Math.floor(Math.random() * 30) + 25,
        gender: Math.random() > 0.5 ? "Male" : "Female",
        weight: `${Math.floor(Math.random() * 100) + 150} lbs`,
        height: `${Math.floor(Math.random() * 12) + 60}"`,
        bmi: (Math.random() * 10 + 25).toFixed(1),
        joinDate: new Date().toISOString().split('T')[0],
        lastOrder: null,
        totalOrders: 0,
        totalSpent: 0,
        membership: "Basic",
        status: "Active",
      }))]);
    }
  }, []);

  // Calculate statistics
  const calculateStats = (orderList) => {
    const total = orderList.length;
    const pending = orderList.filter(o => o.orderStatus === "Pending" || o.orderStatus === "Processing").length;
    const delivered = orderList.filter(o => o.orderStatus === "Delivered").length;
    const revenue = orderList.reduce((sum, order) => sum + order.total, 0);

    setStats({
      totalOrders: total,
      pendingOrders: pending,
      deliveredOrders: delivered,
      revenue: revenue,
    });
  };

  // Filter orders
  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.medication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
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
    
    // Update selected order if open
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, orderStatus: newStatus });
    }
    
    // Recalculate stats
    calculateStats(orders.map(order => 
      order.id === orderId ? { ...order, orderStatus: newStatus } : order
    ));
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">💉</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">FitYou Admin Panel</h1>
                <p className="text-blue-100 text-sm">Weight Loss Medication Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <div className="text-sm">Admin User</div>
                <div className="text-xs text-blue-200">admin@fityou.in</div>
              </div>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <span className="text-lg">👤</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {["dashboard", "orders", "users", "medications", "reports", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalOrders}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl text-blue-600">📦</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                {stats.pendingOrders} pending
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {formatCurrency(stats.revenue)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl text-green-600">💰</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">This month</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Users</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{users.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl text-purple-600">👥</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                {users.filter(u => u.membership === "Premium").length} premium
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Delivery Rate</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {stats.totalOrders > 0 
                    ? `${Math.round((stats.deliveredOrders / stats.totalOrders) * 100)}%`
                    : "0%"
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-xl text-orange-600">🚚</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600">On-time delivery</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder={
                    activeTab === "orders" 
                      ? "Search orders by ID, name, email, or medication..." 
                      : "Search users by name or email..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {activeTab === "orders" && (
                <select className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Status</option>
                  {orderStatuses.map(status => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              )}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                {activeTab === "orders" ? "New Order" : "Export Data"}
              </button>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Orders Management</h2>
              <p className="text-sm text-gray-600">Total {filteredOrders.length} orders found</p>
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
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
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
                          <span className={`px-1 py-0.5 rounded ${getPaymentStatusColor(order.paymentStatus)}`}>
                            {order.paymentStatus}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.orderStatus)}`}>
                          {order.orderStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          View
                        </button>
                        <select
                          value={order.orderStatus}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1"
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
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Users Management</h2>
              <p className="text-sm text-gray-600">Total {filteredUsers.length} users found</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Info</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membership</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-semibold">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{user.weight} • BMI: {user.bmi}</div>
                        <div className="text-xs text-gray-500">{user.age}y • {user.gender}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{user.totalOrders} orders</div>
                        <div className="text-xs text-gray-500">{formatCurrency(user.totalSpent)} spent</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          user.membership === "Premium" 
                            ? "bg-purple-100 text-purple-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {user.membership}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          View Orders
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
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

        {activeTab === "medications" && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Medications Inventory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicationTypes.map((med) => (
                <div key={med.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">{med.name}</h3>
                      <p className="text-sm text-gray-600">{med.category} Injection</p>
                    </div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                      {med.dosage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      {formatCurrency(med.price)}/month
                    </span>
                    <div className="text-sm">
                      <span className="text-green-600 font-medium">In Stock</span>
                      <div className="text-gray-500">24 units</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-1.5 bg-blue-50 text-blue-600 text-sm rounded hover:bg-blue-100">
                        View Details
                      </button>
                      <button className="flex-1 px-3 py-1.5 bg-green-50 text-green-600 text-sm rounded hover:bg-green-100">
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
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Order #{selectedOrder.id}</h2>
                <p className="text-sm text-gray-600">
                  {selectedOrder.userName} • {selectedOrder.orderDate}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Medication:</span>
                      <span className="font-medium">{selectedOrder.medication}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dosage:</span>
                      <span className="font-medium">{selectedOrder.dosage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity:</span>
                      <span className="font-medium">{selectedOrder.quantity} units</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Unit Price:</span>
                      <span className="font-medium">{formatCurrency(selectedOrder.price)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-gray-800 font-semibold">Total:</span>
                      <span className="text-lg font-bold text-blue-600">
                        {formatCurrency(selectedOrder.total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Customer Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{selectedOrder.userName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{selectedOrder.userEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{selectedOrder.userPhone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prescription:</span>
                      <span className={`font-medium ${
                        selectedOrder.prescription === "Yes" ? "text-green-600" : "text-yellow-600"
                      }`}>
                        {selectedOrder.prescription}
                      </span>
                    </div>
                    {selectedOrder.doctorName && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Doctor:</span>
                        <span className="font-medium">{selectedOrder.doctorName}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipping & Payment */}
                <div className="md:col-span-2 bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Shipping & Payment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Shipping Address</h4>
                      <p className="text-gray-800">{selectedOrder.shippingAddress}</p>
                      {selectedOrder.trackingNumber && (
                        <div className="mt-2">
                          <span className="text-sm text-gray-600">Tracking: </span>
                          <span className="text-sm font-medium text-blue-600">
                            {selectedOrder.trackingNumber}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-2">Payment Details</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Method:</span>
                          <span className="font-medium">{selectedOrder.paymentMethod}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className={`font-medium ${
                            selectedOrder.paymentStatus === "Paid" ? "text-green-600" : "text-yellow-600"
                          }`}>
                            {selectedOrder.paymentStatus}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Order Status:</span>
                          <span className={`font-medium ${
                            selectedOrder.orderStatus === "Delivered" ? "text-green-600" : 
                            selectedOrder.orderStatus === "Shipped" ? "text-blue-600" : 
                            "text-yellow-600"
                          }`}>
                            {selectedOrder.orderStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Notes */}
                {selectedOrder.notes && (
                  <div className="md:col-span-2 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                    <h4 className="font-medium text-yellow-800 mb-2">Order Notes</h4>
                    <p className="text-yellow-700">{selectedOrder.notes}</p>
                  </div>
                )}

                {/* Status Update */}
                <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-medium text-gray-700 mb-3">Update Order Status</h4>
                  <div className="flex flex-wrap gap-2">
                    {orderStatuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => updateOrderStatus(selectedOrder.id, status)}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          selectedOrder.orderStatus === status
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Last updated: {selectedOrder.deliveryDate || "Pending"}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Print Invoice
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Send Tracking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <span className="text-xl">💉</span>
                <span className="font-bold text-gray-800">FitYou</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Weight Loss Medication Admin Panel</p>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} FitYou. All rights reserved. FDA-approved medications only.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}