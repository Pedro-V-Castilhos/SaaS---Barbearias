import Image from "next/image";
import { BarbershopService } from "../generated/prisma/client";
import { Button } from "./ui/button";
import React from "react";

interface ServiceCardProps {
  service: BarbershopService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="border-secondary bg-card flex w-full items-center gap-3 rounded-2xl border border-solid p-3">
      <ServiceCardImage imageUrl={service.imageUrl} name={service.name} />
      <ServiceCardInfo>
        <ServiceCardHeader>
          <ServiceTitle>{service.name}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCardHeader>
        <ServiceCardFooter>
          <ServicePrice>{service.priceInCents}</ServicePrice>
          <ServiceBookingButton />
        </ServiceCardFooter>
      </ServiceCardInfo>
    </div>
  );
};

export const ServiceCardImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => (
  <div className="relative h-[110px] w-[110px] flex-shrink-0 overflow-hidden rounded-[10px]">
    <Image src={imageUrl} alt={name} fill className="object-cover" />
  </div>
);

export const ServiceCardInfo = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex flex-1 flex-col justify-between self-stretch">
    {children}
  </div>
);

export const ServiceCardHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex flex-col gap-1">{children}</div>;

export const ServiceTitle = ({ children }: { children: string }) => (
  <h3 className="text-card-foreground text-sm leading-[1.4] font-bold">
    {children}
  </h3>
);

export const ServiceDescription = ({ children }: { children: string }) => (
  <p className="text-muted-foreground line-clamp-2 text-sm leading-[1.4]">
    {children}
  </p>
);

export const ServicePrice = ({ children }: { children: number }) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(children / 100);
  return (
    <p className="text-card-foreground text-sm leading-[1.4] font-bold">
      {formattedPrice}
    </p>
  );
};

export const ServiceBookingButton = () => (
  <Button className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm leading-[1.4] font-bold">
    Reservar
  </Button>
);

export const ServiceCardFooter = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="flex items-center justify-between">{children}</div>;
