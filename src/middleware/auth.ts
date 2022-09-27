import { useAuthStore } from '@/stores'
export default (to, from, next) => {
  const auth = useAuthStore()
  if(!!auth.user){
    next({ name: 'Login' });
    return false;
  }
}