import { useCallback, useRef } from 'react';
import Lottie from 'react-lottie';
import { toast } from 'react-toastify';

import mailLottieAnimation from '@/assets/mail-lottie.json';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import Section from '@/components/Section';
import { useEmail } from '@/hooks/email';
import { options } from '@/utils/toastOptions';
import getValidationErrors from '@/utils/validationErrors';
import whatsapp from '@/utils/whatsapp';
import { FormHandles } from '@unform/core';
import Head from 'next/head';
import * as Yup from 'yup';

import GmailIcon from '../../assets/gmail.svg';
import OutlookIcon from '../../assets/outlook.svg';
import WhatsappIcon from '../../assets/whatsapp.svg';
import { Main, Form } from './styles';

interface FormProps {
  sender_name: string;
  sender_email: string;
  text: string;
}

const Contact = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);

  const { sendEmail, loading } = useEmail();

  const initialData: FormProps = {
    sender_name: '',
    sender_email: '',
    text: '',
  };
  const onSubmit = useCallback(
    async ({ sender_name, sender_email, text }: FormProps) => {
      try {
        const schema = Yup.object().shape({
          sender_name: Yup.string().required('Nome obrigatório'),
          sender_email: Yup.string()
            .email('Preencha com um email válido')
            .required('Email obrigatório'),
          text: Yup.string().required('Você deve preencher a sua mensagem'),
        });

        await schema.validate(
          {
            sender_name,
            sender_email,
            text,
          },
          {
            abortEarly: false,
          }
        );

        await sendEmail({
          sender_name,
          sender_email,
          text,
        });

        toast.success('seu email foi enviado com sucesso', options);

        formRef.current.setErrors({});
        formRef.current.reset();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current.setErrors(errors);
          return;
        }

        toast.error(error, options);
      }
    },
    [sendEmail]
  );
  return (
    <>
      <Head>
        <title>Contato - Gustavo Henrique Ribeiro Dias - Guribeiro.dev</title>
      </Head>
      <Main>
        <div className="mail-lottie-container">
          <Lottie
            options={{
              animationData: mailLottieAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
        <Section label="📬 Formulário de contato">
          <Form ref={formRef} initialData={initialData} onSubmit={onSubmit}>
            <Input name="sender_name" placeholder="Nome completo" />
            <Input name="sender_email" placeholder="Email" type="email" />
            <Input name="text" textarea placeholder="Sua mensagem aqui" />

            {loading ? <Loader /> : <button type="submit">Enviar</button>}
          </Form>
        </Section>
        <Section label="✉️ Outras opções de contato">
          <article>
            <div className="row">
              <a href="mailto:gugahribeiro@hotmail.com">
                <OutlookIcon />
              </a>

              <a href="mailto:gustavribeirod@gmail.com">
                <GmailIcon />
              </a>

              <a href={whatsapp} target="_blank" rel="noreferrer">
                <WhatsappIcon />
              </a>
            </div>
          </article>
        </Section>
      </Main>
    </>
  );
};

export default Contact;
