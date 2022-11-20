const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const ContactView = () => import('@/views/ContactView.vue')
const ServiceView = () => import('@/views/ServiceView.vue')
const LoginView = () => import('@/views/Auth/LoginView.vue')
const Register = () => import('@/views/Auth/Register.vue')
const ForgotPassword = () => import('@/views/Auth/ForgotPassword.vue')
const ResetPassword = () => import('@/views/Auth/ResetPassword.vue')
const FormComponentSample = () => import('@/views/Auth/FormComponentSample.vue')
const FormCompositionAPISample = () => import('@/views/Auth/FormCompositionAPISample.vue')
const NotFound = () => import('@/views/Error/NotFound.vue')
const Forbidden = () => import('@/views/Error/Forbidden.vue')

export {
  HomeView,
  AboutView,
  ContactView,
  ServiceView,
  LoginView,
  Register,
  ForgotPassword,
  ResetPassword,
  FormComponentSample,
  FormCompositionAPISample,
  NotFound,
  Forbidden,
}
