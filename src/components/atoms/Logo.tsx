import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo.svg?width=64&height=64&png";

export default component$(() => (
  <p class="self-center ml-2 text-md md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white flex items-center whitespace-normal">
    <img
      src={logoSrc}
      class="inline-block mr-2"
      width={32}
      height={32}
      alt="Cadence Logo"
      loading="lazy"
    />
    <span>
      <span class="whitespace-nowrap mr-2">Thomas Pucci</span>{" "}
      <span class="text-gray-500 whitespace-nowrap dark:text-gray-500">
        Indie making & Staff Eng. stuff ☃️
      </span>
    </span>
  </p>
));
