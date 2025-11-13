import React, { useState } from 'react';

interface LoginProps {
  onLogin: (token: string) => void;
}

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../theme/theme';

const { Title } = Typography;

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any credentials will work
      const token = 'dummy-token';
      localStorage.setItem('authToken', token);
      message.success('¡Inicio de sesión exitoso!');
      onLogin(token);
      navigate('/dashboard');
    } catch (error) {
      message.error('Error al iniciar sesión. Por favor, intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
      padding: '20px'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          maxWidth: 440, 
          borderRadius: 16,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
          border: 'none',
          overflow: 'hidden'
        }}
        bodyStyle={{ padding: '40px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 80,
            height: 80,
            backgroundColor: colors.primaryLight,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            border: `2px solid ${colors.primary}`
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V12M12 8H12.01" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <Title 
            level={2} 
            style={{ 
              color: colors.black,
              marginBottom: 8,
              fontWeight: 700,
              fontSize: 28
            }}
          >
            YaDa
          </Title>
          <p style={{ 
            color: colors.gray[600], 
            margin: 0,
            fontSize: 15,
            letterSpacing: '0.3px'
          }}>
            Sistema de Gestión de Inventario
          </p>
        </div>
        
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            label={<span style={{ fontWeight: 500, color: colors.gray[800], marginBottom: 6, display: 'block' }}>Usuario</span>}
            rules={[{ required: true, message: '¡Por favor ingrese su usuario!' }]}
            style={{ marginBottom: 20 }}
          >
            <Input 
              prefix={<UserOutlined style={{ color: colors.gray[500] }} />} 
              placeholder="Ingrese su usuario"
              style={{ 
                height: 46, 
                borderRadius: 8,
                borderColor: colors.gray[300],
                fontSize: 15,
                padding: '10px 15px',
                transition: 'all 0.3s',
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span style={{ fontWeight: 500, color: colors.gray[800], marginBottom: 6, display: 'block' }}>Contraseña</span>}
            rules={[{ required: true, message: '¡Por favor ingrese su contraseña!' }]}
            style={{ marginBottom: 28 }}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: colors.gray[500] }} />}
              placeholder="Ingrese su contraseña"
              style={{ 
                height: 46, 
                borderRadius: 8,
                borderColor: colors.gray[300],
                fontSize: 15,
                padding: '10px 15px',
                transition: 'all 0.3s',
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              size="large"
              block
              style={{
                height: 48,
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 8,
                backgroundColor: colors.primary,
                border: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(236, 187, 186, 0.3)',
              }}
              className="login-button"
            >
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
        
        <style>{`
          .login-button:hover {
            background-color: ${colors.primaryDark} !important;
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(236, 187, 186, 0.4) !important;
          }
          
          .login-button:active {
            transform: translateY(0);
          }
          
          .ant-input:focus, .ant-input-focused {
            border-color: ${colors.primary} !important;
            box-shadow: 0 0 0 2px rgba(236, 187, 186, 0.2) !important;
          }
          
          .ant-input-password:focus, .ant-input-password-focused {
            border-color: ${colors.primary} !important;
            box-shadow: 0 0 0 2px rgba(236, 187, 186, 0.2) !important;
          }
        `}</style>
      </Card>
    </div>
  );
};

export default Login;
