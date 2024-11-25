import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://nafees.lasercoz.com';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Array of endpoints that require authentication
const authRequiredEndpoints = [
  '/cart',
  '/wishlist',
  '/order',
  '/payment',
  // Add more endpoints as needed
];

axiosInstance.interceptors.request.use(
  (config) => {
    // Set the language in the URL
    const lang = localStorage.getItem('i18nextLng') || 'en';
    config.url = `/${lang === 'ar' ? 'ar-SU' : 'en-US'}${config.url}`;

    // Check if the endpoint requires authentication
    if (authRequiredEndpoints.some(endpoint => config.url.includes(endpoint))) {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      // You might want to use Next.js router here
      console.log('Unauthorized access. Redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

