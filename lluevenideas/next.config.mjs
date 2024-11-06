/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Asegúrate de que este es el puerto correcto donde corre tu aplicación
        pathname: '/**', // Permitir cualquier ruta
      },
    ],
  },
};

export default nextConfig;
