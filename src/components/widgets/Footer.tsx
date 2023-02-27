import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { IconTwitter } from "~/components/icons/IconTwitter";
import { IconGithub } from "~/components/icons/IconGithub";
import { IconLinkedIn } from "../icons/IconLinkedIn";

export default component$(() => {
  const links = [
    {
      title: "Current Project",
      items: [{ title: "Cadence", href: "https://github.com/tpucci/cadence" }],
    },
    {
      title: "Goodies",
      items: [
        { title: "My Dotfiles", href: "https://github.com/tpucci/dotfiles" },
      ],
    },
    {
      title: "Languages",
      items: [
        { title: "Typescript", href: "https://www.typescriptlang.org/" },
        { title: "Dart", href: "https://dart.dev/" },
        { title: "Elixir", href: "https://elixir-lang.org/" },
        { title: "Kotlin", href: "https://kotlinlang.org/" },
      ],
    },
  ];

  const social = [
    {
      label: "Twitter",
      icon: IconTwitter,
      href: "https://twitter.com/Thomas_Pucci",
    },
    {
      label: "LinkedIn",
      icon: IconLinkedIn,
      href: "https://www.linkedin.com/in/thomaspucci/",
    },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/tpucci",
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                Hey !
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              My name is Thomas.
              <br />I am a french craftsman developer, speaker and lean
              practitioner.
              <br />
              This is my personal blog 🙂 Feel free to reach me on Twitter or
              LinkedIn.
            </div>
          </div>
          {links.map(({ title, items }) => (
            <div class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">
                {title}
              </div>
              {items && Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }) => (
                    <li class="mb-2">
                      <Link
                        class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }) => (
              <li>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                  target="_blank"
                >
                  {Icon && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            Made by{" "}
            <a
              class="text-secondary-700 hover:underline dark:text-gray-200"
              href="https://www.linkedin.com/in/thomaspucci/"
            >
              {" "}
              Thomas Pucci
            </a>{" "}
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
