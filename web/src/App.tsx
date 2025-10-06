import React from "react";
import { Layout, theme, Typography } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CharacterPage } from "./characters/CharacterPage";
const queryClient = new QueryClient();

const { Header, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout className='!min-h-full'>
        <Layout className='!min-h-full'>
          <Header style={{ background: colorBgContainer }} className='p-0'>
            <Typography.Title level={3} className='m-4'>
              Game of Thrones Explorer
            </Typography.Title>
          </Header>
          <CharacterPage />
          <Footer style={{ textAlign: "center" }}>Game of Thrones Explorer ©2025 Created by Chanh Ly</Footer>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
