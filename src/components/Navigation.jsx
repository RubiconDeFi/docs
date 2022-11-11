import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

export function Navigation({ navigation, className }) {
  let router = useRouter()
  let routerArray = router.pathname.split('/')
  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'block w-full pl-3.5',
                      !link.sublinks
                        ? 'before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full hover:before:block'
                        : 'flex flex-row items-center justify-between before:hidden',
                      link.href === router.pathname
                        ? 'font-semibold text-red-500 before:bg-red-500'
                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600  dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                    )}
                  >
                    <div>{link.title}</div>
                    {link.sublinks && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Link>
                  {link.sublinks && (
                    <Transition
                      as={Fragment}
                      show={router.pathname.includes(
                        link.href.split('/').slice(-1)
                      )}
                      enter="transform transition delay-200 duration-[250ms]"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transform duration-200 transition ease-in-out"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <ul
                        role="list"
                        className={clsx(
                          'mt-2 ml-6 space-y-2 border-l-2 border-slate-100 transition duration-200 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200'
                        )}
                      >
                        {link.sublinks.map((sublink) => (
                          <li key={sublink.href} className="relative">
                            <Link
                              href={sublink.href}
                              className={clsx(
                                'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                                sublink.href === router.pathname
                                  ? 'font-normal text-red-500 before:bg-red-500'
                                  : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                              )}
                            >
                              {sublink.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
