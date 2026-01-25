import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeft, Smartphone } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/app/_components/ServiceCard";
import CopyButton from "@/app/_components/CopyButton";
import Footer from "@/app/_components/footer";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/_components/ui/avatar";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;

  const barbershop = await prisma.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Image with Back Button */}
      <div className="relative h-[297px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover"
          priority
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 left-4 z-10 rounded-full"
          asChild
        >
          <Link href="/">
            <ChevronLeft className="h-6 w-6" />
          </Link>
        </Button>
      </div>

      {/* Content Container */}
      <div className="bg-background relative -mt-6 rounded-t-3xl px-5 pb-6">
        {/* Barbershop Info */}
        <div className="border-border border-b pt-5 pb-5">
            <div className="flex gap-2">
              <Avatar className="bg-muted h-8 w-8 rounded-full">
                <AvatarImage src={barbershop.imageUrl} alt={barbershop.name} />
                <AvatarFallback>{barbershop.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-bold">{barbershop.name}</h1>
            </div>
            <p className="text-muted-foreground">
              {barbershop.address}
            </p>
        </div>

        {/* About Section */}
        <div className="border-border border-b py-5">
          <h2 className="text-foreground mb-3 text-xs font-bold uppercase">
            Sobre nós
          </h2>
          <p className="text-sm leading-relaxed">{barbershop.description}</p>
        </div>

        {/* Services Section */}
        <div className="border-border border-b py-5">
          <h2 className="text-muted-foreground mb-3 text-xs font-bold uppercase">
            Serviços
          </h2>
          <div className="space-y-3">
            {barbershop.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-5">
          <h2 className="text-foreground mb-3 text-xs font-bold uppercase">
            Contato
          </h2>
          <div className="space-y-3">
            {barbershop.phones.map((phone, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Smartphone className="h-6 w-6" />
                  <span className="text-foreground text-sm leading-[1.4]">
                    {phone}
                  </span>
                </div>
                <CopyButton text={phone} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BarbershopPage;
