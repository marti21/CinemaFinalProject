import { onAuthStateChangedUser } from "@/firebase/client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
}

export default function useUser () {
    const [user, setUser] = useState(USER_STATES.NOT_KNOWN)

    const router = useRouter()

    useEffect(() => {
        onAuthStateChangedUser(setUser)
    }, [])

    useEffect(() => {
        user === USER_STATES.NOT_LOGGED && router.push('/')
    }, [user])

    return user
}