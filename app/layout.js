import '../styles/globals.css'

import GoogleAnalytics from '../components/GoogleAnalytics'

export const metadata = {
    title: {
        default: 'Next.js',
    },
    icons: {
        icon: '/favicon.png',
    },
}

const RootLayout = ({ children }) => (
    <html lang="en">
        <body className="bg-dark-blue">
            <GoogleAnalytics />
            {children}
        </body>
    </html>
)

export default RootLayout
