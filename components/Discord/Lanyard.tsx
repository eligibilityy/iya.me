import Image from 'next/image'
import Link from 'next/link'
import { Activity, useLanyard } from 'use-lanyard'

export default function Lanyard() {
  const ID = '997063531763617803'
  const { data: lanyard } = useLanyard(ID)

  const activity = lanyard?.activities.find((activity: Activity) => activity.type === 0)

  return (
    <>
      {lanyard && (
        <div className='flex items-center select-none'>
          {lanyard.listening_to_spotify ? (
            <div className='flex flex-row items-center justify-center space-x-2 p-3 bg-gray-200/50 rounded-md'>
              <Link
                className='flex flex-row items-center'
                href={`https://open.spotify.com/track/${lanyard.spotify && lanyard.spotify.track_id}`}
                target='_blank'
              >
                <figure className='flex flex-row items-end relative'>
                  <Image
                    placeholder='blur'
                    blurDataURL={lanyard.spotify?.album_art_url as string}
                    src={lanyard.spotify?.album_art_url as string}
                    width={50}
                    height={50}
                    className='rounded-md'
                    alt='Album Art'
                  />

                  <figcaption>
                    <svg
                      height={20}
                      width={20}
                      fill='currentColor'
                      viewBox='0 0 496 512'
                      className='absolute -bottom-1.5 -right-1.5 text-green-500 transition-colors duration-300 ease-in-out bg-gray-50  rounded-xl p-0.5'
                    >
                      <path d='M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z' />
                    </svg>
                  </figcaption>
                </figure>
              </Link>
              <div className='flex flex-col text-sm text-neutral-900 w-3/4'>
                <p className='font-bold'>{lanyard.spotify?.song}</p>
                <p className='text-gray-400 truncate'>{lanyard.spotify?.artist}</p>
              </div>
            </div>
          ) : (
            <>
              {activity ? (
                <>
                  {activity.assets && (
                    <div className='flex flex-row items-center justify-center space-x-2 p-3 bg-gray-200/50 rounded-md'>
                      <figure className='flex flex-row items-end relative'>
                        <Image
                          src={
                            activity.assets.large_image.includes('https')
                              ? 'https:/' + activity.assets.large_image.split('https')[1]
                              : `https://cdn.discordapp.com/app-assets/${BigInt(
                                  activity.application_id as unknown as number
                                ).toString()}/${activity.assets.large_image}.png`
                          }
                          alt={activity.assets.large_text ? activity.assets.large_text : 'Big caption'}
                          title={activity.assets.large_text ? activity.assets.large_text : 'Big caption'}
                          width={50}
                          height={50}
                          className='rounded-md pointer-events-none'
                        />

                        {activity.assets.small_image ? (
                          <figcaption>
                            <Image
                              src={
                                activity.assets.small_image.includes('https')
                                  ? 'https:/' + activity.assets.small_image.split('https')[1]
                                  : `https://cdn.discordapp.com/app-assets/${BigInt(
                                      activity.application_id as unknown as number
                                    ).toString()}/${activity.assets.small_image}.png`
                              }
                              alt={activity.assets.small_text ? activity.assets.small_text : 'Small caption'}
                              title={activity.assets.small_text ? activity.assets.small_text : 'Small caption'}
                              width={20}
                              height={20}
                              className='rounded-full absolute -bottom-1.5 -right-1.5 text-neutral-900 transition-colors duration-300 bg-neutral-200  ease-in-out p-0.5'
                            />
                          </figcaption>
                        ) : null}
                      </figure>

                      <div className='flex flex-col text-sm text-neutral-900'>
                        <p className='font-bold truncate'>
                          {activity.assets.small_text ? (
                            activity.assets.small_text
                          ) : (
                            <>
                              {activity.assets.large_text ? (
                                activity.assets.large_text
                              ) : (
                                <>{activity.name ? activity.name : null}</>
                              )}
                            </>
                          )}
                        </p>
                        <p className='truncate'>
                          {activity.state ? activity.state : <>{activity.details ? activity.details : null}</>}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              ) : null}
            </>
          )}
        </div>
      )}
    </>
  )
}
