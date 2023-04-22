import { buttonVariants } from "@/components/ui/button";
import brand_values_jpg from "@/images/concept/brand-values.jpg";
import brand_values_webp from "@/images/concept/brand-values.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Join() {
  return (
    <section className="relative flex justify-center border md:justify-start">
      <div
        className="
            grid min-h-[calc(100vh-5rem)] grid-rows-[1fr_auto_auto] gap-12 border border-red-500  py-24 text-center
            md:ml-24 md:grid-rows-none md:place-content-center md:gap-6 md:text-start
            lg:ml-32
            xl:ml-40
            2xl:ml-48
          "
      >
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Bâtir <br />
          ensemble
        </h2>
        <p className="text-xl font-light leading-7 xl:text-2xl 2xl:text-3xl">
          Chez Jane Do l&apos;écoute, la <br /> proximité et l&apos;inclusivité
          sont <br />
          les mots d&apos;ordre pour chacun <br /> des projets que nous <br />
          entreprenons ensemble.
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "gradiant", size: "xl" }),
            "w-fit justify-self-center md:justify-self-start"
          )}
        >
          Contactez-nous
        </Link>
      </div>
      <picture
        className="
            pointer-events-none absolute inset-y-0 -z-10 w-full mix-blend-lighten 
            md:right-0 md:w-[30rem] xl:w-[34rem] 2xl:w-[38rem]
          "
      >
        <source srcSet={brand_values_webp.src} type="image/webp" />
        <Image
          src={brand_values_jpg}
          alt="Chanteur"
          sizes="(min-width: 768px) 30rem, (min-width: 1280px) 34rem, (min-width: 1536px) 38rem, 100vw"
          fill
          priority
          placeholder="blur"
          className="object-cover opacity-30 md:rounded-t-full lg:opacity-90"
        />
        <div className="absolute -inset-1 bg-gradient-to-t from-background via-transparent to-background md:rounded-t-full" />
      </picture>
    </section>
  );
}
