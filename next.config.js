/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'blazed.sirv.com',
        'lh3.googleusercontent.com',
        'firebasestorage.googleapis.com',
        'blz-one-9e383.appspot.com',
        'storage.googleapis.com'
      ],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['rtmtransit.com', '*.rtmtransit.com', 'rtmtransit-com.vercel.app'],
        },
    }
}

module.exports = nextConfig
