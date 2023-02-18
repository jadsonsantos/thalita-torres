import { useRouter } from 'next/router'

const useNavBar = () => {
  const isActiveLink = (link) => {
    const router = useRouter()
    const currentRoute = router.pathname

    return currentRoute === link
  }

  return { isActiveLink }
}

export default useNavBar
