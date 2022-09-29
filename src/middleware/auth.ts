import { useAuthStore } from '@/stores'
export default (to: any, from: any, next: any) => {
  const auth = useAuthStore()
  if (auth.user) {
    next({ name: 'Login' })
    return false
  }
}
