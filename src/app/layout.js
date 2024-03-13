import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: {
        default: 'Spotlight | homepage',
        template: 'Spotlight | %s',
    },
    description: 'Spotlight - personal blog',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={'container'}>
                    <Navbar />
                    {children}
                    <Footer />
                    <ToastContainer />
                </div>
            </body>
        </html>
    );
}
