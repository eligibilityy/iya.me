import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GitFork, GithubLogo, Star } from 'phosphor-react'
import { BiGitRepoForked, BiStar } from 'react-icons/bi'
import { motion } from 'framer-motion'

interface Repo {
    link: string;
    stars: number;
    forks: number;
    repo: string;
    description: string;
}

export default function Repos({ username: username }: { username: string }) {
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://gh-pinned.nxl.sh/api/user/${username}`)
            .then(res => res.json())
            .then(data => {
                const repos = data.map((repo: any) => ({
                    link: repo.link,
                    stars: repo.stars,
                    forks: repo.forks,
                    repo: repo.repo,
                    description: repo.description
                }))
                setRepos(repos)
                setLoading(false)
            })
    }, [username])

    if (loading) {
        return (
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="flex justify-center items-center h-full">
                <p className="text-xl font-sans">Loading...</p>
            </motion.div>
        )
    } else {
        return (
            <div className="flex flex-col relative w-3/6 mt-3">
                {repos.map(repo => (
                    <Link href={repo.link} key={repo.repo} passHref rel='noreferrer' target="_blank">
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgb(23 23 23)",
                                color: 'rgb(249 250 251)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'backOut' }}
                            className="flex flex-row space-x-2 p-2 rounded-md"
                        >
                            <div>
                                <div className="flex flex-1 text-left items-center space-x-2">
                                    <span className='my-auto leading-none font-bold font-[Recoleta] text-xl'>{repo.repo}</span>
    
                                    <Link href={repo.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xl font-semibold font-[Recoleta]"
                                    >
                                        <span className="flex items-center justify-center space-x-2 text-sm">
                                            <span className="space-x-1  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='inline h-5 w-5' fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                                                <span>{repo.stars}</span>
                                            </span>
    
                                            <span className="space-x-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='inline h-5 w-5' fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="188" r="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="188" cy="68" r="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><circle cx="68" cy="68" r="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M68,96v8a23.9,23.9,0,0,0,24,24h72a23.9,23.9,0,0,0,24-24V96" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="128" y1="128" x2="128" y2="160" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                                                <span>{repo.forks}</span>
                                            </span>
                                        </span>
                                    </Link>
                                </div>
                                <p className="text-sm">{repo.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        )
    }

}