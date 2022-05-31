import { FC, useMemo } from 'react'

import { useRouter } from 'next/router'

const NavButton: FC<{ to: string }> = ({ to }) => {
    const router = useRouter();

    const buttonName = useMemo(() => {
        const stageName = to.split('/').join(' ')
        return stageName[0].toUpperCase() + stageName.slice(1)
    }, [to])

    return (
        <button onClick={() => router.push(to)}>{buttonName}</button>
    )
}

export default NavButton
