import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
} from 'react';

import axios from 'axios';

interface SendEmailProps {
  sender_name: string;
  sender_email: string;
  text: string;
}

interface EmailContextData {
  sendEmail(data: SendEmailProps): Promise<void>;
  loading: boolean;
}

const EmailContext = createContext<EmailContextData>({} as EmailContextData);

interface EmailProvider {
  children: ReactNode;
}

const EmailProvider = ({ children }: EmailProvider): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const sendEmail = useCallback(
    async ({ sender_name, sender_email, text }: SendEmailProps) => {
      setLoading(true);
      await axios.post(process.env.SEND_EMAIL_ENDPOINT, {
        sender_name,
        sender_email,
        text,
      });

      setLoading(false);
    },
    []
  );

  return (
    <EmailContext.Provider value={{ sendEmail, loading }}>
      {children}
    </EmailContext.Provider>
  );
};

function useEmail(): EmailContextData {
  const context = useContext(EmailContext);

  if (!context)
    throw new Error('useEmail should be used within an EmailProvider');

  return context;
}

export { EmailProvider, useEmail };
