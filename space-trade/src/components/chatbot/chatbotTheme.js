import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#37465c',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#363644',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
    {
      id: '1',
      message: 'Hi!, What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Nice to meet you {previousValue}',
      end: true,
    },
  ];

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
        headerTitle="Trader AI"
        speechSynthesis={{ enable: false, lang: 'en' }}
        steps={steps} 
        floating={true} />
  </ThemeProvider>
);

export default ThemedExample;