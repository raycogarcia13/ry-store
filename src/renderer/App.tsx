import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, App as AntdApp } from 'antd';
import { theme } from '../theme/theme';
import enUS from 'antd/locale/en_US';
import 'antd/dist/reset.css';
import MainLayout from '../components/layout/MainLayout';
import Login from '../views/auth/Login';
import Dashboard from '../views/dashboard/Dashboard';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    background-color: #fafafa;
  }
  
  .ant-btn-primary {
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    font-weight: 500;
  }
  
  .ant-card {
    border-radius: 8px;
    overflow: hidden;
  }
  
  .ant-input:focus, .ant-input-focused {
    box-shadow: 0 0 0 2px rgba(236, 187, 186, 0.2);
  }
  
  .ant-menu-item-selected {
    font-weight: 500;
  }
`;

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated (e.g., from localStorage or API)
    const checkAuth = async () => {
      // Simulate API call to check authentication
      try {
        // Replace with actual authentication check
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogin = (token: string) => {
    // Store the authentication token
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear the authentication token
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ConfigProvider theme={theme}>
      <AntdApp>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" replace />
                )
              } 
            />
            <Route 
              path="/" 
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                isAuthenticated ? (
                  <MainLayout>
                    <Dashboard onLogout={handleLogout} />
                  </MainLayout>
                ) : (
                  <Navigate to="/login" replace />
                )
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
