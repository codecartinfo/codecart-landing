import { getDictionary, type Locale } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { HowWeWork } from "@/components/how-we-work";
import { Contacts } from "@/components/contacts";
import { Footer } from "@/components/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <HowWeWork dict={dict} />
        <Contacts dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
