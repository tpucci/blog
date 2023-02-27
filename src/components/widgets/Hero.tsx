import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import { fetchPosts } from "~/utils/posts";

// @ts-ignore
import srcsetAvif from "~/assets/images/hero.jpg?w=400;900&avif&srcset";
// @ts-ignore
import srcsetWebp from "~/assets/images/hero.jpg?w=400;900&webp&srcset";
// @ts-ignore
import { src as placeholder } from "~/assets/images/hero.jpg?width=400&metadata";

export default component$(() => {
  const store = useStore({
    posts: [],
  });

  useTask$(async () => {
    if (isServer) {
      const posts = await fetchPosts();
      store.posts = posts.map((post: any) => ({ ...post }));
    }
  });

  return (
    <section
      class={`bg-gradient-to-b md:bg-gradient-to-r from-white via-purple-50 to-sky-100 dark:from-slate-900 dark:via-purple-900/10 dark:to-sky-900/20 mt-[-72px]`}
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 md:flex pt-[72px]">
        <div class="py-12 md:py-12 lg:py-16 block md:flex">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex basis-3/5">
            <div>
              <div class="max-w-3xl mx-auto">
                <ul>
                  {store.posts.map((post: any) => (
                    <li>
                      <article class="max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8">
                        <div>
                          <header>
                            {post.tags.map((tag: string) => (
                              <span class="uppercase text-xs px-1 py-0.5 mr-1 border rounded-sm text-gray-500 dark:text-slate-400 border-gray-500 dark:border-slate-400">
                                {tag}
                              </span>
                            ))}
                            <h2 class="text-xl sm:text-2xl font-bold leading-snug mb-2 mt-1 font-heading">
                              <a
                                class="hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"
                                href={`/blog/${post.slug}`}
                              >
                                {post.title}
                              </a>
                            </h2>
                          </header>
                          <p class="text-md sm:text-lg flex-grow mb-8">
                            <span class="text-gray-500 dark:text-slate-400">
                              <time dateTime={post.publishDate}>
                                {post.publishDate}
                              </time>
                              {" - "}
                            </span>
                            {post.excerpt || post.description}
                          </p>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="hidden md:flex flex-1">
            <div class="relative max-w-4xl">
              <picture>
                <source srcSet={srcsetAvif} type="image/avif" />
                <source srcSet={srcsetWebp} type="image/webp" />
                <img
                  src={placeholder}
                  width={1000}
                  height={1250}
                  class="w-full rounded-md drop-shadow-2xl bg-gray-400 dark:bg-slate-700 object-contain"
                  alt="Thomas Pucci"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
