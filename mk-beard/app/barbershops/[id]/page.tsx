import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Smartphone } from "lucide-react";
import { ServiceCard } from "@/app/_components/ServiceCard";
import CopyButton from "@/app/_components/CopyButton";
import Footer from "@/app/_components/footer";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/_components/ui/avatar";
import {
  PageHeroImage,
  PageContentCard,
  PageEntityHeader,
  PageEntityTitle,
  PageEntitySubtitle,
  PageSectionTitle,
  PageSection,
  PageTextContent,
  PhoneDisplay,
  PhoneDisplayInfo,
  PhoneDisplayNumber,
} from "@/app/_components/ui/page";
import { Separator } from "@/app/_components/ui/separator";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;

  const barbershop = await prisma.barbershop.findUnique({
    where: { id },
    include: { services: true },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <PageHeroImage>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover"
          priority
        />
      </PageHeroImage>

      <PageContentCard>
        <PageSection>
          <PageEntityHeader>
            <PageEntityTitle>
              <Avatar className="bg-muted h-8 w-8 rounded-full">
                <AvatarImage src={barbershop.imageUrl} alt={barbershop.name} />
                <AvatarFallback>{barbershop.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-bold">{barbershop.name}</h1>
            </PageEntityTitle>
            <PageEntitySubtitle>{barbershop.address}</PageEntitySubtitle>
          </PageEntityHeader>
        </PageSection>

        <Separator className="my-5" />
        <PageSection>
          <PageSectionTitle>Sobre nós</PageSectionTitle>
          <PageTextContent>{barbershop.description}</PageTextContent>
        </PageSection>

        <Separator className="my-5" />
        <PageSection>
          <PageSectionTitle>Serviços</PageSectionTitle>
          <PageSection>
            {barbershop.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </PageSection>
        </PageSection>

        <Separator className="my-5" />
        <PageSection>
          <PageSectionTitle>Contato</PageSectionTitle>
          <PageSection>
            {barbershop.phones.map((phone, index) => (
              <PhoneDisplay key={index}>
                <PhoneDisplayInfo>
                  <Smartphone className="h-6 w-6" />
                  <PhoneDisplayNumber>{phone}</PhoneDisplayNumber>
                </PhoneDisplayInfo>
                <CopyButton text={phone} />
              </PhoneDisplay>
            ))}
          </PageSection>
        </PageSection>
      </PageContentCard>

      <Footer />
    </div>
  );
};

export default BarbershopPage;
