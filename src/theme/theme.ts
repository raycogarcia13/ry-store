import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#ecbbba',
    colorTextBase: '#333333',
    colorBgBase: '#ffffff',
    colorBorder: '#f0f0f0',
    colorBorderSecondary: '#f0f0f0',
    colorBgLayout: '#fafafa',
    colorTextHeading: '#1f1f1f',
    colorTextSecondary: '#666666',
    borderRadius: 6,
    wireframe: false,
  },
  components: {
    Button: {
      primaryColor: '#ffffff',
      colorPrimary: '#ecbbba',
      colorPrimaryHover: '#e0a8a7',
      colorPrimaryActive: '#d49594',
      borderRadius: 4,
    },
    Card: {
      colorBgContainer: '#ffffff',
      boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.05)',
      borderRadiusLG: 8,
    },
    Input: {
      colorBgContainer: '#ffffff',
      colorBorder: '#e0e0e0',
      borderRadius: 4,
      hoverBorderColor: '#ecbbba',
      activeBorderColor: '#ecbbba',
    },
    Layout: {
      colorBgHeader: '#ffffff',
      colorBgBody: '#fafafa',
    },
    Menu: {
      colorItemBgSelected: 'rgba(236, 187, 186, 0.1)',
      colorItemTextSelected: '#ecbbba',
      colorItemTextHover: '#ecbbba',
    },
  },
};

export const colors = {
  primary: '#ecbbba',
  primaryLight: '#f8e8e7',
  primaryDark: '#d49594',
  black: '#1f1f1f',
  white: '#ffffff',
  gray: {
    100: '#fafafa',
    200: '#f0f0f0',
    300: '#e0e0e0',
    400: '#cccccc',
    500: '#999999',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#1a1a1a',
  },
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  info: '#1890ff',
};
