import React from 'react';

interface DashboardProps {
  onLogout: () => void;
}
import { Button, Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <Title level={2}>Dashboard</Title>
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Card>
        <p>Welcome to your dashboard!</p>
      </Card>
    </div>
  );
};

export default Dashboard;
