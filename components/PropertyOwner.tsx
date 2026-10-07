import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { OwnerForm } from "./OwnerForm";
import { images } from "@/data/images";

export function PropertyOwner() {
  return (
    <section className="bg-white py-20">
      <div className="container-site grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <p className="eyebrow">For Property Owners</p>
          <h2 className="mt-3 font-serif text-4xl text-pride-900 sm:text-5xl">Have a Property to Sell or Rent?</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            List your Dansoman house, Weija plot or Accra apartment with Pride Rock. We present it clearly and
            follow up with people who are actually ready to view.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/list-property?intent=sell" className="rounded-full bg-pride-900 px-6 py-3 text-sm font-semibold text-white">
              Sell My Property
            </Link>
            <Link href="/list-property?intent=rent" className="rounded-full border border-pride-900/20 px-6 py-3 text-sm font-semibold text-pride-900">
              Rent My Property
            </Link>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-3xl">
            <Image
              src={images.owner}
              alt="Interior of a well-presented home ready to list"
              width={800}
              height={520}
              className="h-72 w-full object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <OwnerForm />
        </FadeIn>
      </div>
    </section>
  );
}
